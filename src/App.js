import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TabBar from "./components/TabBar";
import EntryList from "./components/EntryList";
import Footer from "./components/Footer";
import { initialEntries } from "./db";
import { nanoid } from "nanoid";
import { lightning } from "./images/lightning.svg";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [filter, setFilter] = useState("all");

  console.log(filter);

  // handle the filter
  function handleFilterChangeToAll() {
    console.log("set to all");
    setFilter("all");
  }
  function handleFilterChangeToFavorites() {
    console.log("set to favorites");
    setFilter("favorites");
  }

  // create entrieArray with only favorites
  const favoriteEntries = entries.filter((entry) => entry.isliked);

  // Add an entry to the entriesArray
  function handleAddEntry(entry) {
    const date = new Date().toLocaleDateString("de-DE", {
      dateStyle: "medium",
    });
    setEntries([
      {
        id: nanoid(),
        date: date,
        isliked: false,
        ...entry,
      },
      ...entries,
    ]);
  }

  // toggle the star icon
  function handleToggleFavorite(id) {
    console.log(id);
    setEntries(
      entries.map((entry) => {
        return entry.id === id ? { ...entry, isliked: !entry.isliked } : entry;
      })
    );
  }

  // the main App
  return (
    <>
      <Header />
      <main>
        <Form onAddEntry={handleAddEntry} />
        <TabBar
          entriesCount={entries.length}
          favoriteEntriesCount={favoriteEntries.length}
          onFilterChangeToAll={handleFilterChangeToAll}
          onFilterChangeToFavorites={handleFilterChangeToFavorites}
          filter={filter}
        />
        <EntryList
          entries={filter === "favorites" ? favoriteEntries : entries}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;

function PopUpSuccses() {
  return (
    <div>
      <img src={lightning} alt={"lightning illustration"} />
      <h2> Adding succsesfully</h2>
    </div>
  );
}
