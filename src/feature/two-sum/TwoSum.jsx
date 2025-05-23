import TimeLine from './components/TimeLine.jsx';
import CardItem from './components/CardItem.jsx';

import './TwoSum.scss'
import Hashmap from './components/Hashmap.jsx';
import { useState } from 'react';

export const TwoSum = () => {
    const nums = [2, -6, 11, 7];
    const target = 9;

    const [index, setIndex] = useState(0);
    const [initialize, setInitialize] = useState(false)


    return (
        <div className="content px-8">
            <div className="px-8 py-8">
                <h1>Algortimo Dos Sumas (Two Sum)</h1>

                <p className='my-8'>Dado un array de enteros nums y un entero objetivo, devuelve los índices de los dos números de forma que sumen el objetivo.
                    Puedes asumir que cada entrada tendrá exactamente una solución y no puedes usar el mismo elemento dos veces.
                    Puedes devolver la respuesta en cualquier orden.</p>

                <div className="flex justify-center gap-2 avatar avatar-placeholder">
                    {nums?.map((number) =>
                        <div className="bg-neutral text-neutral-content w-12 rounded-full">
                            <span>{number}</span>
                        </div>
                    )}
                </div>

                <div className="flex justify-center my-8">
                    <button className="btn btn-soft btn-accent">Comenzar</button>
                </div>
            </div>


            {initialize && (
                <div className="flex justify-center gap-2">
                    <TimeLine numbers={nums} />


                    <div className="flex-1 summay">
                        <div className="flex flex-wrap justify-content-around">
                            <CardItem nums={nums} index={index} target={target} />
                        </div>
                    </div>


                    <div className="flex-none card bg-base-100 text-primary-content mr-1">
                        <Hashmap />
                    </div>
                </div>
            )}
        </div >
    )
}
