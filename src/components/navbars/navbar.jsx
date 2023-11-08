import { For, Show, createSignal } from 'solid-js';
import { A, useNavigate } from '@solidjs/router';
import css from './navbar.module.css';
import { NavLinkAccordion } from '../accordion/accordions';
import all from './nav.json';

import IconLog from '~icons/ri/account-pin-circle-fill';
import IconLogout from '~icons/ri/logout-box-line';
import IconLogin from '~icons/ri/account-pin-circle-fill';

import IconCart from '~icons/ri/shopping-bag-line';
import { useAuthorized } from '../../contexts/auth'

const NavLogin = () => {
    const [open, setOpen] = createSignal(false);
    const { logout } = useAuthorized();
    const navigate = useNavigate();

    const logOut = () => logout();
    const logIn = () => navigate('/authorization/utilisateurs/mon-compte', { replace: false });

    return (
        <div class={css.navAcc} onMouseLeave={() => setOpen(false)}>

            <button onClick={() => setOpen(!open())}>
                <IconLog class={css.ico} />
            </button>

            <Show when={open()} fallback='' >
                <div class={css.accOpts}>
                    <button onClick={logIn}> <IconLogin />Mon Compte</button>
                    <button onClick={logOut}><IconLogout />Deconnexion</button>
                </div>
            </Show>
        </div>
    );
};

const Cart = () => {
    const [open, setOpen] = createSignal(false);
    const navigate = useNavigate();
    const cartPage = () => navigate('/mon-panier');

    return (
        <div class={css.navAcc} onMouseLeave={() => setOpen(false)}>

            <button onClick={() => setOpen(!open())}>
                <IconCart class={css.ico} />
                <span class={css.itemsCount}>2</span>
            </button>

            <Show when={open()} fallback='' >
                <ul class={css.accOpts}>
                    <li> double rich 6000  </li>
                    <li> </li>
                    <button onClick={cartPage}>
                        Panier
                    </button>
                </ul>
            </Show>
        </div>
    )
};




const Search = () => {
    return (
        <label class={css.search}>
            <IconCart />
            <input type="search" placeholder='Cherchez un Produit?' />
        </label>
    )
}

const Navbar = () => {
    const [showNav, setShowNav] = createSignal(false);
    const names = Object.keys(all);

    const toggle = () => setShowNav(!showNav());

    const Hamburger = () => (
        <button onClick={toggle} class={`${css.hamburger} ${showNav() ? css.ontop : ''}`}>
            <div class={css.line}></div>
            <div class={css.line}></div>
            <div class={css.line}></div>
        </button>
    );

    const Logo = () => (
        <div class={css.logo}>
            <i>Fashion-Shop</i>
        </div>
    );

    const Accords = () => (
        <div class={`${css.accordion} ${showNav() ? '' : css.hide}`}>
            <For each={names} >
                {(item) => <button onClick={toggle} >{item} </button>}
            </For>
            <A href='/a-propos-de-nous'> A propos de nous</A>
            <A href='/'>Contacts</A>
        </div>
    );

    return (
        <nav onMouseLeave={() => setShowNav(false)} class={css.nav}>
            <Logo />
            <Hamburger />

            <Accords />
            <div class={css.user}>
                <NavLogin />
                <Cart />
            </div>

            <Show when={showNav()} fallback=''>
                <div class={css.navList}>

                    <img src={import('../../assets/imgs/jaune.jpg')} alt="img" />

                    <div>
                        <A href='/produits/hommes-occidentale'>sub link1</A>
                        <A href='/produits/hommes-occidentale'>sub link1</A>
                        <A href='/produits/hommes-occidentale'>sub link1</A>
                        <A href='/produits/hommes-occidentale'>sub link1</A>
                        <A href='/produits/hommes-occidentale'>sub link1</A>
                        <A href='/produits/hommes-occidentale'>sub link1</A>
                    </div>

                    <div>
                        <A href='/produits/hommes-occidentale'>sub link1</A>
                        <A href='/produits/hommes-occidentale'>sub link1</A>
                        <A href='/produits/hommes-occidentale'>sub link1</A>
                        <A href='/produits/hommes-occidentale'>sub link1</A>
                        <A href='/produits/hommes-occidentale'>sub link1</A>
                        <A href='/produits/hommes-occidentale'>sub link1</A>
                    </div>
                </div>
            </Show>
        </nav>
    );
};

export default Navbar;