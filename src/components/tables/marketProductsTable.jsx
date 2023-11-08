import { HomeCard } from "../cards/cards";
import Pagination from "./pagination";
import css from './marketProdustsTable.module.css';

import IcoGrid from '~icons/bxs/grid-alt';
import IcoFlat from '~icons/ci/hamburger-md';
import { createSignal } from "solid-js";


export default function MarketProductsTable(props) {


  const [cardStyle, setCardStyle] = createSignal(true);

  const Search = () => (
    <section class={css.searchZone}>
      <input type="search" name="name" placeholder="Plus de precision svp" />
      <div class={css.btnWrapper}>
        <button onClick={() => setCardStyle(true)}>
          <IcoGrid />
        </button>
        <button onClick={() => setCardStyle(false)}>
          <IcoFlat />
        </button>
      </div>
    </section>
  );

  return (
    <section>
      <Search />
      <div class={`${css.marketTable} ${cardStyle() ? css.grid : css.flat}`}>
        <HomeCard style={cardStyle()} />
        <HomeCard style={cardStyle()} />
        <HomeCard style={cardStyle()} />
        <HomeCard style={cardStyle()} />
        <HomeCard style={cardStyle()} />
        <HomeCard style={cardStyle()} />
      </div>


      <Pagination />
    </section>
  )
}