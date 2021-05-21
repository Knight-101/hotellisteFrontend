import { Link } from "react-router-dom";
import styled from "styled-components";

const styledHeader = styled.div`
  position: absolute;
  top: 2vw;
  width: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #0040ff;
  padding: 0.3rem 0.8rem;
  margin-top: 1.5rem;
  height: 2.7rem;
  border-radius: 5px;
  color: White;
  :hover {
    background-color: #fffff2;
    transition: 0.5s;
  }
`;

export default styledHeader;
export { StyledLink };
