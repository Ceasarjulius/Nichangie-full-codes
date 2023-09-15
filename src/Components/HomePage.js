import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FeaturesCenter from "../Components/FeaturesCenter";
import FeaturesElevated from "../Components/FeaturesElevated";
import Shapecircles from "../Components/Shapecircles";
import "./HomePage.css";
import StatesDefault from "./StatesDefault.js";

const HomePage = () => {
  const navigate = useNavigate();

  const onFilledmediumFilledButtonClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onFilledmediumFilledButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFilledmediumFilledButton3Click = useCallback(() => {
    navigate("/createfundraising");
  }, [navigate]);

  const onFilledmediumFilledButton4Click = useCallback(() => {
    navigate("/donate");
  }, [navigate]);

  const onFilledmediumFilledButton5Click = useCallback(() => {
    navigate("/donate");
  }, [navigate]);

  const onFilledmediumFilledButton6Click = useCallback(() => {
    navigate("/donate");
  }, [navigate]);

  const onSupportClick = useCallback(() => {
    navigate("/support");
  }, [navigate]);

  const onSeeAllClick = useCallback(() => {
    navigate("/seeall");
  }, [navigate]);

  const onReadMoreClick = useCallback(() => {
    navigate("/read-more");
  }, [navigate]);

  const onReadMore1Click = useCallback(() => {
    navigate("/read-more");
  }, [navigate]);

  const onReadMore2Click = useCallback(() => {
    navigate("/read-more");
  }, [navigate]);

  return (
    <div className="desktop-1">
      <img className="desktop-1-child" alt="" src="/rectangle-2@2x.png" />
      <img className="handmade-icon" alt="" src="/nichangielogo.png" />
      <b className="donate-raise-funds">Donate. Raise Funds. Save lives</b>
      <StatesDefault
        button="Get started now"
        statesDefaultBorderRadius="20px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="611px"
        statesDefaultRight="unset"
        statesDefaultWidth="200px"
        statesDefaultHeight="40px"
        statesDefaultBoxSizing="border-box"
        statesDefaultPadding="var(--padding-3xs) var(--padding-21xl)"
        statesDefaultLeft="1047px"
        buttonDisplay="inline-block"
        buttonFontSize="20px"
        buttonFontFamily="Montserrat"
        onFilledmediumFilledButtonClick={onFilledmediumFilledButtonClick}
      />
      <div className="nichangie">Nichangie</div>
      <StatesDefault
        button="Sign in"
        statesDefaultBorderRadius="25px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="calc(50% - 1491.5px)"
        statesDefaultRight="210px"
        statesDefaultWidth="unset"
        statesDefaultHeight="30px"
        statesDefaultBoxSizing="border-box"
        statesDefaultPadding="var(--padding-7xs) var(--padding-5xl)"
        statesDefaultLeft="1150px"
        buttonDisplay="inline-block"
        buttonFontSize="20px"
        buttonFontFamily="Montserrat"
        onFilledmediumFilledButtonClick={onFilledmediumFilledButton1Click}
      />
      <button className="support" onClick={onSupportClick}>
        Support
      </button>
      <button className="language">Language</button>
      <FeaturesCenter
        icoutlineEmail="/vector.svg"
        h3FeatureTitle="Easy setup"
        featuresCenterBackgroundColor="#fffcfc"
        featuresCenterPosition="absolute"
        featuresCenterTop="820px"
        featuresCenterLeft="96px"
        featuresCenterHeight="246px"
        iconBoxBackgroundColor="#ec5c2e"
        icoutlineEmailIconOverflow="unset"
        icoutlineEmailIconFlexShrink="unset"
        paragraphFeatureDescriptiColor="#737373"
      />
      <FeaturesCenter
        icoutlineEmail="/streamlinemoneygrapharrowincreaseascendgrowthuparrowstatsgraphrightgrow1.svg"
        h3FeatureTitle="Track and manage funds"
        featuresCenterBackgroundColor="#fcfcfc"
        featuresCenterPosition="absolute"
        featuresCenterTop="820px"
        featuresCenterLeft="1009px"
        featuresCenterHeight="unset"
        iconBoxBackgroundColor="#31a0fe"
        icoutlineEmailIconOverflow="hidden"
        icoutlineEmailIconFlexShrink="0"
        paragraphFeatureDescriptiColor="#737373"
      />
      <FeaturesCenter
        icoutlineEmail="/mdicardsheart.svg"
        h3FeatureTitle="Receive donations"
        featuresCenterBackgroundColor="#fffefe"
        featuresCenterPosition="absolute"
        featuresCenterTop="820px"
        featuresCenterLeft="548px"
        featuresCenterHeight="unset"
        iconBoxBackgroundColor="#23856d"
        icoutlineEmailIconOverflow="hidden"
        icoutlineEmailIconFlexShrink="0"
        paragraphFeatureDescriptiColor="#737373"
      />
      <div className="desktop-1-item" />
      <b className="on-going-fundraisers">On going fundraisers</b>
      <button className="see-all" onClick={onSeeAllClick}>
        see all
      </button>
      <div className="desktop-1-inner" />
      <StatesDefault
        button="Learn More"
        statesDefaultBorderRadius="20px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="2614px"
        statesDefaultRight="unset"
        statesDefaultWidth="150px"
        statesDefaultHeight="40px"
        statesDefaultBoxSizing="border-box"
        statesDefaultPadding="var(--padding-3xs) var(--padding-21xl)"
        statesDefaultLeft="542px"
        buttonDisplay="inline-block"
        buttonFontSize="20px"
        buttonFontFamily="Montserrat"
      />
      <FeaturesElevated
        icoutlineEmail="/fluentmdl2learningtools.svg"
        h3FeatureTitle="Manage your funds"
        paragraphFeatureDescripti="Track and manage funds from your donors easily"
        featuresElevatedBorderRadius="12px"
        featuresElevatedBackgroundColor="unset"
        featuresElevatedBoxShadow="unset"
        featuresElevatedWidth="450px"
        featuresElevatedPadding="32px"
        featuresElevatedPosition="absolute"
        featuresElevatedTop="2408px"
        featuresElevatedLeft="118px"
        iconBoxBackgroundColor="#c5e2f2"
        divGap="10px"
        h3FeatureTitleFontSize="24px"
        h3FeatureTitleLineHeight="32px"
      />
      <b className="get-set-up">Get set up in 3 easy steps</b>
      <FeaturesElevated
        icoutlineEmail="/materialsymbolsinteractivespaceoutlinerounded.svg"
        h3FeatureTitle="Create your fundraiser"
        paragraphFeatureDescripti="Share a few details about you and create a fundraiser in no time."
        featuresElevatedBorderRadius="12px"
        featuresElevatedBackgroundColor="unset"
        featuresElevatedBoxShadow="unset"
        featuresElevatedWidth="450px"
        featuresElevatedPadding="32px"
        featuresElevatedPosition="absolute"
        featuresElevatedTop="2009px"
        featuresElevatedLeft="118px"
        iconBoxBackgroundColor="#c4e4b9"
        divGap="10px"
        h3FeatureTitleFontSize="24px"
        h3FeatureTitleLineHeight="32px"
      />
      <FeaturesElevated
        icoutlineEmail="/phchalkboardteacherbold.svg"
        h3FeatureTitle="Share your fundraiser"
        paragraphFeatureDescripti="Share your fundraiser in different platforms to get more support"
        featuresElevatedBorderRadius="12px"
        featuresElevatedBackgroundColor="unset"
        featuresElevatedBoxShadow="unset"
        featuresElevatedWidth="450px"
        featuresElevatedPadding="32px"
        featuresElevatedPosition="absolute"
        featuresElevatedTop="2209px"
        featuresElevatedLeft="203px"
        iconBoxBackgroundColor="#f0d1c6"
        divGap="10px"
        h3FeatureTitleFontSize="24px"
        h3FeatureTitleLineHeight="32px"
      />
      <Shapecircles
        shapecirclesShapecircles="/shapecircles1.svg"
        shapecirclesIconWidth="467.78px"
        shapecirclesIconHeight="703px"
        shapecirclesIconPosition="absolute"
        shapecirclesIconTop="1930px"
        shapecirclesIconLeft="784px"
      />
      <StatesDefault
        button="Start Fundraiser"
        statesDefaultBorderRadius="20px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="2614px"
        statesDefaultRight="unset"
        statesDefaultWidth="170px"
        statesDefaultHeight="40px"
        statesDefaultBoxSizing="border-box"
        statesDefaultPadding="var(--padding-3xs) var(--padding-21xl)"
        statesDefaultLeft="210px"
        buttonDisplay="inline-block"
        buttonFontSize="20px"
        buttonFontFamily="Montserrat"
        onFilledmediumFilledButtonClick={onFilledmediumFilledButton3Click}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <b className="h3">Get In Touch</b>
            <div className="div1">+255 668 990 445</div>
            <div className="paragraph">Reach us through</div>
            <div className="social-media">
              <img
                className="ant-designfacebook-filled-icon"
                alt=""
                src="/antdesignfacebookfilled.svg"
              />
              <img
                className="ant-designfacebook-filled-icon"
                alt=""
                src="/antdesigninstagramoutlined.svg"
              />
              <img
                className="ant-designtwitter-outlined-icon"
                alt=""
                src="/antdesigntwitteroutlined.svg"
              />
            </div>
          </div>
          <div className="col-md-31">
            <b className="h3">Company info</b>
            <div className="div2">
              <b className="link">About Us</b>
            </div>
          </div>
          <div className="col-md-32">
            <b className="h3">Features</b>
            <div className="div3">
              <b className="link">Fundraiser management</b>
              <b className="link">Share</b>
              <b className="link">Unlimited Support</b>
            </div>
          </div>
        </div>
      </div>
      <img className="rectangle-icon" alt="" src="/heartpatient.png" />
      <img className="desktop-1-child1" alt="" src="/rectangle-19@2x.png" />
      <img className="desktop-1-child1" alt="" src="/rectangle-19@2x.png" />
      <div className="rectangle-div" />
      <StatesDefault
        button="DONATE NOW"
        statesDefaultBorderRadius="25px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="calc(50% + 160.5px)"
        statesDefaultRight="614px"
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
      <button className="read-more" onClick={onReadMoreClick}>
        Read more
      </button>
      <div className="help-collect-funds">
        Help collect funds for sickle cell anemia patients
      </div>
      <img className="desktop-1-child3" alt="" src="/cancer.png" />
      <div className="desktop-1-child4" />
      <StatesDefault
        button="DONATE NOW"
        statesDefaultBorderRadius="25px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="calc(50% + 160.5px)"
        statesDefaultRight="140px"
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
      <button className="read-more1" onClick={onReadMore1Click}>
        Read more
      </button>
      <div className="help-anne-beat">Help Anne beat cancer</div>
      <div className="desktop-1-child5" />
      <StatesDefault
        button="DONATE NOW"
        statesDefaultBorderRadius="25px"
        statesDefaultBackgroundColor="#4ec14c"
        statesDefaultCursor="pointer"
        statesDefaultBorder="none"
        statesDefaultPosition="absolute"
        statesDefaultTop="calc(50% + 160.5px)"
        statesDefaultRight="1098px"
        statesDefaultWidth="228px"
        statesDefaultHeight="50px"
        statesDefaultBoxSizing="border-box"
        statesDefaultPadding="var(--padding-7xs) var(--padding-5xl)"
        statesDefaultLeft="unset"
        buttonDisplay="inline-block"
        buttonFontSize="17px"
        buttonFontFamily="Montserrat"
        onFilledmediumFilledButtonClick={onFilledmediumFilledButton6Click}
      />
      <div className="help-young-sheldon">
        Help young Sheldon perform his heart surgery
      </div>
      <button className="read-more2" onClick={onReadMore2Click}>
        Read more
      </button>
    </div>
  );
};

export default HomePage;
