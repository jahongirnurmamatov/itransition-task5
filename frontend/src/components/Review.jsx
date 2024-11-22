import React from "react";

const Review = ({ review, index }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="rating rating-sm">
        {[...Array(5)].map((_, i) => (
          <input
            key={i}
            type="radio"
            name={`rating-${index}`}
            className="mask mask-star"
            disabled
            checked={i < review.rating}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Review;
