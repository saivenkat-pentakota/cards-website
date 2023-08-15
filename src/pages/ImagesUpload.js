import React, { useState ,useEffect} from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

const ImagesUpload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div className=" d-flex flex-row justify-content-center images-upload" style={{alignItems:"center"}}>
      <input className="btn btn-outline-primary p-2 m-2" 
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile} className="btn btn-primary" style={{width:"180px",height:"40px"}}> Upload Image </button>
      {imageUrls.map((url) =>{
        return <img src={url}/>
      })}
    </div>
  );
};

export default ImagesUpload;
