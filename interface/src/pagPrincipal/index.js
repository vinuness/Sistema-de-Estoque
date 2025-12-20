import '../pagPrincipal/style.css';
import Chart from 'react-apexcharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import InserirProduto from '../insercao/insert';
import EditarProduto from '../edicao/editarProduto';
import { useNavigate } from 'react-router-dom';

function PaginaPrincipal(){

    const navigate = useNavigate();

    const home = () => {
        navigate('/');
    }

    const relatorio = () => {
        navigate('relatorio');
    }

    const [adicionarProduto, setAdicionarProduto] = useState(false);
    const [editarProduto, seteditarProduto] = useState(false);

    const [categoria, setCategoria] = useState({
        bebidas: 0, 
        alimentos: 0, 
        limpeza: 0, 
        higiene: 0, 
        descartaveis: 0, 
        embalagens: 0, 
        eletronicos: 0, 
        outros: 0
    })
    useEffect(() => {
        axios.get('https://localhost:7152/api/Estoque/qtdecat')
        .then((response) => {
            const resposta = {
                bebidas: response.data.bebidas,
                alimentos: response.data.alimentos, 
                limpeza: response.data.limpeza, 
                higiene: response.data.higiene, 
                descartaveis: response.data.descartaveis, 
                embalagens: response.data.embalagens, 
                eletronicos: response.data.eletronicos, 
                outros: response.data.outros
            }

            setCategoria(resposta);
        })
    }, []);

    return(
        <div className="content">

            <div className='navbar'>
                <h1>
                    SISTEMA DE ESTOQUE
                </h1>
            </div>

            <div className="sidebar">
                    <ul id='opcoes'>
                        <button onClick={home} class="bi bi-house fs-1"/>
                        <button onClick={relatorio} class="bi bi-card-text fs-1"/>
                    </ul>
            </div>

            <div className='main'>
                <div className='box'>
                    <div className='grafico'>

                        <button 
                        className="bi bi-plus fs-1" 
                        title='Adicionar produto'
                        onClick={() => setAdicionarProduto(true)}/>

                        {
                            adicionarProduto && (
                                <InserirProduto fechar={() => setAdicionarProduto(false)}/>
                            )
                        }

                        <button 
                        className="bi bi-pencil-square fs-3"
                        title='Editar produto'
                        onClick={() => seteditarProduto(true)}
                        />

                        {
                            editarProduto && (
                                <EditarProduto fechar={() => seteditarProduto(false)}/>
                            )
                        }

                        <Chart 
                        type='bar'
                        width={1500}
                        height={500}
                        series={[
                            {
                            name: "",
                            data: [
                                categoria.bebidas,
                                categoria.alimentos,
                                categoria.limpeza,
                                categoria.higiene,
                                categoria.descartaveis,
                                categoria.embalagens,
                                categoria.eletronicos,
                                categoria.outros]
                            }
                        ]}
                        
                        options={{
                            title:{
                            text: "",
                            style:{fontSize: 30, fontFamily: 'sans-serif'}
                            },

                            colors:[
                            '#4A90E2', 
                            '#A3E635', 
                            '#F59E0B',
                            '#EC4899',
                            '#8B5CF6',
                            '#22D3EE',
                            '#F87171',
                            '#9CA3AF'
                            ],

                            theme:{mode:'dark'},

                            plotOptions: {
                            bar: {
                                distributed: true,
                            }
                            },

                            xaxis:{
                            categories:[
                                "Bebidas", 
                                "Alimentos", 
                                "Limpeza", 
                                "Higiene", 
                                "Descartáveis", 
                                "Embalagens", 
                                "Eletrônicos", 
                                "Outros"
                            ]
                            },

                            legend:{
                            show:false,
                            }
                        }}
                        />

                    </div>
                </div>
            </div>

            <div className='footer'>
                <p>  </p>
            </div>
        </div>
    );
}

export default PaginaPrincipal;