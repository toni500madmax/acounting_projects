import GlobalStyle, { Container } from "./Global/StyleGlobal";
import Home from "./components/sections/Home";
import Footer from "./containers/Footer";
import Header from "./containers/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JurosSimples, { JurosCompostos } from "./containers/Main/calculators";

/*
ToDo 1: Criar tabela de apresentação dos dados corretamente para cada mês.
 1. na primeira versão apresentar tabelas abaixo.
 2. na segunda versão deve apresentar em uma janela modal e apagando todo formulário.
 3. na terceira deve ser feito a ligação com servidor para salvar informações via confirmação.
ToDo 2: Criar gráficos financeiros.
ToDo 3: Criar um Servidor-Json com dados para gerenciamento economico, contendo:
List: nome, banco, valor em caixa, valor destinado a investimento... (pesquisar o que mais).
*/

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculadoraSimples" element={<JurosSimples />} />
            <Route path="/calculadoraComposto" element={<JurosCompostos />} />
          </Routes>
        </Container>
      </Router>
      <Footer />
    </>
  );
}

export default App;
