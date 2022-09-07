import React from "react";

const Img = ({ name }) => {
  console.log("Data is", name);
  return (
    <div>
      <img
        src={name}
        alt=""
        style={{ width: 400, height: 400, padding: "40px" }}
      />
      <div>{name}</div>
    </div>
  );
};

export default Img;
