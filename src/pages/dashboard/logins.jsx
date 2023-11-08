
import { Match, Switch, createEffect } from "solid-js";
import { A, useLocation, useNavigate, useParams } from "@solidjs/router";
import css from './logins.module.css';
import { useAuthorized } from "../../contexts/auth";


const Login = () => {

    const { login } = useAuthorized();

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = Object.fromEntries(new FormData(e.target).entries());
        login(obj);
    };

    return (
        <form class={css.form} onSubmit={handleSubmit}>

            <h1 class='deco' style={'margin: auto'}><i>Fashion-Shop</i></h1>

            <label>
                Noms
                <input minLength={3} value={'Marcel'} type="text" name="name" placeholder="Nom d'utilisateur svp" />
            </label>

            <label>
                mot de passe
                <input type="password" value={'Marcel'} name="password" minLength={5} placeholder="&#8226; &#8226; &#8226; &#8226;" />
            </label>

            <p>
                Si vous rencontrez des problèmes, connectez-nous <A href="/authorization/utilisateurs/problemes">ici</A>. Si vous n'avez pas de compte svp cliquez <A href="/authorization/utilisateurs/nouveau-compte">ici</A>
            </p>

            <button type='submit'>
                Se Connecter
            </button>
        </form>
    );
};

const Register = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = Object.fromEntries(new FormData(e.target).entries());
    };

    const goBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <form class={css.form} onSubmit={handleSubmit}>
            <h1 class='sph'><i>Fashion-Shop</i></h1>

            <label title="De Preference votre vrai nom svp.">
                Noms d'utilisateur
                <input type="text" minLength={3} maxLength={20} name="name" placeholder="nom d'utilisateur svp" required />
            </label>

            <label title="gmail si possible">
                Email
                <input type="email" name="email" placeholder="nom d'utilisateur svp" required />
            </label>

            <label>
                telephone
                <input type="text" name="email" defaultValue={'+237 '} placeholder="nom d'utilisateur svp" required />
            </label>

            <label>
                Ville
                <input type="text" name="address" placeholder="Garoua, PMUC face fougeroule" required />
            </label>

            <label>
                mot de passe
                <input type="password" name="password" placeholder="&#8226;" required />
            </label>

            <label>
                mot de passe (verification)
                <input type="password" name="password2" placeholder="* * * *" required />
            </label>

            <div style='display: flex;justify-content: space-between;align-items:center'>
                <button type='submit'>
                    Creer mon compte
                </button>

                <button onClick={goBack}>
                    Annuler
                </button>
            </div>
        </form>
    )
}

const Issue = (props) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = Object.fromEntries(new FormData(e.target).entries());
        props.send(obj);
    };

    const goBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <form class={css.form} onSubmit={handleSubmit}>

            <h2 class='sph'>Votre Soucis svp?</h2>

            <label>
                email
                <input type="email" name="email" placeholder="exampple@mail.cm" />
            </label>

            <label>
                Soucis ou feeback?
                <select name="type">
                    <option value="issue"> Soucis</option>
                    <option value="feedback">Feedback</option>
                </select>
            </label>

            <label>
                message
                <textarea style={'border-raduis: 10px'} name="messages" cols="30" rows="5" maxLength={180} placeholder="Saisisez votre problème ici. Nous vous répondrons dans les plus brefs délais">
                </textarea>
            </label>

            <p>
                Si vous vous trouvez ici par erreur, veuillez cliquer sur le button <b>revenir</b>
            </p>

            <div style='display: flex;justify-content: space-between;align-items:center'>
                <button type='submit'>
                    soumettre
                </button>

                <button onClick={goBack}>
                    revenir
                </button>
            </div>
        </form>
    );
};

const Logins = () => {

    const {userInfo } = useAuthorized();
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    createEffect(() => {
        if ( userInfo() && location.pathname.includes(['compte']) ) {
            navigate('/auth/commandes');
        };
    });

    return (
        <main>{userInfo()}
            <Switch fallback={<Issue />}>
                <Match when={params.id === 'mon-compte'}>
                    <Login />
                </Match>
                <Match when={params.id === 'nouveau-compte'}>
                    <Register  />
                </Match>
            </Switch>
        </main>
    );
};

export default Logins;