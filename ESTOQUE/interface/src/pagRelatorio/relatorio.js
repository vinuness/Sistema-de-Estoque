import '../pagPrincipal/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pagRelatorio/relatorio.css';

function PagRelatorio(){

    const navigate = useNavigate();
    const home = () => {
        navigate('/');
    }

    const relatorio = () => {
        navigate('/relatorio');
    }

    const produto = {
        mercadoria: "",
        quantidade: 0,
        preco: "",
        categoria: "",
        cliente: 0,
        codigo: 0
    }
    
    const [listaProdutos, setLista] = useState([produto])

    useEffect(() => {
        axios.get('https://localhost:7152/api/Estoque')
        .then((response) => {
            setLista(response.data);
        })
        console.clear();
    }, []);

    const resultado = (listaProdutos) => {
        return listaProdutos.map(item => (
            <tr key={item.codigo}>
                <td> {item.mercadoria} </td>
                <td> {item.quantidade} </td>
                <td> {item.preco} </td>
                <td> {item.categoria} </td>
                <td> {item.codigo} </td>
            </tr>
        ));
    };

    return(
        <div className="content">

            <div className='navbar'>
                <h1>
                    SISTEMA DE ESTOQUE
                </h1>
            </div>

            <div className="sidebar">
                    <ul>
                        <button onClick={home} class="bi bi-house fs-1"/>
                        <button onClick={relatorio} class="bi bi-card-text fs-1"/>
                    </ul>
            </div>

            <div className='main'>
                <div className='box'>
                    <table>
                        <tr>
                            <td> Mercadoria </td>
                            <td> Quantidade </td>
                            <td> Preço </td>
                            <td> Categoria </td>
                            <td> Código </td>
                        </tr>
                        <tbody>
                            {resultado(listaProdutos)}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='footer'>
                <p>  </p>
            </div>
        </div>
    );
}

export default PagRelatorio;