import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Register.scss";
function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e:any) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      handleValidation(e);
    }
    else {
      console.log({
        password,
        email,
        userName
      });
    }
    setValidated(true);
  };

  const handleValidation = (event: React.FormEvent<HTMLFormElement>) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setEmailError("Email Not Valid");
      return false;
    } else {
      setEmailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setPasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setPasswordError("");
      formIsValid = true;
    }
    return formIsValid;
  };

  return (
    <Container fluid className='register'>
      <Form noValidate className="col-6" validated={validated} onSubmit={handleSubmit} >
        <Form.Text className="text-center">
          <h3 className='mb-3' > Sign up</h3> </Form.Text>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Control className='registerInput' type="text" placeholder="Enter username"
            required
            minLength={5}
            maxLength={20} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control className='registerInput' type="email" placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            required
            minLength={5}
            maxLength={20} />
          <Form.Control.Feedback type="invalid" className="error">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control className='registerInput' type="password" placeholder="Password"
            onChange={(event) => setPassword(event.target.value)} />
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control className='registerInput' type="password" placeholder="Confirm Password"
            onChange={(event) => setPasswordConfirm(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 d-md-flex gap-2" controlId="formCheckbox">
          <Form.Check type="checkbox" label="I agree all statements in"
          required></Form.Check>
          <Form.Control.Feedback type="invalid">
            required
          </Form.Control.Feedback>
          <Form.Label ><Link to="/signIn">Terms of service</Link></Form.Label>
        </Form.Group>

        <Form.Group className="d-flex justify-content-center">
          <Button className="registerButton" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container >
  );
}

export default Register;