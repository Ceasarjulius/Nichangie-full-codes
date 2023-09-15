import { useMemo } from "react";
import SizeExtraLarge from "./SizeExtraLarge";
import "./FeaturesElevated.css";

const FeaturesElevated = ({
  icoutlineEmail,
  h3FeatureTitle,
  paragraphFeatureDescripti,
  featuresElevatedBorderRadius,
  featuresElevatedBackgroundColor,
  featuresElevatedBoxShadow,
  featuresElevatedWidth,
  featuresElevatedPadding,
  featuresElevatedPosition,
  featuresElevatedTop,
  featuresElevatedLeft,
  iconBoxBackgroundColor,
  divGap,
  h3FeatureTitleFontSize,
  h3FeatureTitleLineHeight,
}) => {
  const featuresElevatedStyle = useMemo(() => {
    return {
      borderRadius: featuresElevatedBorderRadius,
      backgroundColor: featuresElevatedBackgroundColor,
      boxShadow: featuresElevatedBoxShadow,
      width: featuresElevatedWidth,
      padding: featuresElevatedPadding,
      position: featuresElevatedPosition,
      top: featuresElevatedTop,
      left: featuresElevatedLeft,
    };
  }, [
    featuresElevatedBorderRadius,
    featuresElevatedBackgroundColor,
    featuresElevatedBoxShadow,
    featuresElevatedWidth,
    featuresElevatedPadding,
    featuresElevatedPosition,
    featuresElevatedTop,
    featuresElevatedLeft,
  ]);

  const sizeExtraLargeStyle = useMemo(() => {
    return {
      backgroundColor: iconBoxBackgroundColor,
    };
  }, [iconBoxBackgroundColor]);

  const divStyle = useMemo(() => {
    return {
      gap: divGap,
    };
  }, [divGap]);

  const h3FeatureTitleStyle = useMemo(() => {
    return {
      fontSize: h3FeatureTitleFontSize,
      lineHeight: h3FeatureTitleLineHeight,
    };
  }, [h3FeatureTitleFontSize, h3FeatureTitleLineHeight]);

  return (
    <div className="featureselevated" style={featuresElevatedStyle}>
      <SizeExtraLarge
        icoutlineEmail="/icoutlineemail.svg"
        sizeExtraLargeBorderRadius="50px"
        sizeExtraLargeBackgroundColor="#d4eaf6"
        sizeExtraLargeFlexShrink="0"
        sizeExtraLargeBoxShadow="unset"
        icoutlineEmailIconOverflow="hidden"
        icoutlineEmailIconFlexShrink="0"
      />
      <div className="div" style={divStyle}>
        <b className="h3-feature-title" style={h3FeatureTitleStyle}>
          {h3FeatureTitle}
        </b>
        <div className="paragraph-feature-description">
          {paragraphFeatureDescripti}
        </div>
      </div>
    </div>
  );
};

export default FeaturesElevated;
