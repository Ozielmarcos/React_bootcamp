import { useEffect, useState } from 'react';


const Relogio = (props) => {
    const { dataHora } = props;

    const [horaAtual, setHoraAtual] = useState(dataHora);
    //UseEffect é executado uma vez
    useEffect(() => {
        const contar = () => {
            setHoraAtual(new Date());
        }
        setInterval(contar, 1000);
    }, []);
    //Retorna o componente
    return (
        <div>
            <h2>Relógio</h2>
            <h3>Hora certa: {horaAtual.toLocaleTimeString()}</h3>
        </div>
    );
};

export default Relogio;