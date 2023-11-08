import { Outlet, A, useNavigate } from "@solidjs/router";
import { useAuthorized } from "../../contexts/auth";

import LoadingSpinner from "../loadingSpinner";
import Navbar from "../navbars/navbar";
import AdminFooter from "../footers/adminFooter";
import Footer from "../footers/footer";
import css from './layouts.module.css';


import IconStat from '~icons/mdi/report-arc';
import IconOrder from '~icons/icon-park-outline/transaction-order';
import IconUsers from '~icons/fluent-emoji-high-contrast/people-hugging';
import IconsProd from '~icons/fluent-mdl2/product-variant';
import IconMsgs from '~icons/icon-park-solid/message-emoji'
import { Suspense, onMount } from "solid-js";

export function MarketLayout() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<LoadingSpinner />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};

export function AuthLayout() {

    const { userInfo } = useAuthorized();
    const navigate = useNavigate()

    onMount(()=>{
        if ( !userInfo ) {
            navigate('/forbidden')
        }
    })

    return (
        <>
            <DashNavbar />
            <main>
            <Suspense fallback={<LoadingSpinner />}>
                <Outlet />
            </Suspense>
            </main>
            <AdminFooter />
        </>
    );
};

const DashNavbar = () => {

    const { userInfo } = useAuthorized();

    return (
        <nav class={css.navSide}>
            <p>
                <i>Fashion-shop</i>
            </p>

            <section>
                <A href={'/auth/utilisateur/client/huiiii' + userInfo().id}>
                    <IconStat />
                    Rapport Generale
                </A>
                <A href='/auth/utilisateur/administrateur'>
                    <IconStat />
                    Rapport Administrateur
                </A>
                <A href='/auth/utilisateur/administrateur/liste-des-produits'>
                    <IconsProd />
                    Produits
                </A>
                <A href='/'>
                    <IconOrder />
                    Commades
                </A>
                <A href='/'>
                    <IconUsers />
                    Utilisateurs
                </A>

                <A href="/">
                    <IconMsgs />
                    Messages
                </A>
            </section>
        </nav>
    );
};