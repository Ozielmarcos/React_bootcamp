import { useEffect, useState, useMemo } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import TarefaItem from "../components/TarefaItem";
import fakeAuth from "../fake-auth";

const Tarefas = () => {
    const navigate = useNavigate();

    const [tarefas, setTarefas] = useState([]);
    const [busca, setBusca] = useState('');

    const handleBusca = (event) => {
        setBusca(event.target.value);
    }

    const tarefasFiltradas = useMemo(() => {
        if (!busca) return tarefas;
        return tarefas.filter((tarefa) =>
            tarefa.title.includes(busca)
        );
    }, [busca, tarefas]);


    const requestTarefas = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log(response.data);
            setTarefas(response.data);
        } catch (error) {
            console.warn(error);
        }
    }

    const renderTarefas = (tarefas, index) => {
        return (
            <TarefaItem tarefa={tarefas} key={index} />
        )
    }

    useEffect(() => {
        requestTarefas();
    }, []);

    const handleSair = () => {
        fakeAuth.isAuthenticated = false;
        navigate('/login');
    }

    return (
        <div>
            <button onClick={handleSair}>Sair</button>
            <input placeholder="Buscar tarefa por título"
                onChange={handleBusca}
                value={busca} />

            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Título</td>
                        <td>Concluída</td>
                    </tr>
                </thead>
                <tbody>
                    {tarefasFiltradas.map(renderTarefas)}
                </tbody>
            </table>
        </div>
    )
}

export default Tarefas;