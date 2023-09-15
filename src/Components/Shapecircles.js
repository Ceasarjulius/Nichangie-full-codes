import { useMemo } from "react";
import "./Shapecircles.css";

const Shapecircles = ({
  shapecirclesShapecircles,
  shapecirclesIconWidth,
  shapecirclesIconHeight,
  shapecirclesIconPosition,
  shapecirclesIconTop,
  shapecirclesIconLeft,
}) => {
  const shapecirclesIconStyle = useMemo(() => {
    return {
      width: shapecirclesIconWidth,
      height: shapecirclesIconHeight,
      position: shapecirclesIconPosition,
      top: shapecirclesIconTop,
      left: shapecirclesIconLeft,
    };
  }, [
    shapecirclesIconWidth,
    shapecirclesIconHeight,
    shapecirclesIconPosition,
    shapecirclesIconTop,
    shapecirclesIconLeft,
  ]);

  return (
    <img
      className="shapecircles-icon"
      alt=""
      src={shapecirclesShapecircles}
      style={shapecirclesIconStyle}
    />
  );
};

export default Shapecircles;
