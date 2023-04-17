import styles from './Cardapio.module.scss'
import logo from '../../assets/logo.svg'
import Buscador from "./Buscador";
import {useState} from "react";

export default function Cardapio() {
    const [busca, setBusca] = useState("");

    return (
        <main>
            <div className="container">
                <nav className={styles.menu}>
                    <img src={logo} alt="Logo Aluroni" />
                </nav>
            </div>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <div className="container">
                <section className={styles.cardapio}>
                    <h3 className={styles.cardapio__title}>Cardápio</h3>
                    <Buscador busca={busca} setBusca={setBusca} />
                </section>
            </div>
        </main>
    )
}