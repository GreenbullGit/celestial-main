import { useState, useEffect } from "react";

export const About = (props) => {

  const [images,setImages] = useState([
    "img/8.png",
    "img/12.png",
    "img/20.png",
  ]);
  const [currentImage,setCurrentImage] = useState(0);
  var intervalId;

  const switchImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
      }
    return currentImage;
  }

  useEffect(() => {
      window.setTimeout(switchImage, 2000)
  },[currentImage]);


  return (
    <div id="about" className="padding-top100">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 about-mid">
            <div id="strapin" className="about-text">
              <h2>STRAP IN AND ENJOY THE RIDE</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            
              
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            
              <img src={images[currentImage]} className="img-responsive mint-pic" alt="" />{" "}
            
          </div>
        </div>
      </div>
    </div>
  );
};
