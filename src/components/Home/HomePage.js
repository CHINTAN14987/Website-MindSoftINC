import React from "react";
import Col from "react-bootstrap/col";
import { BsArrowRight } from "react-icons/bs";
import Row from "react-bootstrap/row";
import Container from "react-bootstrap/container";
import cardImage from "../../Images/cardImage.png";
import CardImage2 from "../../Images/CardImage2.png";
import cardImage3 from "../../Images/cardImage3.png";
const HomePage = () => {
  return (
    <div className="container-fluid">
      <Container className="cardContainer">
        <Row className="cardsRow">
          <Col className="cards card1 m-3">
            <div className="singleCard">
              <div className="cardImage">
                <img src={cardImage} alt="card" />
                <span className="cardNumber">01</span>
              </div>
              <div className="cardHeading">
                <h3>Web Development</h3>
              </div>
              <div className="cardContent">
                <p>
                  More than 20% of the ecommerce transactions happen over Moible
                  / Tablets last year. Responsive websites use a fluid layout
                  that adapts your user devices
                </p>
              </div>
              <div className="btn-container">
                {/* <div className="btn">
                  <button className="cardButton">
                    <BsArrowRight className="cardIcon" />
                  </button>
                </div> */}
              </div>
            </div>
          </Col>
          <Col className="cards card2 m-3">
            <div className="singleCard">
              <div className="cardImage">
                <img src={CardImage2} alt="card" />
                <span className="cardNumber">02</span>
              </div>
              <div className="cardHeading">
                <h3>Website Hosting</h3>
              </div>
              <div className="cardContent">
                <p>
                  Web hosting for any business. Clustered and load-balanced web
                  hosting. Easy-to-use cPanel web hosting for lightning speed,
                  performance and reliability.
                </p>
              </div>
              <div className="btn-container">
                {/* <div className="btn">
                  <button className="cardButton">
                    <BsArrowRight className="cardIcon" />
                  </button>
                </div> */}
              </div>
            </div>
          </Col>
          <Col className="cards card3 m-3">
            <div className="singleCard">
              <div className="cardImage">
                <img src={cardImage3} alt="card" />
                <span className="cardNumber">03</span>
              </div>
              <div className="cardHeading">
                <h3>Mobile App Development</h3>
              </div>
              <div className="cardContent">
                <p>
                  Quickly build and deploy mobile apps that keep your workforce
                  and customers connected and engaged Â with the different
                  Mobile Platform such as Android , Windows , Black berry and
                  IOS
                </p>
              </div>
              <div className="btn-container">
                {/* <div className="btn">
                  <button className="cardButton">
                    <BsArrowRight className="cardIcon" />
                  </button>
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
        {/* <Row className="cardSummary">
          <Col className="d-flex flex-column justify-content-between">
            <div className="blockQuote">
              Excellent work!!! It was more than my expectation.
            </div>
            <cite>-Richard Branson</cite>
          </Col>
          <Col>
            <p className="QuoteParagraph">
              Fixed the bugs and errors fast, did some extra coding and after
              mail exchange added two new features to the page. Super
              co-operation for the budget and fixed within few hours.
            </p>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default HomePage;
