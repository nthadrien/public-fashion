import css from './customInput.module.css';

export const Search = () => (
    <div class={css.inpContainer}>
        <input type="search" name="find" id="" />
        <input type="button" value="s" />
    </div>
);