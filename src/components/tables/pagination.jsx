import css from './pagination.module.css';


const ItemsPerPage = (props) => {


    return (
        <label class={css.label}>
            <select name='per' id='per' onChange={props.changed}>
                <option value={10}>10</option>
                <option default={true} value={20}>30</option>
                <option value={40}>60</option>
                <option value={60}>100</option>
            </select>
            articles par page
        </label>
    );
};

const PagesList = () => {
    return (
        <div class={css.btnContainer}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
        </div>
    );
};

const Pagination = () => {

    const changePerPages = (e) => {
        console.log(typeof e.target.value)
    };

    return (
        <section class={css.pagination}>

            <ItemsPerPage changed={changePerPages} />

            <PagesList />

        </section>
    );
};

export default Pagination;