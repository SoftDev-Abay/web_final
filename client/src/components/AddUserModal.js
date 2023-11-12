import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const AddProductModal = ({ show, setShow }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    admin: false,
  });

  const { email, password, admin } = formData;

  const handleClose = () => setShow(false);

  const handleAdd = async (event) => {
    event.preventDefault();
    const newFormData = {
      user_email: email,
      user_password: password,
      admin: admin,
    };

    const result = await axios.post("http://localhost:5000/users", newFormData);

    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="password"
                value={password}
                onChange={handleChange}
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Role</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="admin"
                value={admin}
                onChange={handleChange}
              >
                <option value={false}>User</option>
                <option value={true}>Admin</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProductModal;
