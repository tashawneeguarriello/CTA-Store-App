import HomeNav from "./HomeNav";

function NewSellerForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Thank You! A team member will get back to you shortly. -ShopOCommerce"
    );
  };

  return (
    <>
      <HomeNav />
      <form onSubmit={handleSubmit}>
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
      </form>
    </>
  );
}
//ReactDOM.render(<NewSellerForm />, document.getElementById("root"));
export default NewSellerForm;
