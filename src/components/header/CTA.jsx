import React from "react";
import CV from "../../assets/BrayanZorroCV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" className="btn btn-primary" rel="noreferrer">
        👀 CV
      </a>
      <a href="#contact" className="btn">
        👋 Escribeme
      </a>
    </div>
  );
};

export default CTA;
