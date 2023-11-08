import { For, createEffect, createMemo, createSignal, onCleanup } from 'solid-js';
import css from './headers.module.css';
import LoadingSpinner from '../loadingSpinner';


const homeSlides = [
    {
        notice: "Nos Vous Invition a voir notre collection",
        content: "N'hesitez pas a faire un tour",
        name: "Voir plus",
        link: "/produits/categories"
    },
    {
        notice: "Bienvenu(e) !!!",
        content: "Jettez un coup d'oeil a notre collection africaines",
        name: "Voir plus",
        link: "/produits/tout-occidentale"
    },
    {
        notice: "Customes hommes et femmes",
        content: "Nous Avons toutes une gammes d'habit pour tout ages",
        name: "shopping",
        link: "/produits/tout-africans"
    },
    {
        notice: "Le Prix ne vaut rien quand il y a de la qualite",
        content: "Nous saurons satisfaire vos gouts",
        name: "shopping",
        link: "/produits/tout-africans-adultes"
    }
]

const HomeHeader = () => {

    const [count, setCount] = createSignal(0);
    let slider;

    createEffect(() => {
        let to = slider.getBoundingClientRect().width
        slider.scrollTo({ left: to * count(), behavior: "smooth" });
    });
    const timer = setInterval(() => setCount((count() + 1) % 4), 4300);
    onCleanup(() => clearInterval(timer));

    return (
        <header class={css.header}>
            <section ref={slider} class={css.slidesWrapper}>
                <For each={homeSlides} fallback={LoadingSpinner} >
                    {(item) => (
                        <div class={css.slide}>
                            <h1>{item.notice}</h1>
                            <h3>{item.content}</h3>
                            <a href={item.link} class={css.btn}>
                                {item.name}
                            </a>
                        </div>
                    )}
                </For>
            </section>

            <ul class={css.slideIndicator}>
                <li class={count() === 0 ? css.in : ''}></li>
                <li class={count() === 1 ? css.in : ''}></li>
                <li class={count() === 2 ? css.in : ''}></li>
                <li class={count() === 4 ? css.in : ''}></li>
            </ul>
        </header>
    );
};

const AboutHeader = () => {
    return (
        <header class={css.header}>
            <h1 style={'color:whitesmoke; margin: 2rem auto;'} class="sph">À propos de nous</h1>
            <p><i>“L’habit donne de l’autorité à l’homme, l’argent donne de l’audace.”</i></p>
            <small><i>De Wladimir Wolf-Gozin</i></small>
        </header>
    );
};

const ProductsHeader = () => {
    return (
        <header class={css.header}>
            <h1 style={'color:whitesmoke; margin: 2rem auto;'} class="sph">Meilleur site e-commerce</h1>
            <p><i>“La simplicité est l'habit de la perfection.”</i></p>
            <small><i>Proverbe Chinois</i></small>
        </header>
    )
}



export { HomeHeader, AboutHeader , ProductsHeader};