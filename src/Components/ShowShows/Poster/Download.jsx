import React from "react";
import html2canvas from "html2canvas";
import Button from 'react-bootstrap/Button';
import "../../../App.css"

//download button for the poster
export const PosterDownload = (props) => {
  const posterHandleDownload = () => {
    html2canvas(document.querySelector("#download"), {//exports what's inside the div with id ="donwload"
      allowTaint: true,
      useCORS: true,
    }).then(function (canvas) {
      let image = canvas.toDataURL("image/jpeg");
      let link = document.createElement("a");
      link.download = `${props.name}.jpeg`;//named of the saved file 
      link.href = image;
      link.click();
    });
  };

  return (
    <Button id="posterizarButtonSmall" onClick={posterHandleDownload}>Bajar Poster</Button>
  );
};
