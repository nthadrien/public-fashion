import { For } from 'solid-js';
import { A } from '@solidjs/router';
import css from './footer.module.css';
import IconWa from '~icons/ri/whatsapp-fill';
import IconFb from '~icons/ri/facebook-box-fill';
import IconX from '~icons/ri/twitter-x-fill';
import IconTk from '~icons/ri/tiktok-fill';

const L = {
    "notre boutique": [
        { name: 'F.A.Q', to: '/a-propos-de-nous#faq' },
        { name: 'politiques de ventes', to: '/termes-et-conditions' },
        { name: 'contacts & addresse', to: '/a-propos-de-nous' },
        { name: 'Qui nous sommes', to: '/a-propos-de-nous' }
    ],
    "collections": [
        { name: 'collection hommes', to: '/produits/hommes' },
        { name: 'collection femmes', to: '/produits/femmes' },
        { name: 'collection enfants', to: '/produits/enfants' }
    ],
    "Usilisateur": [
        { name: "S'enregistrer", to: '/authorization/utilisateurs/nouveau-compte' },
        { name: 'mon compte', to: '/authorization/utilisateurs/mon-compte' },
        { name: 'mes commandes', to: '/mon-panier' },
    ]
};

const Footer = () => {
    const names = Object.keys(L);

    const section = (head, list) => (
        <section className={css.section}>
            <h3>{head}</h3>
            <div>
                {list.map(lien => <A href={lien.to}>{lien.name}</A>)}
            </div>
        </section>
    );

    return (
        <>
            <footer className={css.foot}>
                <section className={css.brand}>
                    <h2>
                        <i>Fashion-Shop</i>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nemo.
                    </p>

                    <div className={css.plain}>
                        <a href=""> <IconFb /> </a>
                        <a href=""> <IconWa /> </a>
                        <a href=""> <IconX /> </a>
                        <a href="">  <IconTk /> </a>
                    </div>
                </section>
                <For each={names} fallback={'loading...'} >
                    {item => section(item, L[item])}
                </For>
            </footer>
            <p class={css.texto}>
                <small>Copyright &copy; 2023 Designed & coded by nthadrien </small>
            </p>
        </>
    );
};

export default Footer;