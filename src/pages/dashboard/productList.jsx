import { Suspense } from "solid-js";
import ListTable from "../../components/tables/listTable";

import { fetchProductsData } from '../../api/usersApi';
import { Search } from "../../components/inputs/customInputs";
import LoadingSpinner from "../../components/loadingSpinner";
import css from './productList.module.css';


export default function productList() {
  const { products } = fetchProductsData();


  console.log(products)

  return (
      <div class={css.page}>
        <h2>List des produits</h2>

        <div class={css.inpts}>
          <Search />

          <button class='btn'>
            + Ajouter
          </button>
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <ListTable list={products()} />
        </Suspense>
      </div>
  )
}
