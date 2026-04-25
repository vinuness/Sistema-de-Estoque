import '../pagPrincipal/pagprinc.css';
import Chart from 'react-apexcharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import InserirProduto from '../insercao/insert';
import EditarProduto from '../edicao/editarProduto';
import { useNavigate } from 'react-router-dom';
import { color } from 'chart.js/helpers';

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
                <div className='logo-container'>
                    <h1>
                        <img src={require('../imagem/logo.png')} alt="Logo" className='logo'/>
                        <p style={{color: "green"}}> GESTÃO <p style={{color: "greenyellow"}}> ÁGIL </p> </p>
                    </h1>
                </div>
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
                    <div className='grafico'>

                        <button 
                        id='add'
                        className="bi bi-plus fs-1" 
                        title='Adicionar produto'
                        onClick={() => setAdicionarProduto(true)}/>

                        {
                            adicionarProduto && (
                                <InserirProduto fechar={() => setAdicionarProduto(false)}/>
                            )
                        }

                        <button
                        id='updt' 
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
                categoria.outros
            ]
        }
    ]}
    options={
        {
        chart: {
            foreColor: '#020202',
            toolbar: {
                show: true,
                tools: {
                    download: true, 
                    selection: true,
                    zoom: true, 
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true,
                    style: {
                        color: '#020202'
                    }
                },
                offsetX: 0,
                offsetY: 0
            }
        },
        theme: {
            mode: 'transparent',
            toolbar: {
                tools: {
                    download: true, 
                    selection: true,
                    zoom: true, 
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true
            }
        }
        },
        title: {
            text: "",
            style: {fontSize: 30, fontFamily: 'sans-serif'}
        },
        colors: [
            '#4A90E2', 
            '#A3E635', 
            '#F59E0B',
            '#EC4899',
            '#8B5CF6',
            '#22D3EE',
            '#F87171',
            '#9CA3AF'
        ],
        plotOptions: {
            bar: {
                distributed: true,
            }
        },
        xaxis: {
            categories: [
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
        legend: {
            show: false,
        }
    }}
/>

                    </div>
                </div>
            </div>

            <div className='footer'>
                <p> © 2025 GESTÃO ÁGIL. Todos os direitos reservados. </p>
            </div>
        </div>
    );
}

export default PaginaPrincipal;