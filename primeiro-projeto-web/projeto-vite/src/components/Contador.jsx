import { useState, useEffect } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        // mountagem
        const interval = setInterval(() => {
            setContador(cont => cont + 1);
        }, 1000);
        return () => {
            // desmontagem
            clearInterval(interval);
        }
    }, []);
    return (
        <div>
            Contador: {contador}
        </div>
    );
}

export default Contador;