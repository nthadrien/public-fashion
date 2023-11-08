
import { For, createSignal } from 'solid-js';
import css from './productImages.module.css';
import IconZom from '~icons/ri/zoom-in-line'

const ProductImages = (props) => {

  const [number, setNumber] = createSignal(0);
  const ChangeNumber = (j) => setNumber(j);

  return (
    <div class={css.imgsContainer}>

      <div class={css.imgList}>
        <For each={props.list} fallback={'loading'}>
          {(item, index) => <img onMouseDown={() => ChangeNumber(index)} src={item} alt={'image '+index} class={css.small} />}
        </For>
      </div>

      <div class={css.currentImg}>
        <button class={css.zoom}>
          <IconZom />
        </button>
        <img src={props.list[number()]} class={css.big} alt="" />
      </div>
    </div>
  );
};

export default ProductImages;