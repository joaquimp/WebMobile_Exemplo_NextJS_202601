import styles from "./participante.module.css";
/*
props = {
    nome: "Joaquim",
    cargo: "Professor"
}
*/
export default function Participante({ nome, cargo }) {
    return (
        <article className={styles.participante}>
        <strong>Nome: </strong> {nome}<br/>
        <strong>Cargo: </strong> {cargo}
        </article>
    );
}