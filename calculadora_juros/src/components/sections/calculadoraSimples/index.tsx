import { useState } from "react";
import styles from "../../Fields/FormStyle.module.css";
import InputCapital from "../../Fields/InputCapital";
import InputTaxaJuros from "../../Fields/InputTaxaJuros";
import InputTempo from "../../Fields/InputTempo";
import Tables from "../../Tables";

export default function CalculadoraDeJurosSimples() {
  const [capital, setCapital] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [meses, setMeses] = useState("");
  const [resultado, setResultado] = useState(0);
  const [table, setTable] = useState(false);

  function handleOnCLick(e: { preventDefault: () => void }) {
    e.preventDefault();
    let valCapital = capital;
    if (valCapital.includes(",")) {
      valCapital = valCapital.replaceAll(",", ".");
    }
    setResultado(
      parseFloat(valCapital) * (parseFloat(taxaJuros) / 100) * parseInt(meses)
    );
    setTable(true);
  }

  return (
    <div>
      <form onSubmit={handleOnCLick} className={styles.form}>
        <InputCapital
          text="Digite o valor do Capital"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        />
        <InputTaxaJuros
          text="Digite a taxa de Juros"
          value={taxaJuros}
          onChange={(e) => setTaxaJuros(e.target.value)}
        />
        <InputTempo
          text="Digite o período em meses"
          value={meses}
          onChange={(e) => setMeses(e.target.value)}
        />
        <button className={styles.form_group_submit} type="submit">
          Calcular
        </button>
      </form>
      <div className={styles.container}>
        <h3 className={styles.quest}>
          A quantia de R${" "}
          {capital.includes(".") ? capital.replaceAll(".", ",") : capital},
          aplicado a <span className={styles.fees_type}>juros simples</span>,
          com a taxa de {taxaJuros}% ao mês, no final de {meses} meses?
          <hr />
        </h3>
        <h2 className={styles.answer}>
          O rendimento no final do período será de: R$ {resultado.toFixed(2)}.
        </h2>
        {table && (
          <Tables
            jurosTipo="simples"
            capital={Number(capital)}
            Mes={Number(meses)}
            JurosMensal={Number(parseInt(taxaJuros) * 100)}
            ValorMensal={Number(resultado / parseInt(meses))}
          />
        )}
      </div>
    </div>
  );
}
