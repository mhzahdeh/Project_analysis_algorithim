import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { fetchReviews } from '../api/apiClient';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <div>
      <h1 className="mb-4">⭐ Reviews</h1>
      {reviews.length === 0 ? (
        <p>Loading...</p>
      ) : (
        reviews.map((review) => (
          <Card className="mb-3" key={review.id}>
            <Card.Body>
              <Card.Title>{review.customer}</Card.Title>
              <Card.Text>{review.comment}</Card.Text>
              <Card.Footer>Rating: {review.rating} ⭐</Card.Footer>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Reviews;
