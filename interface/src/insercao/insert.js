import axios from "axios";
import { useState } from "react";
import '../insercao/insertStyle.css';

function InserirProduto({fechar}){
    const [mercadoria, setMercadoria] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [cliente, setCliente] = useState('');

    function enviarProduto(){
        axios.post("https://localhost:7152/api/Estoque/inprt", {
            mercadoria,
            quantidade,
            preco,
            categoria
        }).then(() => window.location.reload());
    }
    return (
        <div className="caixa">
            <div className="popup">

                <div>
                <button
                id="fechar" 
                className="bi bi-arrow-left-square-fill fs-1" 
                onClick={(fechar)} />
                <h3> ADICIONAR PRODUTO </h3>
                </div>

                <input 
                id="mercadoria" 
                type='text' 
                value={mercadoria}
                onChange={(e) => setMercadoria(e.target.value)}
                placeholder="Mercadoria"
                />

                <input 
                id="quantidade" 
                type='number' 
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                placeholder="Quantidade"
                />

                <input 
                id="preco" 
                type='text' 
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Preço"
                />

                <select
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                >
                <option value="">Selecione a categoria</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Alimentos">Alimentos</option>
                <option value="Limpeza">Limpeza</option>
                <option value="Higiene">Higiene</option>
                <option value="Descartáveis">Descartáveis</option>
                <option value="Embalagens">Embalagens</option>
                <option value="Eletrônicos">Eletrônicos</option>
                <option value="Outros">Outros</option>
                </select>


                {/* <input 
                id="cliente" 
                type='number' 
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
                placeholder="Codigo de cliente"
                /> */}

                <button onClick={enviarProduto} className="btn">
                    Enviar
                </button>
            </div>
        </div>
    );
}

export default InserirProduto;