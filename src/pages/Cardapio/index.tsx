import styles from './Cardapio.module.scss'
import logo from '../../assets/logo.svg'

export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="Logo Aluroni" />
            </nav>
        </main>
    )
}