import pixelsJS from "./pixelsJS";

export default function downloadImage(file: File, filter: string) {
  const image = new Image();

  image.onload = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;

    context?.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const data = context?.getImageData(0, 0, canvas.width, canvas.height);
    const newData = pixelsJS.filterImgData(data, filter);
    context?.putImageData(newData, 0, 0);
    const link = document.createElement("a");

    link.download = `${filter}.${file.name.split(".").pop()}`;

    link.href = canvas.toDataURL(file.type);
    link.click();
  };

  image.src = URL.createObjectURL(file);
}
