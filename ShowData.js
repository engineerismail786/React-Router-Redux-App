import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";

const ShowData = ({ data }) => {
  const renderlist = () => {
    return data.map(el => {
      return (
        <Card key={el.id}>
          <CardBody>
            <CardTitle>
              Name : {el.data.firstName} {el.data.lastName}
            </CardTitle>
            <CardSubtitle>Address : {el.data.adress}</CardSubtitle>
            <CardSubtitle>Company : {el.data.company}</CardSubtitle>
            <CardSubtitle>DOB : {el.data.dob}</CardSubtitle>
            <CardSubtitle>Number# : {el.data.phoneNo}</CardSubtitle>
          </CardBody>
        </Card>
      );
    });
  };
  return (
    <Container>
      {renderlist()}
      <br />
      <br />
      <Col md={{ size: 6, offset: 5 }}>
        <Link to="/new">CreateData</Link>
      </Col>
    </Container>
  );
};
const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(ShowData);
