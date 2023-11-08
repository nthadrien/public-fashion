
import { Rating } from '../ratings/ratings';
import css from './reviews.module.css';

function reiews() {

  const day = new Date();

  return (
    <section>
      <h1>Revues des clients</h1>

      <div class={css.rev}>
         <h3>Nom du clients  <Rating number={3} /></h3>
        <p>Amet consectetur, nostrum atque? Autem suscipit repudiandae sed.</p>
        <p>{day}</p>
      </div>

    </section>
  )
};

export default reiews;
