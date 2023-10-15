import { Link } from "react-router-dom";
import {GrFormEdit as Editar} from "react-icons/gr";
import {RiDeleteBin2Fill as Excluir} from "react-icons/ri";
import style from "./Produtos.module.css";
import { useEffect, useState } from "react";
import ModalInserir from "../components/ModalInserir/ModalInserir";
import "./Produtos.scss";

export default function Produtos() {
  document.title = "Produtos";

  const [listaProdutoExterna, setListaProdutoExterna] = useState([{}]);

  useEffect(()=>{
    fetch("http://localhost:5000/produtos",{
      method: "GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((response)=> response.json())
    .then((data) => {
      setListaProdutoExterna(data);
    })
    .catch(error => console.log(error));
  },[]);

  const [open, setOpen] = useState(false);

  return ( 
    <div>
      <h1>LISTA DE PRODUTOS</h1>

      {open ? <ModalInserir open={open} setOpen={setOpen}/> : "" }

      <button onClick={()=> setOpen(true)}>CADASTRAR PRODUTO</button>

      <table className={style.tblEstilo}>
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
        {
          listaProdutoExterna.map((item,indice)=>(
            <tr key={indice} className={style.tblLine}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.valor}</td>
                <td> <Link to={`/editar/produtos/${item.id}`}><Editar/></Link> | <Link to={`/excluir/produtos/${item.id}`}><Excluir/></Link> </td>
            </tr>
          ))
        }
</tbody>
<tfoot>
  <tr>
    <td colSpan={4}>PRODUTOS LINDOS</td>
  </tr>
</tfoot>
      </table>
    </div>
  )
}

//Exemplo de useEfect
// useEffect(()=>{
//   console.log("Este useEffect renderiza sempre! " + counter);
// });

// const [counter, setCounter] = useState(0);

// const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);

// useEffect(()=>{
//   console.log("Este useEffect renderiza apenas uma vez!");
//   setListaProdutosLocal(ListaProdutos);
// },[ ]);

// const [counter2, setCounter2] = useState(0)

// useEffect(()=>{
//   console.log("Este useEffect renderiza sempre que o objeto/variável ou elemento que está sendo monitorado no array de dependências sofra alguma atualização.");
// },[counter2]);

// <div>
// <button onClick={()=> setCounter(counter + 1)}>COUNTER - {counter}</button>
// </div>
// <div>
// <button onClick={()=> setCounter2(counter2 + 1)}>COUNTER2 - {counter2}</button>
// </div>
