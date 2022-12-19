import star from "../../images/star.svg";
import starFilled from "../../images/star-filled.svg";

export default function Entry({
  date,
  motto,
  notes,
  isliked,
  onToggleFavorite,
  id,
}) {
  return (
    <article className="entryList__article">
      <p className="entryList__article__date">{date}</p>
      <h2>{motto}</h2>
      <p>{notes}</p>
      <button
        className="entry--star"
        type="button"
        onClick={() => onToggleFavorite(id)}
      >
        <Star src={isliked ? starFilled : star} alt="Star Icon" />
      </button>
    </article>
  );
}

function Star({ src, alt }) {
  return <img src={src} alt={alt} />;
}
