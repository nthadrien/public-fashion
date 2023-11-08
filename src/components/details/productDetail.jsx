
import { For } from 'solid-js';
import css from './productDetail.module.css';


const seizes = ['S', 'L', 'X', 'XL', 'XXL'];
const colors = ['blue', 'gris', 'noire', 'blanc']

const productDetail = () => {
  return (
    <div class={css.detailsContainer}>
      <Show when={true}> <p class={CSS.promo}> -10%</p></Show>
      <h1>Bobo Ghanien</h1>

      <p>Marque: Addidas </p>

      <p>Quantite en stock <br> 80</br></p>

      <p>coleurs disponible:</p>
      <section>
        <For each={colors} >
          {item => <input type="button" value={item} />}
        </For>
      </section>

      <label class={css.label}>
        taile:

        <section>
          <For each={seizes} >
            {item => <input type="button" value={item} />}
          </For>
        </section>

      </label>

      <section>
        <label>
          Quantite:
          <input type="number" name="qty" />
        </label>

        <button>
          + Ajouter au panier
        </button>
      </section>



      <section>
        <h2>Decription</h2>
        <p>
          Labore nisi dignissimos, reiciendis ratione quis optio deserunt eligendi facilis iste aperiam aspernatur tempore, inventore numquam velit maxime quam consectetur eaque. Magni?
        </p>
        <h2>Infomation</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, blanditiis nam obcaecati animi ipsa repellendus numquam labore nesciunt distinctio quidem possimus at vero assumenda! Quasi accusantium quo laudantium officia ab.
        </p>

      </section>
    </div>
  )
}

export default productDetail;