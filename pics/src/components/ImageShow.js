import "../css/imageShow.css";

function ImageShow({ image }) {
  return (
    <div className="image-card">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
