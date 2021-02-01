import React, { useState } from 'react';
import { Stage, Layer, Rect,Line,Circle,RegularPolygon,Star, Transformer } from 'react-konva';

const Canvas = (props) => {
  const [backgroundrect,setBackgroundRect] = useState(null)
  const handleRectClick = (e) => {
    setBackgroundRect(props.colorSet);
  };
  const [backgroundcircle,setBackgroundCircle] = useState(null)
  const handleCircleClick = (e) => {
    setBackgroundCircle(props.colorSet);
  }
  const [backgrounddiamd,setBackgroundDiamd] = useState(null)
  const handleDiamdClick = (e) => {
    setBackgroundDiamd(props.colorSet);
  }
  const [backgroundtri,setBackgroundTri] = useState(null)
  const handleTriClick = (e) => {
    setBackgroundTri(props.colorSet);
  }
  const [backgroundstar,setBackgroundStar] = useState(null)
  const handleStarClick = (e) => {
    setBackgroundStar(props.colorSet);
  }
  const [backgroundsq,setBackgroundSq] = useState(null)
  const handleSqClick = (e) => {
    setBackgroundSq(props.colorSet);
  }
  const [backgroundpoly,setBackgroundPoly] = useState(null)
  const handlePolyClick = (e) => {
    setBackgroundPoly(props.colorSet);
  }
  

  return (
    <Stage width={1230} height={700}>
      <Layer>
        {props.rect && <Rect
          x={20}
          y={50}
          width={200}
          height={100}
          fill={backgroundrect}
          stroke="black"
          draggable="true"
          onClick={handleRectClick}
          // id="rectangle"
        />}
      {props.circle && <Circle x={200} y={100} radius={50} stroke="black" draggable="true" 
      fill={backgroundcircle}
      onClick={handleCircleClick}
      />}
       { props.diamond &&<Line
           x={200}
           y={200}
           points={[75,0,150,100,75,200,0,100]}
           stroke="black"
           strokeWidth={2}
           fill={backgrounddiamd}
           closed="true"
           draggable="true"
           onClick={handleDiamdClick}
          />}
           {props.triangle && <Line
            x={300}
            y={300}
            points={[0,0,200,0,100,-150]}
            stroke="black"
            strokeWidth={2}
            fill={backgroundtri}
            closed="true"
            draggable="true"
            onClick={handleTriClick}
          />}
          { props.stars && <Star
            x={400}
            y={400}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            stroke="black"
            fill={backgroundstar}
            opacity={0.8}
            draggable="true"
            onClick={handleStarClick}
          />}
          {props.square && <Rect
          x={200}
          y={100}
          width={100}
          height={100}
          fill={backgroundsq}
          draggable="true"
          onClick={handleSqClick}
        />}
       {props.hexagon && <RegularPolygon
           x={100}
           y={200}
           sides= {6}
           radius={70}
           stroke="black"
           fill={backgroundpoly}
           strokeWidth={2}
           draggable="true"
           onClick={handlePolyClick}
          />}
      </Layer>
    </Stage>
  );
};
export default Canvas;


