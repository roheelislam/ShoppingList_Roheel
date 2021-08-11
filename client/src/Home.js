import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                height="200"
                src="https://www.leadquizzes.com/wp-content/uploads/2019/10/New-blog-graphic-20.jpg"
              />
              <Card.Body>
                <Card.Title>Topics</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  onClick={(tag) => (window.location = `/List/`)}
                  variant="primary"
                >
                  Topics
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                height="200"
                src="https://www.lifewire.com/thmb/Pe76PhgTHc0Zj7Mreagy4815hf4=/1732x1276/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1047578412-692fa117cf86450287d8873eeb1a95c8-aa8d654cec814174a9e07bdae85a1eb7.jpg"
              />
              <Card.Body>
                <Card.Title>Search</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  onClick={(tag) => (window.location = `/List/`)}
                  variant="primary"
                >
                  Search
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                height="200"
                src="https://assets.justinmind.com/wp-content/uploads/2019/03/ux-workflow.png"
              />
              <Card.Body>
                <Card.Title>Create</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  onClick={(tag) => (window.location = `/create/`)}
                  variant="primary"
                >
                  Create
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

//   "https://mk0fabrikbrandsfni4m.kinstacdn.com/wp-content/uploads/Knowledge-Base-1.jpg"
