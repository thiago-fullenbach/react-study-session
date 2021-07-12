import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumAleatorio from './components/basicos/NumAleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default props =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 - Megasena" color="#982395">
                <Mega qtde={8} />
            </Card>

            <Card titulo="#12 - Contador" color="#982395">
                <Contador numeroInicial={20} />
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#982395">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#982395">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#982395">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21} />
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                {/* <UsuarioInfo usuario={{ email: 'fer@nando.com' }} /> */}
            </Card>

            <Card titulo="#07 - Desafio - Tabela de Produtos" color="#eb0000">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#eb0000">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00c8f8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <NumAleatorio max={10} min={1} />
            </Card>

            <Card titulo="#03 - Desafio Aleatório">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Desafio Aleatório">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={9.2}
                />
            </Card>

            <Card titulo="#01 - Desafio Aleatório">
                <Primeiro />
            </Card>
        </div>

    </div>

