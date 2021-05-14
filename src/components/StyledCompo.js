import { Link } from "react-router-dom";
import styled from "styled-components";


const styledHeader = styled.div`
        position:absolute;
        top:2vw;
        width: 100%;
        

      `;
const StyledLink = styled(Link)`
     
      text-decoration:none;
      margin-left:80vw;
      background-color:#0040ff;
      padding:0.57rem 1.2rem 0.7rem 1.2rem;
      border-radius:5px;
      color:White;
      :hover {
          background-color:#fffff2;
          transition:0.5s;
      }
    `;

      export default styledHeader;
      export {StyledLink};





      