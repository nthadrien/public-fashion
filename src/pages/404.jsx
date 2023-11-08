import { useNavigate } from '@solidjs/router';

const styl ='padding: 8px; margin: 1rem 0; background: var(--hvy-clr); color: white;font-size:1.2em;';

const Error = () => {

    const navigate = useNavigate();
    return (
        <main>

            <h1>404 - Page N'existe pas </h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eveniet asperiores eos dolore perferendis repellat laborum incidunt rerum atque ipsa, fuga illum est quod culpa totam. Cupiditate debitis officiis nobis!
            </p>

            <button style={styl} onClick={() => navigate( '/', { replace: true }) }>
                <strong>Page D'Acceuille</strong>
            </button>

        </main>
    );
};

export default Error;