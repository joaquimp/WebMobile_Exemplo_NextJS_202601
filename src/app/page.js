
import Participante from "../components/Participante";
import styles from "./page.module.css";

export default async function Home() {

  // let parts = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
  // parts = parts.map(u => {return {nome: u.name, cargo: u.email}});
  
  const parts = [
    {nome: "Joaquim", cargo: "professor"},
    {nome: "Célia", cargo: "gastronoma"},
  ]
  
  return (
    <>
      <h1 className={styles.titulo} >Lista de Participantes</h1>
      {/*{parts != null && parts.map(p => {
        return <Participante nome={p.nome} cargo={p.cargo} />
      })} */}

      {parts && parts.map((p, i) => <Participante key={"part-"+i} { ...p } />)}
    </>
  );
}


