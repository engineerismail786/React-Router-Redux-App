import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addData } from "./dataaction";
import { Form, Input, Container, Col } from "reactstrap";
const CreateData = ({ addData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    adress: "",
    company: "",
    phoneNo: "",
    dob: ""
  });
  const { firstName, lastName, adress, company, phoneNo, dob } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addData(formData);
  };

  return (
    <Container>
      <br />
      <br />
      <Form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <Input
            type="text"
            placeholder="Address"
            name="adress"
            value={adress}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <Input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <Input
            type="number"
            placeholder="Phone Number"
            name="phoneNo"
            value={phoneNo}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <Input
            type="date"
            name="dob"
            value={dob}
            onChange={e => onChange(e)}
          />
        </div>
        <Col md={{ size: 6, offset: 5 }}>
          <input type="submit" className="btn btn-primary my-1" />
        </Col>
      </Form>
      <br />
      <br />
      <Col md={{ size: 6, offset: 5 }}>
        <Link to="/">ShowData</Link>
      </Col>
    </Container>
  );
};
export default connect(
  null,
  { addData }
)(CreateData);
