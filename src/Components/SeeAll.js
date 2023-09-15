import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer1 from "../Components/Footer1";
import StatesDefault from "../Components/StatesDefault";
import "./SeeAll.css";

const SeeAll = () => {
  const navigate = useNavigate();

  const onFilledmediumFilledButtonClick = useCallback(() => {
    navigate("/donate");
  }, [navigate]);

  const onFilledmediumFilledButton1Click = useCallback(() => {
    navigate("/donate");
  }, [navigate]);

  const onFilledmediumFilledButton2Click = useCallback(() => {
    navigate("/donate");
  }, [navigate]);

  const onFilledmediumFilledButton3Click = useCallback(() => {
    navigate("/donate");
  }, [navigate]);

  const onFilledmediumFilledButton4Click = useCallback(() => {
    navigate("/donate");
  }, [navigate]);

  const onFilledmediumFilledButton5Click = useCallback(() => {
    navigate("/donate");
  }, [navigate]);

  const onFilledmediumFilledButton6Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onReadMore4Click = useCallback(() => {
    navigate("/read-more");
  }, [navigate]);

  return (
    <div className="see-all1">
      <img className="see-all-child" alt="" src="/heartpatient.png" />
      <img className="see-all-item" alt="" src="/rectangle-19@2x.png" />
      <img className="see-all-inner" alt="" src="/cancer.png" />
      <StatesDefault
        button="DONATE NOW"
        statesDefaultBorderRadius="25px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="calc(50% - 193.5px)"
        statesDefaultRight="1125px"
        statesDefaultWidth="228px"
        statesDefaultHeight="50px"
        statesDefaultBoxSizing="border-box"
        statesDefaultPadding="var(--padding-7xs) var(--padding-5xl)"
        statesDefaultLeft="unset"
        buttonDisplay="inline-block"
        buttonFontSize="17px"
        buttonFontFamily="Montserrat"
        onFilledmediumFilledButtonClick={onFilledmediumFilledButtonClick}
      />
      <StatesDefault
        button="DONATE NOW"
        statesDefaultBorderRadius="25px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="calc(50% + 595.5px)"
        statesDefaultRight="98px"
        statesDefaultWidth="228px"
        statesDefaultHeight="50px"
        statesDefaultBoxSizing="border-box"
        statesDefaultPadding="var(--padding-7xs) var(--padding-5xl)"
        statesDefaultLeft="unset"
        buttonDisplay="inline-block"
        buttonFontSize="17px"
        buttonFontFamily="Montserrat"
        onFilledmediumFilledButtonClick={onFilledmediumFilledButton1Click}
      />
      <StatesDefault
        button="DONATE NOW"
        statesDefaultBorderRadius="25px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="calc(50% + 595.5px)"
        statesDefaultRight="606px"
        statesDefaultWidth="228px"
        statesDefaultHeight="50px"
        statesDefaultBoxSizing="border-box"
        statesDefaultPadding="var(--padding-7xs) var(--padding-5xl)"
        statesDefaultLeft="unset"
        buttonDisplay="inline-block"
        buttonFontSize="17px"
        buttonFontFamily="Montserrat"
        onFilledmediumFilledButtonClick={onFilledmediumFilledButton2Click}
      />
      <StatesDefault
        button="DONATE NOW"
        statesDefaultBorderRadius="25px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="calc(50% + 595.5px)"
        statesDefaultRight="1125px"
        statesDefaultWidth="228px"
        statesDefaultHeight="50px"
        statesDefaultBoxSizing="border-box"
        statesDefaultPadding="var(--padding-7xs) var(--padding-5xl)"
        statesDefaultLeft="unset"
        buttonDisplay="inline-block"
        buttonFontSize="17px"
        buttonFontFamily="Montserrat"
        onFilledmediumFilledButtonClick={onFilledmediumFilledButton3Click}
      />
      <StatesDefault
        button="DONATE NOW"
        statesDefaultBorderRadius="25px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="calc(50% - 193.5px)"
        statesDefaultRight="111px"
        statesDefaultWidth="228px"
        statesDefaultHeight="50px"
        statesDefaultBoxSizing="border-box"
        statesDefaultPadding="var(--padding-7xs) var(--padding-5xl)"
        statesDefaultLeft="unset"
        buttonDisplay="inline-block"
        buttonFontSize="17px"
        buttonFontFamily="Montserrat"
        onFilledmediumFilledButtonClick={onFilledmediumFilledButton4Click}
      />
      <StatesDefault
        button="DONATE NOW"
        statesDefaultBorderRadius="25px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="calc(50% - 193.5px)"
        statesDefaultRight="611px"
        statesDefaultWidth="228px"
        statesDefaultHeight="50px"
        statesDefaultBoxSizing="border-box"
        statesDefaultPadding="var(--padding-7xs) var(--padding-5xl)"
        statesDefaultLeft="unset"
        buttonDisplay="inline-block"
        buttonFontSize="17px"
        buttonFontFamily="Montserrat"
        onFilledmediumFilledButtonClick={onFilledmediumFilledButton5Click}
      />
      <div className="help-young-sheldon3">
        Help young Sheldon perform his heart surgery
      </div>
      <div className="it-is-possible">{`it is possible if we come together, he can overcome the kidney issue by transplant `}</div>
      <div className="help-collect-funds1">
        Help collect funds for sickle cell anemia patients
      </div>
      <div className="skin-diseases-kills">
        Skin diseases kills most of our beloved ones help jonathan
      </div>
      <div className="even-elders-have">
        even elders have to live happily show your love to madam Jane overcome
        lung disease
      </div>
      <div className="help-anne-beat2">Help Anne beat cancer</div>
      <img
        className="unsplashdjrtjx-obce-icon"
        alt=""
        src="/heartpatient.png"
      />
      <img
        className="unsplashxi-dfx7oxkk-icon"
        alt=""
        src="/cancer.png"
      />
      <img
        className="unsplashvqlwfi-lyeo-icon"
        alt=""
        src="/rectangle-19@2x.png"
      />
      <button className="read-more4">Read more</button>
      <button className="read-more5">Read more</button>
      <button className="read-more6">Read more</button>
      <button className="read-more7">Read more</button>
      <button className="read-more8" onClick={onReadMore4Click}>
        Read more
      </button>
      <button className="read-more9">Read more</button>
      <Footer1 />
      <img className="handmade-icon8" alt="" src="/nichangielogo.png" />
      <div className="nichangie8">Nichangie</div>
      <StatesDefault
        button="Sign in"
        statesDefaultBorderRadius="25px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="unset"
        statesDefaultPosition="absolute"
        statesDefaultTop="calc(50% - 977.5px)"
        statesDefaultRight="265px"
        statesDefaultWidth="100px"
        statesDefaultHeight="40px"
        statesDefaultBoxSizing="border-box"
        statesDefaultPadding="var(--padding-7xs) var(--padding-5xl)"
        statesDefaultLeft="unset"
        buttonDisplay="inline-block"
        buttonFontSize="14px"
        buttonFontFamily="Montserrat"
        onFilledmediumFilledButtonClick={onFilledmediumFilledButton6Click}
      />
      <button className="language2">Language</button>
      <button className="support1">Support</button>
    </div>
  );
};

export default SeeAll;
