
import css from './loading.module.css';
import IconSpin from '~icons/ri/loader-4-line';

const LoadingSpinner = () => {
  return (
    <aside class={css.loading}>
      <IconSpin class={css.spinnerLogo} />
      <h5 class='deco'>Un Instant svp...</h5>
    </aside>
  );
};

export default LoadingSpinner;
