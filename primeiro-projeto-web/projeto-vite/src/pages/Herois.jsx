import { useParams } from "react-router-dom";


const Heroi = () => {
    const params = useParams();
    return (
        <div>
            <h1>Herói</h1>
            <h2>Id:{params.heroiId}</h2>
        </div>
    )
}

export default Heroi;