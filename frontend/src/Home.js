import React, { useState, useContext } from "react";
import homeimg from "./images/home.png";
import axios from "axios";

import AuthContext from "./AuthContext.js";

const Home = () => {
  let [file, setFile] = useState(null);
  let [fileUploaded, setFileUploaded] = useState(false)
  let [fileInfo, setFileInfo] = useState({})
  
  let {authToken} = useContext(AuthContext)
  console.log(file)
  let handleChange = (event) => {
    setFile(event.target.files[0]);
    setFileInfo(event.target.files[0])
    setFileUploaded(true)
  //  console.log("FILEup", fileUploaded);
    //console.log("FILEinf", fileInfo);

  //  console.log("FILE", file);

  };
  console.log(file)
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const img = URL.createObjectURL(file);
  //  console.log(img);
    const url = "http://127.0.0.1:8000/api/home";
    //   const data ={
    //    'name': file.name,
    //  'image': img
    //  }
    //  const json_data = JSON.stringify(data)
    //  console.log(json_data)

    
    const formData = new FormData();
    if (file !== null) {
      formData.append("name", file.name);
      formData.append("image", file);
      formData.append("size", file.size);
  //    console.log(formData);
    }
    //  const config = {
    //   headers: {
    //     "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'"

    //   }
    //  };
    await axios({
      method: "post",
      url: url,
      data: formData,
      headers: {
        "content-type": "multipart/form-data",
        'Authorization': "JWT "+ String(authToken.access),
      }
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  const fileSize = (file) => {
    var file_size;
    if (file.size > 1000000){
      file_size = (file.size/1000000).toFixed(1) 
    }
    else if (file.size > 1000){
      file_size = (file.size/1000).toFixed(1) 
    }
    return file_size
  }

  return (
    <div className="opacity-80  relative  text-white">
     <img className="" src={homeimg} /> 
      <div className="  absolute inset-2/4 -translate-y-1/2 -translate-x-1/2">
     
     
        <form onSubmit={handleSubmit} method="post" className="flex flex-col  items-center ">
        <label onChange={e => handleChange( e)} htmlFor="formId">
          <input type="file"  id="formId" hidden accept="image/*"  />
          
          <div><i className="fa-solid fa-cloud-arrow-up  text-9xl flex justify-center"></i>Select files to upload</div>
        </label>
        {  fileUploaded && <div className="">
          <div className="font-bold">Filename: <span className="font-light">{file.name}</span></div>
          <div className="font-bold">Size: <span className="font-light">{fileSize(file)}{file.size > 1000000 ? "MB" : "KB"}</span></div>
          <div className="flex justify-center"><button type="submit" className=" bg-[#e06377] px-8 py-3 font-bold  flex justify-center  rounded-md hover:bg-[#c83349]">Upload</button>
          </div></div>}</form>
      </div>
    </div>
  );
};

export default Home;
