import { AboutHeader } from "../components/headers/headers";
import css from './about.module.css';

import { TextAccordion } from "../components/accordion/accordions";


const FAQ = [

  {
    question: "Que faire en cas de soucis pendant la livraison",
    answer: "Si le produit recu par le livreur est defetuex alors nous ......"
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Nous acceptons les paiements par carte de crédit/débit (Visa, Mastercard, American Express) ainsi que les paiements via PayPal."
  }, {
    question: "Quels sont les délais de livraison ?",
    answer: "Les délais de livraison varient en fonction de votre destination. En général, les commandes sont livrées sous 7 à 14 jours ouvrables."
  }, {
    question: "Puis-je échanger ou retourner un article ?",
    answer: "Oui, nous acceptons les échanges et les retours dans les 30 jours suivant la réception de votre commande. Veuillez consulter notre politique de retours pour plus d'informations sur la procédure à suivre."
  },
  {
    question: "Service Apres ventes et garantie",
    answer: "Tout les produit vendu sur cette plateforme non'y pas la meme garantie"
  },
  {
    question: "Comment puis-je contacter votre service client ?",
    answer: "Vous pouvez nous contacter en utilisant le formulaire de contact disponible sur notre site web. Nous nous efforçons de répondre à toutes les demandes dans les plus brefs délais."
  }
];

function About() {
  return (
    <>

      <AboutHeader />
      <main class={css.main}>

        <h1 class="sph">Vos etes entres de bonne mains.</h1>

        <p>
          Bienvenue sur notre e-boutique de vêtements camerounais en ligne ! Nous sommes fiers de vous présenter une sélection unique de vêtements inspirés de la riche culture et de l'artisanat du Camerounais et Africain.
        </p>

        <h2 class='deco'>Notre histoire & Nos valeurs</h2>

        <p>
          Notre passion pour la mode et notre amour pour le Cameroun nous ont conduit à créer cette boutique en ligne. Nous avons pour mission de promouvoir et de partager la beauté des vêtements traditionnels africains surtout camerounais avec le reste du monde. Chaque pièce que nous proposons est soigneusement sélectionnée pour son authenticité et sa qualité exceptionnelle.
        </p>

        <section class={css.boxes}>

          <div class={css.box}>
            <p>
              Nous nous engageons à préserver l'essence même des vêtements camerounais traditionnels, en travaillant directement avec des artisans locaux pour garantir l'authenticité de nos produits.
            </p>
            <div class={css.quote}>
              <h2>Authenticité de Nos cultures:</h2>
              <i>“On respecte l’habit même si l’on ne respecte pas l’homme.”</i>
              <p>Proverbe chinois</p>
            </div>
          </div>

          <div class={css.box}>
            <h2>Responsabilité sociale :</h2>
            <p>
              Nous soutenons les communautés locales en travaillant avec des artisans camerounais et en contribuant au développement économique durable.</p>
          </div>

          
          <div class={css.box}>
            <h2>Notre collection :</h2>
            <p>
              Notre collection comprend une variété de vêtements traditionnels camerounais, tels que des tenues en pagne, des boubous, des robes, des chemises et bien plus encore. Chaque pièce est unique et raconte une histoire à travers ses motifs et ses couleurs vibrantes.
            </p>
          </div>

          <div class={css.box}>
            <div class={css.quote}>
              <h2>Qualité :</h2>
              <i>“Ici l'habit fait valoir l'homme, Là l'homme fait valoir l'habit.”</i>
              <small>Michel J.S.</small>
            </div>
            <p>
              Nous accordons une grande importance à la qualité de nos vêtements. Chaque pièce est fabriquée avec des matériaux durables et conçue pour durer.
            </p>
          </div>
        </section>

        <h2 class='deco'>Livraison et retours</h2>
        <p>
          Nous proposons une livraison rapide et fiable dans le monde entier. Si vous n'êtes pas entièrement satisfait de votre achat, nous acceptons les retours dans les 30 jours suivant la réception de votre commande. Veuillez consulter notre politique de retours pour plus d'informations.
        </p>
        <h2 id="faq" class='deco'>F.A.Q (Foire aux questions)</h2>

        <div style={'width: 100%'}>
          <For each={FAQ} fallback={'... un uinstant svp'}>
            {item => <TextAccordion head={item.question} text={item.answer} />}
          </For>
        </div>
        <p>
          Nous espérons que vous apprécierez votre expérience shopping sur notre e-boutique de vêtements camerounais en ligne ! N'hésitez pas à nous contacter si vous avez des questions supplémentaires.
        </p>

      </main>

    </>
  );
};

export default About;
