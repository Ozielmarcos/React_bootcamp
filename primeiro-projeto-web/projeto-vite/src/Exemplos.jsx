import { Button } from "antd"
import Contador from "./components/Contador"
import Relogio from "./components/Relogio"


const Exemplos = () => {
    return (
        <div>
            <Relogio dataHora={new Date()} />
            <Contador />
            <Button type='primary' onClick={() => { alert('Clicou') }}>Clique aqui</Button>
        </div>
    )
}

export default Exemplos;