import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Result from "../interfaces/article";

const ArticleDetail = () => {
  const params = useParams().articleId;
  console.log(params);

  const [singleArticle, setSingleArticle] = useState<Result | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getSingleArticle = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/" + params
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSingleArticle(data);
        setIsLoading(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row className="justify-content-center my-4">
        <Col sm={10} md={8} lg={6}>
          {isLoading && (
            <div className="d-flex w-100 justify-content-center">
              <Spinner animation="border" variant="primary"></Spinner>
            </div>
          )}
          {!isLoading && (
            <Card className="shadow-lg border-secondary">
              <Card.Img variant="top" src={singleArticle?.image_url} />
              <Card.Body>
                <Card.Title>{singleArticle?.title}</Card.Title>
                <Card.Text>
                  Link to full Article: <a href={singleArticle?.url}>here</a>
                </Card.Text>
                <Card.Text>News Site: {singleArticle?.news_site}</Card.Text>
                <Card.Text>
                  Publish date:{" "}
                  {singleArticle?.published_at.toLocaleString().slice(0, 10)}
                </Card.Text>
                <Card.Text>Summary: {singleArticle?.summary}</Card.Text>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetail;
