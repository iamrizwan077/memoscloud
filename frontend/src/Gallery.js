import axios from "axios";
import React, { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"
import Img from "./Img.js";

const Gallery = () => {
  const [gallery, setGallery] = useState([])
  const [modal, setModal] = useState(false)
  const reader = new FileReader()
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/gallery/")
      .then(res => { setGallery(res.data) }
      )
      .catch(err =>
        console.log(err)
      )

  }, [])

  const handleModal = (e,key) => {
    console.log(modal)
    setModal(!modal)
    console.log(modal)
    console.log(key)
    return key
  }













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
  <div>
    <div className="grid-cols-3 grid gap-2 mx-2 my-2">
      {
        gallery.map((image,key) => (
          <div key={key} className="m-4 " onClick={e=>handleModal(e, key)}>
            <img className="w-full h-full" src={`http://localhost:8000${image.image}`} /> 
            <div className="truncate">{image.name}</div>
            
          </div>

        ))
      
      }
      {/*}
      {modal && <Lightbox
        imageTitle={gallery[1].name}
        mainSrc={`http://localhost:8000${.image}`}
        onCloseRequest={() => setModal(false)}
      />}
  {*/}
      {/*}
      <div>
        {
          gallery.map(image =>(
            <div key={image.id}>{image.name} ....... http://localhost:8000{image.image} <img src={`http://localhost:8000${image.image}`} /> </div>
            
          ))
        }
      
        <img src="http://localhost:8000/media/images/logo1.png"/>
        <img src="https://th.bing.com/th/id/R.86867a04219a6756478094d5d0fea230?rik=LsrQ6BdXbW76Ug&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1572119459401-944f182281b3%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax&ehk=DCfiR7CMMByG%2fwRbXSOM%2fVlyxbf22QcBkzmIX6nAWCA%3d&risl=&pid=ImgRaw&r=0"/>
      </div>
{*/}





      {/*}    <Img val="https://images.unsplash.com/photo-1657281277237-e1104ff6f18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      <Img val="https://images.unsplash.com/photo-1657296950265-e17c3db4e85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" />
      <Img val="https://images.unsplash.com/photo-1657281277237-e1104ff6f18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      <Img val="https://images.unsplash.com/photo-1657296950265-e17c3db4e85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" />
      <Img val="https://images.unsplash.com/photo-1657281277237-e1104ff6f18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      <Img val="https://images.unsplash.com/photo-1657296950265-e17c3db4e85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" />
      <Img val="https://images.unsplash.com/photo-1657281277237-e1104ff6f18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    {*/}
    </div>
      { 
        console.log(gallery, gallery[0])
      
      
      
      
      }
    </div>
  );
};

export default Gallery;
