import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  rooting: {
    height: 300,
  },
});

function createData(HotelName, HotelLocation, CheckIn, CheckOut) {
  return { HotelName, HotelLocation, CheckIn, CheckOut };
}

export default function BookingTable() {
  const bookings = useSelector((state) => state.booking.bookingHistory);
  const classes = useStyles();
  const rows = [];
  for (let i = 0; i < bookings.length; i++) {
    const item = bookings[i];
    const newData = createData(
      item.name,
      item.location,
      item.checkIn,
      item.checkOut
    );
    rows.push(newData);
  }

  return (
    <TableContainer component={Paper} className={classes.rooting}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h5>
                <b>Hotel Name</b>
              </h5>
            </TableCell>
            <TableCell align="center">
              <h5>
                <b>Location</b>
              </h5>
            </TableCell>
            <TableCell align="center">
              <h5>
                <b>Check In</b>
              </h5>
            </TableCell>
            <TableCell align="center">
              <h5>
                <b>Check Out</b>
              </h5>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.HotelName}
              </TableCell>
              <TableCell align="center">{row.HotelLocation}</TableCell>
              <TableCell align="center">{row.CheckIn}</TableCell>
              <TableCell align="center">{row.CheckOut}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
