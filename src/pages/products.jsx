
import SearchProductForm from "../components/forms/SearchProductForm";
import { ProductsHeader } from "../components/headers/headers";
import MarketProductsTable from "../components/tables/MarketProductsTable";
import css from "./products.module.css";

function Products() {

  const handleSubmit = (obj) => {
    console.log(obj);
  };

  return (
    <>
    <ProductsHeader />
    <main class={css.main}>
      <SearchProductForm submit={handleSubmit} />
      <MarketProductsTable />
    </main>
    </>
  )
}

export default Products;