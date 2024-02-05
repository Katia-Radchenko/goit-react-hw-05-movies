import s from './ReviewsList.module.css'


const ReviewsList = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews.map(review => (
          <li key={review.id} className={s.item}>
            <h3>Author: {review.author}</h3>
            <p>
              <span>Review: </span>
              {review.content}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsList
