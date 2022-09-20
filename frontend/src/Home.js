import React, { useState } from "react";
import homeimg from "./images/homeimg.png";
import axios from "axios";

const Home = () => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    console.log(file);
  };
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
      console.log(formData);
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
        "content-type": "multipart/form-data"
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

  return (
    <div className="w-full h-full opacity-80">
      <img className=" " src={homeimg} />
      <div className="absolute inset-1/2">
        <i className="fa-solid fa-cloud-arrow-up text-9xl"></i>
        <form onSubmit={handleSubmit} method="post">
          <input type="file" accept="image/*" onChange={handleChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
