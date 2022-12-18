export default function TabBar() {
  return (
    <section className="tabBar">
      <button className="tabBar--tab tab-focused">
        <p>
          All Entries<span>3</span>
        </p>
      </button>
      <button className="tabBar--tab">
        <p>
          Favorites<span>3</span>
        </p>
      </button>
    </section>
  );
}
