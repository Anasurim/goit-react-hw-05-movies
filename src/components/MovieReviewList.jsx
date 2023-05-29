const MovieReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <p>User: {author}</p>
            <p>Review: {content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieReviewList;
