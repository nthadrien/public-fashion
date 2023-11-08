import { Show, For, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import IconArw from '~icons/ri/arrow-drop-down-line';
import css from './accordions.module.css';


import img from "../../assets/imgs/gii.jpg";

const LinkAccordion = (props) => {

    const [open, setOpen] = createSignal(true);
    const toggle = () => setOpen(!open());

    return (
        <section class={css.wrapper}>
            <button class={css.btn} onClick={toggle}>
                <span>{props.head}</span>
                <IconArw class={open() ? css.rotate : ''} height={34} width={34} />
            </button>

            <Show when={open()} fallback={<></>} >
                <div class={css.links}>
                    <For each={props.list} fallback={'loading..'}>
                        {(item) => <a href={item.route}>{item.name}</a>}
                    </For>
                </div>
            </Show>
        </section>
    );
};

const TextAccordion = (props) => {
    const [open, setOpen] = createSignal(false);
    const toggle = () => setOpen(!open());

    return (
        <section class={css.wrapper}>
            <button class={css.btn} onClick={toggle}>
                <span>{props.head}</span>
                <IconArw class={open() ? css.rotate : ''} height={34} width={34} />
            </button>
            <hr />

            <Show when={open()} fallback={<></>} >
                <p>{props.text}</p>
            </Show>
        </section>
    )
};

const NavLinkAccordion = (props) => {

    const [open, setOpen] = createSignal(false);
    const toggle = () => setOpen(!open());
    // const close = () => setOpen(false);
    const close = () => console.log('close');

    return (
        <>
            <button class={css.btn} onClick={toggle}>
                <span>{props.head}</span>
                <IconArw class={open() ? css.rotate : ''} height={34} width={34} />
            </button>

            <Show when={open()} fallback='' >
                <div class={css.navLinks}>
                    <img src={img} class={css.image} alt="svg" />
                    <div class={css.links}>
                        <For each={props.list} fallback={'loading..'}>
                            {(item) => <A href={item.route}>{item.name}</A>}
                        </For>
                    </div>
                </div>
            </Show>
        </>
    )
};

export { LinkAccordion, TextAccordion, NavLinkAccordion };

