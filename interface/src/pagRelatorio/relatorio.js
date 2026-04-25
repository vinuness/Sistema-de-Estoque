import '../pagPrincipal/pagprinc.css';
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
                    <img src={require('../imagem/logo.png')} alt="Logo" className='logo'/>
                    <p style={{color: "green"}}> GESTÃO <p style={{color: "greenyellow"}}> ÁGIL </p> </p>
                </h1>
            </div>

            <div className="sidebar">
                    <ul id='opcoes'>
                            <li>
                                <button onClick={home} id='home' class="bi bi-bar-chart-line-fill fs-1"/>
                                <label for="home"> Dashboard </label>
                            </li>

                            <li>
                                <button onClick={relatorio} id='relatorio' class="bi bi-card-text fs-1"/>
                                <label for="relatorio">Relatório</label>
                            </li>
                    </ul>
            </div>


            <div className='main'>
                <div className='box'>
                    <table>
                        <thead>
                        <tr>
                            <td> Mercadoria </td>
                            <td> Quantidade </td>
                            <td> Preço </td>
                            <td> Categoria </td>
                            <td> Código </td>
                        </tr>
                        </thead>
                        <tbody>
                            {resultado(listaProdutos)}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='footer'>
                <p> © 2025 GESTÃO ÁGIL. Todos os direitos reservados. </p>
            </div>
        </div>
    );
}

export default PagRelatorio;