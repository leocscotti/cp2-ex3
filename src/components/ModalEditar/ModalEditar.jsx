import { useEffect, useState } from "react";

export default function ModalEditar(props) {

const [produto, setProduto] = useState({
    id: "",
    nome: "", 
    desc: "",
    valor: "",
  });
  
  const [error, setError] = useState(null);



useEffect(() => {
    fetch(`http://localhost:5000/produtos/${props.produto.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduto(data);
      })
      .catch((error) => console.log(error));
  }, [props.produto.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/produtos/${props.produto.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(produto)
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
     
        props.setOpen(false);
      })
      .catch((error) => console.log(error));
  }

  if (props.open) {
    return (
      <div className={styles.container}>
        <h1>EDIÇÃO DE PRODUTO</h1>
        <button onClick={() => props.setOpen(false)}>X</button>

        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Editar Produto</legend>
              <div>
                <label htmlFor="nome">Nome</label>
                <input
                  type="texto"
                  name="nome"
                  id="nome"
                  placeholder="Digite o nome do produto."
                  required
                  value={produto.nome}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="desc">Descrição</label>
                <input
                  type="texto"
                  name="desc"
                  id="desc"
                  placeholder="Digite a descrição do produto."
                  required
                  value={produto.desc}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="valor">Valor</label>
                <input
                  type="numero"
                  name="valor"
                  id="valor"
                  placeholder="Digite o valor do produto."
                  required
                  value={produto.valor}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button>ATUALIZAR</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }}
