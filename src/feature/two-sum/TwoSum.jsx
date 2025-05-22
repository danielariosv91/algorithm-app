import './TwoSum.scss'

export const TwoSum = () => {
    return (
        <div className="content">
            <h1>Algortimo Dos Sumas (Two Sum)</h1>

            <p>Dado un array de enteros nums y un entero objetivo, devuelve los índices de los dos números de forma que sumen el objetivo.
                Puedes asumir que cada entrada tendrá exactamente una solución y no puedes usar el mismo elemento dos veces.
                Puedes devolver la respuesta en cualquier orden.</p>

            <div className="actions">
                <input type="text" placeholder="Ingresar Rango de valores" className="input" />
                <input type="text" placeholder="Ingresar Target" className="input" />
                <button className="btn btn-soft btn-accent">Generar</button>
            </div>

            <div className="compBody">
                <div className="box">2</div>
                <div className="box">-6</div>
                <div className="box">11</div>
                <div className="box">7</div>
            </div>
        </div>
    )
}
