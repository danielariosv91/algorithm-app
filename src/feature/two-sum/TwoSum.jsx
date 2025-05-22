import TimeLine from './components/TimeLine.jsx';
import CardItem from './components/CardItem.jsx';

import './TwoSum.scss'
import Hashmap from './components/Hashmap.jsx';

export const TwoSum = () => {
    const nums = [2, -6, 11, 7];
    const target = 9;

    return (
        <div className="content px-8">
            <h1>Algortimo Dos Sumas (Two Sum)</h1>

            <p className='my-8'>Dado un array de enteros nums y un entero objetivo, devuelve los índices de los dos números de forma que sumen el objetivo.
                Puedes asumir que cada entrada tendrá exactamente una solución y no puedes usar el mismo elemento dos veces.
                Puedes devolver la respuesta en cualquier orden.</p>

            {/* <div className="flex justify-center my-8">
                <input type="text" placeholder="Ingresar Rango de valores" className="input" />
                <input type="text" placeholder="Ingresar Target" className="input" />
                <button className="btn btn-soft btn-accent">Generar</button>
            </div> */}


            <div className="flex justify-center gap-2 avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                    <span>2</span>
                </div>
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                    <span>-6</span>

                </div>
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                    <span>11</span>
                </div>
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                    <span>7</span>
                </div>
            </div>

            <div className='flex justify-center gap-2 my-8'>
                <button className="btn btn-soft btn-accent">Comenzar</button>
                <button className="btn btn-soft btn-accent">Avanzar</button>
            </div>


            <div className="flex justify-center gap-2">
                <TimeLine values={nums} />


                <div className="flex-1 summay">
                    <div className="flex flex-wrap justify-content-around">
                        <CardItem />


                    </div>
                </div>



                <div className="flex-none card bg-base-100 text-primary-content mr-1">
                    <Hashmap />
                </div>

            </div>
        </div>
    )
}
