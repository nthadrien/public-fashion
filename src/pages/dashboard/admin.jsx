
import css from './admin.module.css';


const boxlist = [
    { head: 'Commandes de novembre', value: 14 },
    { head: "Nombre d'articles vendu ce mois", value: 1400 },
    { head: "Nombre de clients", value: 1400 },
    { head: "Revenues de Nombre", value: 24000 },
]


const Graph = () => {
    let content = (
        <div class={css.graphContainer}>

            <div class={css.graphead}>
                Graphie des ventes contre le mois

                <button>plus</button>
            </div>

            <div class={css.img}>

            </div>
        </div>
    );
    return content;
};


const Box = (props) => {
    let content = (
        <div class={css.box}>
            <h5>{props.info.head}</h5>
            <h2>{Intl.NumberFormat().format(props.info.value)}</h2>
        </div>
    );
    return content;
};

const Admin = () => {
    return (
        <>
            <h1>Rapport de l'administrateur.</h1>

            <section class={css.boxes}>
                <For each={boxlist} >
                    {(item) => <Box info={item} />}
                </For>
            </section>

            <section class={css.graphs}>
                <Graph />
                <Graph />
                <Graph />
                <Graph />
                <Graph />
            </section>
        </>
    );
};

export default Admin;