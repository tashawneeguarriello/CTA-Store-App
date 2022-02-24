function NewSellerForm() {
  return (
    <form>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Business/Brand Name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="text" />
      </label>
      <label>
        Intended Products:
        <input type="text" />
      </label>
      <label>
        Comments:
        <input type="text" />
      </label>
    </form>
  );
}
ReactDOM.render(<NewSellerForm />, document.getElementById("root"));
