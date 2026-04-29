"use client"
import { useState } from "react";

export default function ContadorPage() {
    const [nome, setNome] = useState("Joaquim");

    const mudarNome = (e) => {
        e.preventDefault();
        setNome(e.target.value);
    }

    return (
        <main>
            <input value={nome} onChange={mudarNome} />
            <Contador nome={nome} inicial = {10} />
            <Contador nome={nome} />
            <Contador nome={nome} />
        </main>
    )
}

function Contador({nome, inicial = 0}) {
    const [valor, setvalor] = useState(inicial);
    
    const incrementar = () => {
        setvalor(valor + 1);
        console.log(valor);
    }

    const decrementar = () => {
        setvalor(valor - 1);
        console.log(valor);
    }

    return (
        <main>
            <h1>Contador do {nome}</h1>
            <p><strong>Valor:</strong> {valor}</p>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
        </main>
    )
}