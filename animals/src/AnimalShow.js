import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const heartSize = {
    height: clicks * 10 + 10 + "px",
    width: clicks * 10 + 10 + "px",
  };

  return (
    <div className="animal" onClick={handleClick}>
      <img src={svgMap[type]} alt="animal" />
      <img src={heart} className="heart" style={heartSize} alt="heart" />
    </div>
  );
}

export default AnimalShow;
