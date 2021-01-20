import React, { useRef, useEffect } from "react";
import fitImageOnCanvas from "../utils/fitImageOnCanvas";

interface IProps {
  imageSrc: string;
  filter: string;
}

const Canvas = ({ imageSrc, filter }: IProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const image = new Image();
      image.onload = () => {
        fitImageOnCanvas(canvas, image, filter);
      };
      image.src = imageSrc;
    }
  }, []);

  return <canvas ref={canvasRef} width="500px" height="500px"></canvas>;
};

export default Canvas;
