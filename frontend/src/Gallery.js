import axios from "axios";
import React, { useState } from "react";
import Img from "./Img.js";

const Gallery = () => {
  const [data, setData] = useState(null);
  axios
    .get("https://memoscloud.rizwanriaz.repl.co/api/gallery/")
    .then((res) => {
      console.log(res);
      setData(res);
      console.log("DATA", data);
    })
    .catch((err) => console.log(err));

  return (
    <div className="grid-cols-3 grid">
      <Img val={data} />
      {/*}    <Img val="https://images.unsplash.com/photo-1657281277237-e1104ff6f18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      <Img val="https://images.unsplash.com/photo-1657296950265-e17c3db4e85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" />
      <Img val="https://images.unsplash.com/photo-1657281277237-e1104ff6f18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      <Img val="https://images.unsplash.com/photo-1657296950265-e17c3db4e85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" />
      <Img val="https://images.unsplash.com/photo-1657281277237-e1104ff6f18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      <Img val="https://images.unsplash.com/photo-1657296950265-e17c3db4e85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" />
      <Img val="https://images.unsplash.com/photo-1657281277237-e1104ff6f18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    {*/}
    </div>
  );
};

export default Gallery;
