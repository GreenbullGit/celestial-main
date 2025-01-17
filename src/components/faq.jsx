import { useState, useEffect } from "react";

export const Faq = (props) => {

  const [images,setImages] = useState([
    "img/36.png",
    "img/45.png",
    "img/6.png",
    "img/3.png",
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
    <div id="faq">
      <div className="container">
        <div className="row">
        
          <div className="col-xs-12 col-md-6 about-mid float-right">
            <div className="faq-text">
              <h2>F.A.Q</h2>
              <h3>When is the mint date?</h3>
              <p>Official date to be announced, mint to be expected early December.</p>
              <h3>What will be the price?</h3>
              <p>Final mint price to be announced based on SOL's value at the launch date. We are aiming for a mint price of 1.5 SOL.</p>
              <h3>Will you donate to any charities? </h3>
              <p>Yes, when we fully mint out we will donate 20.000 USD to a community decided charity organization.</p>
              <h3>Why choose Celestial Body Shop? </h3>
              <p>We are avid NFT enthusiasts who got tired of the countless generic PFP projects that do nothing but hurt the Solana NFT ecosystem. With CBS you will have a dedicated team that will work on the project tirelessly before and AFTER the mint date. We aim to build an engaging and long lasting community of like minded people - The Celestials. </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 float-left">
            {" "}
            <div className="pic-box">
              <img src={images[currentImage]} className="img-responsive mint-pic" alt="" />{" "}
            </div>
          </div>
          
        </div>
        <div className="row" style={{margin: '50px 0px 10px 0px'}}>
          <div className="col-xs-12" style={{display: 'grid'}}>
          <ul className='nav navbar-nav navbar-right'>
            <li>
            <a href={'https://twitter.com/celestialbodys'} className="footer-links">
                      <i className='fa fa-lg fa-twitter page-scroll social-button'></i>
                    </a>
            </li>
            <li>
            <a href={'https://discord.gg/ez3DrMj3wX'} className="footer-links">
                      <i className='fab fa-lg fa-discord page-scroll social-button'></i>
                    </a>
            </li>
          </ul>
              
          </div>
        </div>
      </div>
    </div>
  );
};
