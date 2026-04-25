import axios from "axios";
import { useState } from "react";
import '../edicao/editarProduto.css';

function EditarProduto({fechar}){
    const [quantidade, setQuantidade] = useState('');
    const [codigo, setId] = useState('');

    function incluir(quantidade, codigo){
        axios.put("https://localhost:7152/api/Estoque/incmt/produto/"+codigo+"?qtde="+quantidade, {
            quantidade,
            codigo
        }).then(() => window.location.reload());
    }

    function retirar(quantidade, codigo){
        axios.put("https://localhost:7152/api/Estoque/dcrmt/produto/"+codigo+"?qtde="+quantidade, {
            quantidade,
            codigo
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
                <h3> EDITAR PRODUTO </h3>
                </div>

                <input 
                id="codigo" 
                type='number' 
                value={codigo}
                onChange={(e) => setId(e.target.value)}
                placeholder="Codigo"
                />

                <input 
                id="quantidade" 
                type='number' 
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                placeholder="Quantidade"
                />

                <button id="retirar" onClick={() => retirar(quantidade, codigo)} className="btn">
                    Retirar
                </button>

                <button id="incluir" onClick={() => incluir(quantidade, codigo)} className="btn">
                    Incluir
                </button>

            </div>
        </div>
    );
}

export default EditarProduto;