
import css from './formComponent.module.css'

const SearchProductForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = Object.fromEntries(new FormData(e.target).entries());
        props.submit(obj)
    };

    return (
        <form class={css.productsForm} onSubmit={handleSubmit}>
            <h2>Collections </h2>
            <hr />
            <h4>sexe:</h4>
            <div class='grid-2'>
                <label>
                    <input type="radio" name="sexe" value="male" />
                    hommes
                </label>
                <label>
                    <input type="radio" name="sexe" value="male" />
                    femmes
                </label>
            </div>

            <h4>Age Estime</h4>

            <div class='grid-2'>
                <label>
                    <input type="radio" name="ageRange" value="adult" />
                    adultes
                </label>

                <label>
                    <input type="radio" name="ageRange" value="teen" />
                    enfants
                </label>
            </div>

            <label>
                mode
                <input type="text" />
            </label>

            <label>
                style
                <select >
                    <option value="africains">occidental</option>
                    <option value="asiatique">asiatique</option>
                    <option value="bresilien">Bresilien</option>
                </select>
            </label>


            <label>
                promotion:
                <input type="radio" name="promo" value={true} /> oui
                <input type="radio" name="promo" value={false} /> non
            </label>

            <label>
                Taille
                <select name="size">
                    <option value="L">L</option>
                    <option value="XXL">XXL</option>
                    <option value="XL">XL</option>
                </select>
            </label>

            <label>
                coleurs
            </label>

            <label>
                prix
                <input type="range" name="price" id="" />
            </label>

            <label>
                type de tissues
                <select name="size">
                    <option value="L">L</option>
                    <option value="XXL">XXL</option>
                    <option value="XL">XL</option>
                </select>
            </label>

            <button>
                search
            </button>
        </form>
    )
}

export default SearchProductForm
