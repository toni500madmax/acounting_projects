import { useEffect, useState } from "react";

type Props = {
  jurosTipo: "simples" | "composto";
  capital: number;
  Mes: number;
  JurosMensal: number;
  ValorMensal: number;
};

interface TableRow {
  mes: number;
  Juros: number;
  total: number;
}

export default function Tables({
  jurosTipo,
  capital,
  Mes,
  JurosMensal,
  ValorMensal,
}: Props) {
  const [data, setData] = useState<TableRow[]>([]);

  const jurosCompostos = (capital: number, Juros: number, mes: number) => {
    const newData: TableRow[] = [];
    let total = capital;
    for (let i = 1; i <= mes; i++) {
      const interest = (total * Juros) / 100;
      total += Math.floor(interest);
      newData.push({ mes: i, Juros, total });
    }

    setData(newData);
  };

  const jurosSimples = (capital: number, Juros: number, mes: number) => {
    const newData: TableRow[] = [];
    let total = capital;
    for (let i = 1; i <= mes; i++) {
      const interest = ValorMensal;
      total += Math.floor(interest);
      newData.push({ mes: i, Juros, total });
    }
    setData(newData);
  };

  useEffect(() => {
    if (jurosTipo === "composto") {
      jurosCompostos(capital, JurosMensal / 100, Mes);
    } else if (jurosTipo === "simples") {
      jurosSimples(capital, JurosMensal / 100, Mes);
    }
  });

  return (
    <div>
      <table>
        <thead>
          <th>Mês</th>
          <th>Juros</th>
          <th>Valor</th>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.mes}>
              <td>{row.mes}</td>
              <td>{row.Juros}</td>
              <td>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
