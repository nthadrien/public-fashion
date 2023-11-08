import { A } from '@solidjs/router';
import { Show } from 'solid-js';

import css from './card.module.css';
import IconCart from '~icons/ri/shopping-bag-line';
import imes1 from '../../assets/imgs/jaune.jpg';
import { Rating } from '../ratings/ratings';

const HomeCard = (props) => {

    const addToCart = () => {
        alert('Ajouter au panier?')
    };

    return (
        <div href='/' class={props.style ? css.cardWrapper : css.cardWrapper2}>
            <Show when={true} fallback={''}>
                <aside class={css.promo}>
                    en promo
                </aside>
            </Show>
            <small>Addidas</small>
            <img src={imes1} class={props.style ? css.img : css.img2} alt="oops" />
            <p>
                Homme <Rating number={4} />
            </p>
            <p>Model: Decolter Haute gamme </p>
            <p>Style: Africains</p>
            <p>
                <Show when={true} fallback={<span class={css.prices}>
                    30 000
                </span>} >
                    <span class={css.prices}>
                        40,9990
                    </span>
                    <span class={css.realprice}>
                        50,000
                    </span>
                </Show>
                fCFA
            </p>

            <Show when={!props.style}>
                <p>
                Adipisicing elit. Quia eos veniam nemo, illum maxime ad tenetur perspiciatis quasi ducimus esse asperiores, a explicabo dolore blanditiis consequuntur officiis, earum eveniet saepe.
                </p>
            </Show>

            {props.style}

            <div class={css.btnSection}>
                <button onClick={addToCart} class={css.cbtn}>
                    <IconCart />
                </button>
                <A href='/produit/kiodskokdoksdskodkokdsakokasd'>
                    voir plus
                </A>
            </div>
        </div>
    );
};




export { HomeCard }