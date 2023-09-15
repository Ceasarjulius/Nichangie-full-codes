import "./FormContainer1.css";

const FormContainer1 = ({ iconCode, carImageCode, dimensionCode }) => {
  return (
    <div className="col-md-33">
      <b className="h33">Get In Touch</b>
      <div className="paragraph1">Reach us through</div>
      <div className="social-media1">
        <img className="facebook-icon" alt="" src={iconCode} />
        <img className="facebook-icon" alt="" src={carImageCode} />
        <img className="twitter-icon" alt="" src={dimensionCode} />
      </div>
    </div>
  );
};

export default FormContainer1;
