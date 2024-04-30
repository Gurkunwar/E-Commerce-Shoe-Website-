import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          quaerat fuga iure, deserunt commodi veniam doloremque eligendi!
          Placeat repellat provident ad id iste iure quae officiis blanditiis,
          ratione laudantium expedita quia neque labore. Quo a in eveniet iusto
          doloribus totam, deserunt voluptatibus dolore neque accusantium fuga
          placeat esse eligendi rem.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi at
          a animi voluptates inventore ipsa quia suscipit pariatur? Cupiditate
          quis ut asperiores error soluta nulla? Reprehenderit hic est animi at!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
