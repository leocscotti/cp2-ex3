import { useState } from "react";
import styles from "./ModalInserir.module.css";

export default function ModalInserir(props) {

  const[produto,setProduto] = useState({
    id:"",
    nome:"",
    desc:"",
    valor:""
  });
  const handleChange = (e) =>{
    //Destructuring dos dados que chegam do form.
    const {name, value} = e.target;
    setProduto({...produto,[name]:value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    fetch("http://localhost:5000/produtos",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"     
      },
      body: JSON.stringify(produto)
    })
    .then((response)=> response.json())
    .then((response)=> console.log(response))
    .catch(error=>console.log(error));
    props.setOpen(false);
  }


  if (props.open) {
    return (
      <div className={styles.container}>
        <h1>CADASTRO DE PRODUTOS</h1>
        <button onClick={()=> props.setOpen(false)}>X</button>

        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Novo Produto</legend>
              <div>
                <label htmlFor="idNome">Nome</label>
                <input type="text" name="nome" id="idNome" placeholder="Digite o nome do produto." required value={produto.nome} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input type="text" name="desc" id="idDesc" placeholder="Digite a descrição do produto." required value={produto.desc} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idValor">Valor</label>
                <input type="number" name="valor" id="idValor" placeholder="Digite o valor do produto." required value={produto.valor} onChange={handleChange}/>
              </div>
              <div>
                <button>CADASTRAR</button>
              </div>                            
            </fieldset>
          </form>
        </div>

      </div>
    );
  }
}