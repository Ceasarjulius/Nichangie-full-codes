import { useMemo } from "react";
import "./StatesDefault.css";

const StatesDefault = ({
  button,
  statesDefaultBorderRadius,
  statesDefaultBackgroundColor,
  statesDefaultCursor,
  statesDefaultBorder,
  statesDefaultPosition,
  statesDefaultTop,
  statesDefaultRight,
  statesDefaultWidth,
  statesDefaultHeight,
  statesDefaultBoxSizing,
  statesDefaultPadding,
  statesDefaultLeft,
  buttonDisplay,
  buttonFontSize,
  buttonFontFamily,
  onFilledmediumFilledButtonClick,
}) => {
  const statesDefaultStyle = useMemo(() => {
    return {
      borderRadius: statesDefaultBorderRadius,
      backgroundColor: statesDefaultBackgroundColor,
      cursor: statesDefaultCursor,
      border: statesDefaultBorder,
      position: statesDefaultPosition,
      top: statesDefaultTop,
      right: statesDefaultRight,
      width: statesDefaultWidth,
      height: statesDefaultHeight,
      boxSizing: statesDefaultBoxSizing,
      padding: statesDefaultPadding,
      left: statesDefaultLeft,
    };
  }, [
    statesDefaultBorderRadius,
    statesDefaultBackgroundColor,
    statesDefaultCursor,
    statesDefaultBorder,
    statesDefaultPosition,
    statesDefaultTop,
    statesDefaultRight,
    statesDefaultWidth,
    statesDefaultHeight,
    statesDefaultBoxSizing,
    statesDefaultPadding,
    statesDefaultLeft,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      display: buttonDisplay,
      fontSize: buttonFontSize,
      fontFamily: buttonFontFamily,
    };
  }, [buttonDisplay, buttonFontSize, buttonFontFamily]);

  return (
    <div
      className="statesdefault"
      style={statesDefaultStyle}
      onClick={onFilledmediumFilledButtonClick}
    >
      <b className="button" style={buttonStyle}>
        {button}
      </b>
    </div>
  );
};

export default StatesDefault;
