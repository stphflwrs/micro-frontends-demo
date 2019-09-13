import React, { FunctionComponent, useState } from 'react';


interface RandomColorProps {
  initialColor?: string;
}

const RandomColor: FunctionComponent<RandomColorProps> = (props: RandomColorProps) => {
  const getRandomHexColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const initialColor: string = props.initialColor !== undefined ? props.initialColor : getRandomHexColor();

  const [color, setColor] = useState(initialColor);

  return (
    <div>
      <div>Current color: <span>{color}</span></div>
      <div>
        <button onClick={() => setColor(getRandomHexColor())}>Randomize</button>
      </div>
    </div>
  );
};

export { RandomColor, RandomColorProps };
