import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TabBar from "./components/TabBar";
import EntryList from "./components/EntryList";
import Footer from "./components/Footer";
import PopUpSuccses from "./components/PopUpSuccses";
import { initialEntries } from "./db";
import { nanoid } from "nanoid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });
  const [filter, setFilter] = useState("all");
  const [showPopUp, setShowPopUp] = useState(false);

  function handleShowPopUp() {
    setShowPopUp(true);
    setTimeout(handleHidePopUp, 1900);
  }
  function handleHidePopUp() {
    setShowPopUp(false);
  }

  // handle the filter
  function handleFilterChangeToAll() {
    setFilter("all");
  }
  function handleFilterChangeToFavorites() {
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
      {showPopUp && <PopUpSuccses />}

      <Header />
      <main>
        <Form onAddEntry={handleAddEntry} onShowPopUp={handleShowPopUp} />
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
