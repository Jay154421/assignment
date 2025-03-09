import { Cards } from "./Cards";
import React, { useState } from "react";
import "../App.css";

export function MainContent() {
  const [imgProfile, setImgProfile] = useState();
  console.log("Initial imgProfile:", imgProfile);
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    address: "",
    phone: "",
  });

  const [store, setStore] = useState([]);
  const [storeImg, setStoreImg] = useState([]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    console.log("drwerewr mee!!", e.target.files.length);
    console.log("drwerewr mee!!", e.target.files[0]);
    if (e.target.files.length > 0) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImgProfile(url);
      console.log("Updated imgProfile:", url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStore([...store, values]);
    setStoreImg([...storeImg, imgProfile]);
    setValues({
      fullname: "",
      email: "",
      address: "",
      phone: "",
    });
    console.log(storeImg);
    console.log(store);
  };

  return (
    <div>
      <h1>Create Profile</h1>
      <div className="form">
        <form className="form-input" onSubmit={handleSubmit}>
          {imgProfile ? (
            <img className="img-profile" src={imgProfile} />
          ) : ( 
            <img hidden />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
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
