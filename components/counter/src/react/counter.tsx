import React from 'react';
import { FunctionComponent, useState } from 'react';


const Counter: FunctionComponent<{}> = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>{count} Clicks</button>
  );
};

export { Counter };
