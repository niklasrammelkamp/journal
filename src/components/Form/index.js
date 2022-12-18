export default function Form() {
  return (
    <form className="form">
      <label htmlFor="form__input" className="form--label">
        Motto
      </label>
      <input type="text" id="form__input" className="form--input" />
      <label htmlFor="form__textarea" className="form--label">
        Notes
      </label>
      <textarea id="form__textarea" className="form--input textarea"></textarea>
      <button type="submit" className="button submit">
        Add new Entry
      </button>
    </form>
  );
}
