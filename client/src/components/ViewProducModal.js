import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function ViewProducModal({ show, setShow, product }) {
  const [changedImg, setChangedImg] = useState();

  const [formData, setFormData] = useState({
    id: product.product_id || "",
    name: product.product_name || "",
    img: product.img_url || "",
    desc: product.description || "",
    price: product.price || 0,
    category: product.category || "",
    sale: product.sale || 0,
  });

  const { id, img, name, desc, price, category, sale } = formData;

  const handleClose = () => setShow(false);

  const handleDelete = async (event) => {
    event.preventDefault();

    const result = await axios.delete(`http://localhost:5000/products/${id}`);

    handleClose();
  };

  const handleSave = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("product_name", name);
    formData.append("product_description", desc);
    formData.append("product_price", price);
    formData.append("product_image", changedImg ? changedImg : img);
    formData.append("category", category);
    formData.append("sale", sale);

    const result = await axios.put(
      `http://localhost:5000/products/${id}`,
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
    console.log(file);
    setChangedImg(file);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
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
            <div className="d-flex justify-content-center">
              <img
                src={
                  changedImg
                    ? URL.createObjectURL(changedImg)
                    : "http://localhost:5000/images/" + img
                }
                className="w-50 h-50"
                alt=""
              />
            </div>
            <Form.Group className="mb-3" controlId="formProductImg">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="img"
                onChange={handleChangeImg}
                accept="image/*"
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
            <Form.Group className="mb-3" controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
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
          <Button variant="secondary" onClick={handleDelete}>
            Delete Product
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewProducModal;
