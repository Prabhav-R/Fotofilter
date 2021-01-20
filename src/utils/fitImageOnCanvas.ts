import pixelsJS from "./pixelsJS";

export default function fitImageOnCanvas(
  canvas: HTMLCanvasElement,
  imageObj: HTMLImageElement,
  filter: string
) {
  const imageAspectRatio = imageObj.width / imageObj.height;
  const canvasAspectRatio = canvas.width / canvas.height;
  let renderableHeight, renderableWidth, xStart, yStart;

  if (imageAspectRatio < canvasAspectRatio) {
    renderableHeight = canvas.height;
    renderableWidth = imageObj.width * (renderableHeight / imageObj.height);
    xStart = (canvas.width - renderableWidth) / 2;
    yStart = 0;
  } else if (imageAspectRatio > canvasAspectRatio) {
    renderableWidth = canvas.width;
    renderableHeight = imageObj.height * (renderableWidth / imageObj.width);
    xStart = 0;
    yStart = (canvas.height - renderableHeight) / 2;
  } else {
    renderableHeight = canvas.height;
    renderableWidth = canvas.width;
    xStart = 0;
    yStart = 0;
  }
  const context = canvas.getContext("2d");

  if (context) {
    context.drawImage(
      imageObj,
      xStart,
      yStart,
      renderableWidth,
      renderableHeight
    );
    const imageData = context.getImageData(
      xStart,
      yStart,
      renderableWidth,
      renderableHeight
    );

    const newImgData = pixelsJS.filterImgData(imageData, filter);
    context.putImageData(newImgData, xStart, yStart);
  }
}
