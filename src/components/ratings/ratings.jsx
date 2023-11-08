import css from './rating.module.css';

const Rating = (props) => {
    return (
        <span class={css.showStars}>
            &#9733;&#9733;&#9733;&#9734;&#9734;
        </span>
    );
};

export {Rating};