import * as React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="footer font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid  className="text-dark">
          &copy; {new Date().getFullYear()}&nbsp;
          <span className="text-dark">
            ВКС России! Слава Императору!
          </span>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;