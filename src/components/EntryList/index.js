import Entry from "../Entry";
import { Fragment } from "react";

export default function EntryList({ entries, onToggleFavorite }) {
  return (
    <section className="entryList">
      {entries.map(({ date, motto, notes, id, isliked }) => {
        return (
          <Fragment key={id}>
            <Entry
              date={date}
              motto={motto}
              notes={notes}
              isliked={isliked}
              id={id}
              onToggleFavorite={onToggleFavorite}
            />
          </Fragment>
        );
      })}
    </section>
  );
}
