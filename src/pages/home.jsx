
import { A } from "@solidjs/router";
import { HomeCard } from "../components/cards/cards";
import { HomeHeader } from "../components/headers/headers";
import css from './home.module.css';


const Expo = () => {
  return (
    <section class={css.expo}>
        <A href="/" class={css.a}> 
          collections africaines
        </A>
        <A href="/" class={css.b}> Promotions </A>
        <A href="/" class={css.c}> Ensembles Tailleur </A>
        <A href="/" class={css.d}> Pagnes de Mariages</A>
        <A href="/" class={css.e}> Costumes  </A>
        <A href="/" class={css.f}> Jeans </A>
    </section>
  );
};

function Home() {
  return (
    <>
    <HomeHeader />
    <main>
      <Expo />

      <h2>Bienvenu(e) Nos Articles Sont de 1er Qualite</h2>


      <h2 class='sph'>Les Plus Acheter.</h2>

      <section class={css.homeList}>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </section>


      <section>

        <h2 class='deco'>
          Decouvrez des prix sans egales
        </h2>

      </section>

    </main>

  </>

  )
}

export default Home;