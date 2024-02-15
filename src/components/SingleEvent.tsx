import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Result from "../interfaces/article";
import { useNavigate } from "react-router-dom";

interface ResulData {
  articleData: Result;
}

const SingleEvent = ({ articleData }: ResulData) => {
  const navigate = useNavigate();

  return (
    <Col>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={articleData.image_url}
          className="w-100"
          height={"175px"}
          onClick={() => {
            navigate("/details/" + articleData.id);
          }}
        />
        <Card.Body className="d-flex align-items-center">
          <Card.Title>{articleData.title}</Card.Title>
          {/* <Card.Text>
            Link: <a href={articleData.url}>Click Here</a>
          </Card.Text>
          <Card.Text>{articleData.summary}</Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleEvent;
