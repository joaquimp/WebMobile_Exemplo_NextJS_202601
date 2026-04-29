import CartaoUsuario from "@/components/CartaoUsuario";
import styles from "./estilos.module.css";

export default function Usuarios() {
    return (
        <section className={styles.list}>
            <CartaoUsuario nome="Joaquim" ativo={true}>
                <h2>Professor</h2>
                <p>É professor na universidade Presbiteriana Mackenzie desde <strong>2007</strong></p>
                <CartaoUsuario nome="Célia" ativo={false} />
            </CartaoUsuario>
            
        </section>
    )
}