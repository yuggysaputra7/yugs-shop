import { FaStar, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} color="gold" />);
  }
  if (hasHalfStar) {
    stars.push(<FaStar key="half" color="gold" />);
  }
  const remainingStars = 5 - (fullStars + (hasHalfStar ? 1 : 0));
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} color="gold" />);
  }

  return <div className="flex flex-row justify-center">{stars}</div>;
};

export default StarRating;
