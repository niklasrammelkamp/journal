export default function TabBar({
  entriesCount,
  favoriteEntriesCount,
  onFilterChangeToAll,
  onFilterChangeToFavorites,
  filter,
}) {
  return (
    <section className="tabBar">
      <button
        onClick={onFilterChangeToAll}
        className={filter === "all" ? "tabBar--tab tab-focused" : "tabBar--tab"}
      >
        <p>
          All Entries<span>{entriesCount}</span>
        </p>
      </button>
      <button
        onClick={onFilterChangeToFavorites}
        className={
          filter === "favorites" ? "tabBar--tab tab-focused" : "tabBar--tab"
        }
      >
        <p>
          Favorites<span>{favoriteEntriesCount}</span>
        </p>
      </button>
    </section>
  );
}
