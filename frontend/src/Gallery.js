import axios from "axios";
import React, { useState, useEffect } from "react";
import Img from "./Img.js";

const Gallery = () => {
  const [gallery, setGallery] = useState([])
  const reader=new FileReader()
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/gallery/")
      .then(res=>
  
        {setGallery(res.data)}
        )
      .catch(err =>
          console.log(err)
          )
      
      },[gallery])















  //const [data, setData] = useState(null);
  {/*}let gallery=[];
  const getData = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/gallery/")
      .then((res) => {
        console.log("res", res)
        gallery.push(res.data)
        console.log("GAllery" ,gallery)
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, [null]);
  let das = document.getElementById("das")
  const display=(gallery)=>{
    for (let i in gallery){
      console.log(i.name, i.image, " .. ")
      das.innerHTML=gallery
    }
  }
//  display(data)
{*/}
  return (
    <div className="grid-cols-3 grid">
      <div>
        {
          gallery.map(image =>(
            <div key={image.id}><div>Image: {reader.readAsDataURL(image.image)}</div>{image.name}</div>
            
          ))
        }
      </div>






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
