import { Link } from "react-router-dom";

export default function Erro404() {

  document.title = "Erro 404";

  return (
    <div>
      <h1>Página não encontrada - 404</h1>
      {/* <Link to="/">Voltar para a página inicial.</Link> */}
      <p>Voltar para o início - <Link to="/">VOLTAR</Link></p>
    </div>
  )
}
