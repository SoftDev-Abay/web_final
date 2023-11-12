import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const AddProductModal = ({ show, setShow }) => {
  const [img, setImg] = useState();
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    category: "",
    price: 0,
    sale: 0,
  });

  const { name, desc, price, category, sale } = formData;

  const handleClose = () => setShow(false);

  const handleAdd = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("product_name", name);
    formData.append("product_description", desc);
    formData.append("product_price", price);
    formData.append("product_image", img);
    formData.append("category", category);
    formData.append("sale", sale);
    const result = await axios.post(
      "http://localhost:5000/products",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeImg = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductDesc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="desc"
                value={desc}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductImg">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="img"
                onChange={handleChangeImg}
                accept="image/*"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={category}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductSale">
              <Form.Label>Sale</Form.Label>
              <Form.Control
                type="number"
                name="sale"
                value={sale}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProductModal;
