import { A } from "@solidjs/router";
import css from './terms.module.css';

export default function Terms() {
    return (

        <>
            <h1 class='sph'>Termes et conditions</h1>
            <main class={css.main}>
                <aside class={css.navAside}>
                    <h2>Sommaires</h2>
                    <A href='/termes-et-conditions#pay'>Paiement</A>
                    <A href='/termes-et-conditions#delivery'>Delivery</A>
                    <A href='/termes-et-conditions#returns'>Politique de retour</A>
                    <A href='/termes-et-conditions#refunds'>Remboursements</A>
                    <A href='/termes-et-conditions#exchanges'>Échanges</A>
                    <A href='/termes-et-condittions#confidentiality'>Politique de confidentialité</A>
                    <A href='/termes-et-condittions#property'>Propriété intellectuelle</A>
                </aside>

                <aside class={css.asides}>
                    En effectuant un achat sur notre e-boutique de vêtements camerounais en ligne, vous acceptez les termes et conditions suivants :

                    <h2 id="pay">Paiement</h2>
                    <p>
                        Les paiements peuvent être effectués par [modes de paiement acceptés]. Votre commande sera traitée une fois le paiement confirmé.
                    </p>

                    <h2 id='delivery'>Livraison</h2>
                    <p>
                        Nous nous efforçons de vous livrer dans les délais les plus courts possibles. Veuillez noter que les délais de livraison peuvent varier en fonction de votre emplacement géographique.
                    </p>

                    <h2 id="returns"> Politique de retour </h2>
                    <p>
                        Nous acceptons les retours dans les 30 jours suivant la réception de votre commande. Si vous souhaitez retourner un article, veuillez nous contacter pour obtenir des instructions détaillées. Veuillez noter que les articles retournés doivent être dans leur état d'origine, non portés et avec toutes les étiquettes intactes.
                    </p>

                    <h2 id='refunds'>Remboursements</h2>
                    <p>
                        Une fois que nous avons reçu et inspecté l'article retourné, nous procéderons au remboursement dans les plus brefs délais. Veuillez noter que les frais d'expédition initiaux ne sont pas remboursables.
                    </p>

                    <h2 id='exchanges'>Échanges</h2>
                    <p>
                        Nous n'offrons pas d'échanges directs. Si vous souhaitez échanger un article, veuillez retourner l'article indésirable et passer une nouvelle commande pour l'article souhaité.
                    </p>

                    <h2 id="confidentiality">Politique de confidentialité</h2>
                    <p>
                        Nous respectons votre vie privée et nous nous engageons à protéger vos informations personnelles. Veuillez consulter notre politique de confidentialité pour en savoir plus sur la manière dont nous collectons, utilisons et protégeons vos données.
                    </p>

                    <h2 id='property'>Propriété intellectuelle</h2>
                    <p>
                        Tous les contenus présents sur notre e-boutique, y compris les images, les textes et les logos, sont protégés par des droits d'auteur et ne peuvent être utilisés sans notre autorisation préalable.
                    </p>
                    En effectuant un achat sur notre e-boutique, vous acceptez ces termes et conditions dans leur intégralité.
                </aside>
            </main>
        </>
    );
};