import React, { useState } from 'react';
import './index.less';

interface Color {
  name: string
  hex: string
}

export default (
  visible: boolean,
  title?: string,
) => {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState<Color>({name: 'red', hex: '#f00'})


  return (
    <div className="box">
      <h1 className="title">{visible ? count : color}</h1>
    </div>
  );
}
