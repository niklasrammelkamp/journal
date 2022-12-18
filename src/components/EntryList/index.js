import star from "../../images/star.svg";
import starFilled from "../../images/star-filled.svg";
import { useState } from "react";

export default function EntryList() {
  const [liked, setLiked] = useState(false);
  return (
    <section className="entryList">
      <article className="entryList__article">
        <p className="entryList__article__date">Datum</p>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          type="button"
          onClick={() => {
            setLiked(!liked);
          }}
        >
          <Star src={liked ? starFilled : star} alt="Star Icon" />
        </button>
      </article>
    </section>
  );
}

function Star({ src, alt }) {
  return <img src={src} alt={alt} />;
}
