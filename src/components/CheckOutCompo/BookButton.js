import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { StyledLink } from "../StyledCompo";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { useHistory } from "react-router";
import "./Checkout.css"

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "60%",
    height: 150,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function BookButton(props) {
  const history = useHistory();
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/main");
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Booking Status</h2>
      <p id="simple-modal-description" style={{ color: "green" }}>
        <CheckCircleOutlineIcon />
        Booked Successfully
      </p>

      <StyledLink to="/main">Close</StyledLink>
    </div>
  );

  return (
    <div>
      <div onClick={handleOpen} className="item d-grid" id="item3">
        <button onClick={props.bookFunc} class="btn btn-primary book-button-checkout" type="button">
          BOOK NOW
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
