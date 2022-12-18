import Entry from "../Entry";
import { entries } from "../../db";
import { Fragment } from "react";

console.log(entries);

export default function EntryList() {
  return (
    <section className="entryList">
      {entries.map(({ date, motto, notes, id, isliked }) => {
        console.log(id);
        return (
          <Fragment key={id}>
            <Entry date={date} motto={motto} notes={notes} isliked={isliked} />
          </Fragment>
        );
      })}
    </section>
  );
}
