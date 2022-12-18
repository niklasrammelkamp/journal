export default function Form() {
  return (
    <section>
      <form>
        <label htmlFor="form__input">Motto</label>
        <input type="text" id="form__input" />
        <label htmlFor="form__textarea">Notes</label>
        <textarea id="form__textarea"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
