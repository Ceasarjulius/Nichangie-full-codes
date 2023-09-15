import FormContainer1 from "./FormContainer1";
import "./Footer1.css";

const Footer1 = () => {
  return (
    <div className="div9">
      <div className="container2">
        <div className="row2">
          <FormContainer1
            iconCode="/antdesignfacebookfilled.svg"
            carImageCode="/antdesigninstagramoutlined.svg"
            dimensionCode="/antdesigntwitteroutlined.svg"
          />
          <div className="col-md-36">
            <b className="h36">Company info</b>
            <div className="div10">
              <b className="link8">About Us</b>
            </div>
          </div>
          <div className="col-md-37">
            <b className="h36">Features</b>
            <div className="div11">
              <b className="link8">Fundraiser management</b>
              <b className="link8">Share</b>
              <b className="link8">Unlimited Support</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
