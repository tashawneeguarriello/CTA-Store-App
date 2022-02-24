import HomeNav from "./HomeNav";

function NewSellerForm() {
  return (
    <form>
      <HomeNav />
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
      <input type="submit" />
      alert("Your file is being uploaded!")
    </form>
  );
}
//ReactDOM.render(<NewSellerForm />, document.getElementById("root"));
export default NewSellerForm;
