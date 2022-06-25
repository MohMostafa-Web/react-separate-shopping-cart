import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, clickable }) => {
  return (
    <div className={clickable ? "clickable" : "disabled"}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ fontSize: 15 }} onClick={() => onClick(i)} >
          {rating > i ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </div>
  );
};

export default Rating;
