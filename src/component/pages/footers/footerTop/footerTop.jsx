import React from "react";
import FlightIcon from '@material-ui/icons/Flight';
import "../footer.scss";

class Footertop extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
  render() {
    return (
      <div className="footer-top-container">
        <div className="footer-top-all-container">
          <div className="footer-top-data-container">
            <h2>FREE Delivery</h2>
            <p>All over India.</p>
          </div>

          <div>
            <div className="footer-top-data-container">
              <h2>FREE Returns</h2>
              <p>Within 7 days</p>
            </div>
          </div>
          <div>
            <div className="footer-top-data-container">
              <h2>Need help? +91 95139 74454</h2>
              <p>Call us on our toll free number</p>
            </div>
          </div>
          <div>
            <div className="footer-top-data-container">
              <h2>Money Back Guarantee</h2>
              <p>If you are not 100% satisfied</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footertop;
