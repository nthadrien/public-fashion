import { A } from '@solidjs/router';

import css from './footer.module.css';
import IconWa from '~icons/ri/whatsapp-fill';
import IconFb from '~icons/ri/facebook-box-fill';
import IconX from '~icons/ri/twitter-x-fill';
import IconTk from '~icons/ri/tiktok-fill';

const AdminFooter = () => {
    return (
        <footer class={css.footer}>
            
            <p style={'display:flex;align-items: center;'} class='deco'>
                <small>Copyright &copy; 2023 Designed & coded by nthadrien </small>
            </p>

            <div className={css.plain}>
                <i><b>Fashion-shop</b></i>
                <a href=""> <IconFb /> </a>
                <a href=""> <IconWa /> </a>
                <a href=""> <IconX /> </a>
                <a href="">  <IconTk /> </a>
            </div>

        </footer>
    );
};

export default AdminFooter;