import React from "react";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { BsGoogle, BsFacebook, BsInstagram } from "react-icons/bs";
import "./Login.css";

const Login = () => {
  return (
    <div className="custom-bgc form d-flex justify-content-center align-items-center">
      <Card className="form-card shadow-sm rounded-1">
        <Card.Body >
          <Card.Title className="text-center fs-3 custom-font fw-semibold">
            Login
          </Card.Title>

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="custom-font fw-semibold mb-0">
                Email
              </Form.Label>
              <Form.Control
                className="border-0 ps-0 rounded-0 border-bottom border-b-2 input"
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="custom-font fw-semibold mb-0">
                Password
              </Form.Label>
              <Form.Control
                className="border-0 ps-0 rounded-0 border-bottom border-b-2"
                type="password"
                placeholder="Enter your password"
              />
            </Form.Group>
            <Button className="submit-btn border-0 btn rounded-1 fw-semibold mt-3">
              Login
            </Button>{" "}

            <p className="text-center fw-semibold my-3">Don't have an account? <Link to="/signup" className="text-decoration-none custom-color">Signup</Link></p>
            <h5 className="text-center">Or</h5>
            <div className="d-flex justify-content-center my-4">
              <BsGoogle className="mx-2 fs-5"></BsGoogle>
              <BsFacebook className="mx-3 fs-5"></BsFacebook>
              <BsInstagram className="mx-2 fs-5"> </BsInstagram>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
