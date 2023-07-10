import { useEffect, useState } from "react";
import axios from 'axios';

const Tarefas = () => {

    const [tarefas, setTarefas] = useState([]);

    const requestTarefas = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log(response.data);
            setTarefas(response.data);
        } catch (error) {
            console.warn(error);
        }
    }

    const renderTarefas = (tarefas) => {
        return (
            <tr key={tarefas.id}>
                <td>{tarefas.id}</td>
                <td>{tarefas.title}</td>
                <td>{tarefas.completed ? 'Sim' : 'Não'}</td>
            </tr>
        )
    }

    useEffect(() => {
        requestTarefas();
    }, []);

    return (
        <table border="1">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Título</td>
                    <td>Concluída</td>
                </tr>
            </thead>
            <tbody>
                {tarefas.map(renderTarefas)}
            </tbody>
        </table>
    )
}

export default Tarefas;