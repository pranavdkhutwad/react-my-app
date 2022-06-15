import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Dashboard = ({ userInfo }) => {
  const [features, setFeatures] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const user = userInfo ?? JSON.parse(localStorage.getItem("userInfo"));

    setFeatures(user.options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardClickHandler = (cardName) => {
    navigate(`/${cardName}`);
  };
  return (
    <div className="container">
      <Row>
        {features.map((feature, index) => {
          return (
            <Col key={index} xs={12} md={4} lg={4} sm={6}>
              <Card
                onClick={() => cardClickHandler(feature.id)}
                className="mt-3"
              >
                <Card.Body>{feature.title}</Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.login.userInfo,
  };
};

export default connect(mapStateToProps)(Dashboard);
