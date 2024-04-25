import CalculadoraDeJurosComposto from "../../../components/sections/calculadoraComposto";
import CalculadoraDeJurosSimples from "../../../components/sections/calculadoraSimples";

export default function JurosSimples() {
  return (
    <div>
      <CalculadoraDeJurosSimples />
    </div>
  );
}

export function JurosCompostos() {
  return (
    <div>
      <CalculadoraDeJurosComposto />
    </div>
  );
}
