import React, { useState } from "react";

export default function CalculadoraDeJurosSimples() {
  const [capital, setCapital] = useState("");
  const [taxaJuros, setTaxaJuros] = useState(0);
  const [meses, setMeses] = useState(0);
  const [resultado, setResultado] = useState(0);

  function handleOnCLick(e: { preventDefault: () => void }) {
    e.preventDefault();
    let valCapital = capital;
    if (valCapital.includes(",")) {
      valCapital = valCapital.replaceAll(",", ".");
    }
    setResultado(parseFloat(valCapital) * taxaJuros * meses);
  }

  return (
    <div>
      <form onSubmit={handleOnCLick}>
        <div>
          <label htmlFor="capital">Digite o valor capital</label>
          <input
            onChange={(e) => setCapital(e.target.value)}
            type="text"
            name="capital"
            id="capital"
            required
          />
        </div>
        <div>
          <label htmlFor="taxaJuros">Digite o valor taxa de juros</label>
          <input
            onChange={(e) => setTaxaJuros(parseFloat(e.target.value) / 100)}
            type="text"
            name="taxaJuros"
            id="taxaJuros"
            required
          />
        </div>
        <div>
          <label htmlFor="meses">Digite quantos meses</label>
          <input
            onChange={(e) => setMeses(parseInt(e.target.value))}
            type="text"
            name="meses"
            id="meses"
            required
          />
        </div>
        <button type="submit">Calcular</button>
      </form>
      {}
      <div>
        <h3>
          A quantia de R${" "}
          {capital.includes(".") ? capital.replaceAll(".", ",") : capital},
          aplicado a juros simples, com a taxa de {taxaJuros * 100}% ao mês, no
          final de {meses} meses?
          <hr />
        </h3>
        <h2>
          Assim, o rendimento no final do período será de R${" "}
          {resultado.toFixed(2)}.
        </h2>
      </div>
    </div>
  );
}
