import { GrFormEdit as Editar } from "react-icons/gr";
import { RiDeleteBin2Fill as Excluir } from "react-icons/ri";
import { useEffect, useState } from "react";
import ModalInserir from "../components/ModalInserir/ModalInserir";
import ModalExcluir from "../components/ModalExcluir/ModalExcluir";
import ModalEditar from "../components/ModalEditarProdutos/ModalEditarProdutos";
import "./Produtos.scss"

export default function Produtos() {
  document.title = "Produtos";

  const [listaProdutoExterna, setListaProdutoExterna] = useState([]);
  const [open, setOpen] = useState(false);
  const [openExcluir, setOpenExcluir] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/produtos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setListaProdutoExterna(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleOpenEditar = (produto) => {
    setProdutoSelecionado(produto); 
    setOpenEditar(true);
  };

  const handleOpenExcluir = (produto) => {
    setProdutoSelecionado(produto); 
    setOpenExcluir(true);
  };

  return (
    <div className="Produtos">
      <h1>LISTA DE PRODUTOS</h1>

      {open ? <ModalInserir open={open} setOpen={setOpen} /> : ""}

      {openExcluir ? 
        <ModalExcluir openExcluir={openExcluir}
          setOpenExcluir={setOpenExcluir}
          produto={produtoSelecionado}
        />
       : ""}

      {openEditar ? 
        <ModalEditar
          openEditar={openEditar}
          setOpenEditar={setOpenEditar}
          produto={produtoSelecionado} 
        />
       : ""}

      <button onClick={() => setOpen(true)}>CADASTRAR</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>EDITAR / EXCLUIR</th>
          </tr>
        </thead>
        <tbody>
          {listaProdutoExterna.map((item, indice) => (
            <tr key={indice}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.desc}</td>
              <td>{item.valor}</td>
              <td>
                <button onClick={() => handleOpenEditar(item)}>
                  <Editar />
                </button>
                <button onClick={() => handleOpenExcluir(item)}>
                  <Excluir />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>PRODUTOS LINDOS</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}