import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import SingleEvent from "./SingleEvent";
import Result from "../interfaces/article";
// import Launch from "../interfaces/article";

// INTERFACES

// interface Events {
//   count: number;
//   next: string;
//   previous: null;
//   results: Result[];
// }

// COMPONENT

const HomePage = () => {
  const [articles, setArticles] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getArticles = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.results);
        setArticles(data.results);
        setIsLoading(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Container className="my-3">
      <Row className="justify-content-center">
        <Col sm={10} md={8} lg={6}>
          <h2 className="text-center">
            The best place to know about space flights{" "}
            <i className="bi bi-rocket-takeoff-fill"></i>
          </h2>
        </Col>
      </Row>
      <Row sm={2} md={4} lg={6} className="g-2 my-3 justify-content-center">
        {isLoading && (
          <div className="d-flex w-100 justify-content-center">
            <Spinner animation="border" variant="primary"></Spinner>
          </div>
        )}
        {!isLoading &&
          articles.map((article) => {
            return <SingleEvent articleData={article} key={article.id} />;
          })}
      </Row>
    </Container>
  );
};

export default HomePage;
