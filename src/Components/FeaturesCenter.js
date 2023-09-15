import { useMemo } from "react";
import SizeExtraLarge from "./SizeExtraLarge";
import "./FeaturesCenter.css";

const FeaturesCenter = ({
  icoutlineEmail,
  h3FeatureTitle,
  featuresCenterBackgroundColor,
  featuresCenterPosition,
  featuresCenterTop,
  featuresCenterLeft,
  featuresCenterHeight,
  iconBoxBackgroundColor,
  icoutlineEmailIconOverflow,
  icoutlineEmailIconFlexShrink,
  paragraphFeatureDescriptiColor,
}) => {
  const featuresCenterStyle = useMemo(() => {
    return {
      backgroundColor: featuresCenterBackgroundColor,
      position: featuresCenterPosition,
      top: featuresCenterTop,
      left: featuresCenterLeft,
      height: featuresCenterHeight,
    };
  }, [
    featuresCenterBackgroundColor,
    featuresCenterPosition,
    featuresCenterTop,
    featuresCenterLeft,
    featuresCenterHeight,
  ]);

  const sizeExtraLargeStyle = useMemo(() => {
    return {
      backgroundColor: iconBoxBackgroundColor,
    };
  }, [iconBoxBackgroundColor]);

  const icoutlineEmailIconStyle = useMemo(() => {
    return {
      overflow: icoutlineEmailIconOverflow,
      flexShrink: icoutlineEmailIconFlexShrink,
    };
  }, [icoutlineEmailIconOverflow, icoutlineEmailIconFlexShrink]);

  const paragraphFeatureDescriptionStyle = useMemo(() => {
    return {
      color: paragraphFeatureDescriptiColor,
    };
  }, [paragraphFeatureDescriptiColor]);

  return (
    <div className="featurescenter" style={featuresCenterStyle}>
      <SizeExtraLarge
        icoutlineEmail="/icoutlineemail2.svg"
        sizeExtraLargeBorderRadius="50px"
        sizeExtraLargeBackgroundColor="#f3dcd5"
        sizeExtraLargeFlexShrink="0"
        sizeExtraLargeBoxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        icoutlineEmailIconOverflow="hidden"
        icoutlineEmailIconFlexShrink="0"
      />
      <b className="h3-feature-title1">{h3FeatureTitle}</b>
      <div
        className="paragraph-feature-description1"
        style={paragraphFeatureDescriptionStyle}
      >
        <p className="the-gradual-accumulation">{`The gradual accumulation of `}</p>
        <p className="the-gradual-accumulation">information about atomic.</p>
      </div>
    </div>
  );
};

export default FeaturesCenter;
