import star from "../../images/star.svg";
import starFilled from "../../images/star-filled.svg";
import { useState } from "react";

export default function Entry({ date, motto, notes, isliked }) {
  const [liked, setLiked] = useState(isliked);
  return (
    <article className="entryList__article">
      <p className="entryList__article__date">{date}</p>
      <h2>{motto}</h2>
      <p>{notes}</p>
      <button
        className="entry--star"
        type="button"
        onClick={() => {
          setLiked(!liked);
        }}
      >
        <Star src={liked ? starFilled : star} alt="Star Icon" />
      </button>
    </article>
  );
}

function Star({ src, alt }) {
  return <img src={src} alt={alt} />;
}
