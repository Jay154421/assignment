import { Cards } from "./Cards";
import React, { useState, useRef } from "react";
import "../App.css";

export function MainContent() {
  const [imgProfile, setImgProfile] = useState([]);
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    address: "",
    phone: "",
  });

  const [store, setStore] = useState([]);
  const [storeImg, setStoreImg] = useState([]);
  const fileInputRef = useRef(null); // Create a ref for the file input

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImgProfile(url);
      console.log("Updated imgProfile:", url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setStore([...store, values]);
    setStoreImg([...storeImg, imgProfile]);
    setValues({
      fullname: "",
      email: "",
      address: "",
      phone: "",
    });
    setImgProfile([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input
    }
    console.log(storeImg);
    console.log(store);
  };

  return (
    <div>
      <h1>Create Profile</h1>
      <div className="form">
        <form className="form-input" onSubmit={handleSubmit}>
          {imgProfile.length > 0 &&
            imgProfile.map((img, index) => (
              <img
                key={index}
                className="img-profile"
                src={img}
                alt="Profile"
              />
            ))}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef} // Attach the ref to the file input
          />
          <input
            type="text"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="card-wrapper">
        {store.map((item, index) => (
          <Cards key={index} img={storeImg[index]} {...item} />
        ))}
      </div>
    </div>
  );
}
