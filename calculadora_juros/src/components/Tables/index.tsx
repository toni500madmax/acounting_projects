/* import { useEffect, useState } from "react"; */

export type Props = {
  capital: number;
  Mes: number;
  JurosMensal: number;
  ValorMensal: number;
};

export default function TableSimples(/* {
  capital,
  Mes,
  JurosMensal,
  ValorMensal,
}: Props */) {
  /* const [dadosTabela, setDadosTabela] = useState([]); */

  return (
    <div>
      <table>
        <thead>
          <th>Mês</th>
          <th>Juros</th>
          <th>Valor</th>
        </thead>
        <tbody>
          {/*         {dadosTabela.map((data) => (
            <tr key={data.mes}>
              <td>{data.mes}</td>
              <td>{data.JurosMensal}</td>
              <td>{data.ValorMensal}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
