
import { useParams } from "@solidjs/router";
import css from './product.module.css';
import ProductImages from "../components/details/productImages";
import ProductDetail from "../components/details/productDetail";
import Reviews from "../components/details/reiews";
// images
import img1 from '../assets/imgs/gan.jpg';
import img2 from '../assets/imgs/chemise.jpg';
import img3 from '../assets/imgs/art.jpg';
import img4 from '../assets/imgs/beau.jpg';


function Product() {

  const params = useParams();

  const list = [
    img1,img2, img3 , img4
  ]

  return (
    <main style={'gap:2rem;'}>

      <section class={css.details}>
        <ProductImages list={list} />
        <ProductDetail />
      </section>

      <Reviews />

    </main>
  )
};

export default Product;