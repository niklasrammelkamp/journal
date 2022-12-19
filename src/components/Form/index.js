export default function Form({ onAddEntry, onShowPopUp }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(onAddEntry);
    onAddEntry(data);
    onShowPopUp();
    event.target.reset();
    event.target.elements.motto.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="form__input" className="form--label">
        Motto
      </label>
      <input
        type="text"
        id="form__input"
        className="form--input"
        name="motto"
      />
      <label htmlFor="form__textarea" className="form--label">
        Notes
      </label>
      <textarea
        id="form__textarea"
        className="form--input textarea"
        name="notes"
      ></textarea>
      <button type="submit" className="button submit">
        Add new Entry
      </button>
    </form>
  );
}
