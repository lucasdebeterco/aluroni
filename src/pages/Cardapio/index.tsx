import styles from './Cardapio.module.scss'
import logo from '../../assets/logo.svg'
import Buscador from "./Buscador";
import {useState} from "react";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from "./Itens/Itens";

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState("");

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
                    <div className={styles.cardapio__filtros}>
                        <Filtros filtro={filtro} setFiltro={setFiltro} />
                        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                    </div>
                </section>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
            </div>
        </main>
    )
}