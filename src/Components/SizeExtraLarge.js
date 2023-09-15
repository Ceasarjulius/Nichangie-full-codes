import { useMemo } from "react";
import "./SizeExtraLarge.css";

const SizeExtraLarge = ({
  icoutlineEmail,
  sizeExtraLargeBorderRadius,
  sizeExtraLargeBackgroundColor,
  sizeExtraLargeFlexShrink,
  sizeExtraLargeBoxShadow,
  icoutlineEmailIconOverflow,
  icoutlineEmailIconFlexShrink,
}) => {
  const sizeExtraLargeStyle = useMemo(() => {
    return {
      borderRadius: sizeExtraLargeBorderRadius,
      backgroundColor: sizeExtraLargeBackgroundColor,
      flexShrink: sizeExtraLargeFlexShrink,
      boxShadow: sizeExtraLargeBoxShadow,
    };
  }, [
    sizeExtraLargeBorderRadius,
    sizeExtraLargeBackgroundColor,
    sizeExtraLargeFlexShrink,
    sizeExtraLargeBoxShadow,
  ]);

  const icoutlineEmailIconStyle = useMemo(() => {
    return {
      overflow: icoutlineEmailIconOverflow,
      flexShrink: icoutlineEmailIconFlexShrink,
    };
  }, [icoutlineEmailIconOverflow, icoutlineEmailIconFlexShrink]);

  return (
    <div className="sizeextra-large" style={sizeExtraLargeStyle}>
      <img
        className="icoutline-email-icon"
        alt=""
        src={icoutlineEmail}
        style={icoutlineEmailIconStyle}
      />
    </div>
  );
};

export default SizeExtraLarge;
