import styles from "./estilo.module.css";

export default function CartaoUsuario({nome, ativo, children}) {
   
    return (
        <section className={ativo ? styles.card : styles.cardInativo}>
            <header className={styles.header}>{nome}</header>
            <main className={styles.main}>
                {children}
                <p>{ativo ? "Ativo" : "Inativo"}</p>
            </main>
        </section>
    )
}