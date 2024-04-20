import GlobalStyle, { Container } from "./Global/StyleGlobal";
import CalculadoraDeJurosSimples from "./components/sections/calculadora";
import Footer from "./containers/Footer";
import Header from "./containers/Header/Header";

/*
ToDo 1: Criar tabela de apresentação dos dados corretamente para cada mês. 
ToDo 2: Criar gráficos financeiros.
ToDo 3: Criar um Servidor-Json com dados para gerenciamento economico, contendo:
        nome, banco, valor em caixa, valor destinado a investimento... (pesquisar o que mais).
*/

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <CalculadoraDeJurosSimples />
      </Container>
      <Footer />
    </>
  );
}

export default App;
