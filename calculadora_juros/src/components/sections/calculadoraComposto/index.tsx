import { useState } from "react";
import styles from "../../Fields/FormStyle.module.css";
import InputCapital from "../../Fields/InputCapital";
import InputTaxaJuros from "../../Fields/InputTaxaJuros";
import InputTempo from "../../Fields/InputTempo";

export default function CalculadoraDeJurosComposto() {
  const [capital, setCapital] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [meses, setMeses] = useState("");
  const [resultado, setResultado] = useState(0);

  function handleCalculator(e: { preventDefault: () => void }) {
    e.preventDefault();
    let valCapital = capital;
    if (valCapital.includes(",")) {
      valCapital = valCapital.replaceAll(",", ".");
    }
    setResultado(
      parseFloat(valCapital) * (parseFloat(taxaJuros) / 100) * parseInt(meses)
    );
  }

  return (
    <div>
      <form className={styles.form}>
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
        <button
          className={styles.form_group_submit}
          type="submit"
          onClick={handleCalculator}
        >
          Calcular
        </button>
      </form>
      <div className={styles.container}>
        <h3 className={styles.quest}>
          Uma aplicação de R$
          {capital.includes(".") ? capital.replaceAll(".", ",") : capital}, no
          regime de <span className={styles.fees_type}>juros compostos</span>, é
          feita por {meses} meses a juros de {taxaJuros}% ao mês.
        </h3>
        <hr />
        <h2 className={styles.answer}>
          O rendimento no final do período será de: R$ {resultado.toFixed(2)}.
        </h2>
      </div>
    </div>
  );
}
