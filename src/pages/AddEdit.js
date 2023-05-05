import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import firedb from "../firebase";
import {} from "react-toastify";

const initialState = {
  ISBN: "",
  Author: "",
  Title: "",
  Price: "",
};

function AddEdit() {
  const [state, seState] = useState(initialState);
  const [data, setData] = useState({});

  const { ISBN, Author, Title, Price } = state;

  const handleInputChange = () => {};

  return (
    <div>
      <form
        style={{
          marginBottom: "100px",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <label htmlFor="ISBN"></label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          placeholder="Enter ISBN No"
          value={ISBN}
          onChange={handleInputChange}
        />
        <label htmlFor="Author"></label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Enter Author Name"
          value={Author}
          onChange={handleInputChange}
        />
        <label htmlFor="Title"></label>
        <input
          type="text"
          id="bookname"
          name="bookname"
          placeholder="Enter Book Name"
          value={Title}
          onChange={handleInputChange}
        />
        <label htmlFor="Price"></label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Enter Price"
          value={Price}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default AddEdit;
