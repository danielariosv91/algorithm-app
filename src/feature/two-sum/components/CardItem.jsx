import { useState } from 'react';

export default function CardItem({ nums, index, target }) {
    const [steps, setSteps] = useState([]);

    const negativeAnswer = () => {
        // mostrar hashmap

        //mostar tarjeta negativa
    }

    const ExplainCard = ({ negative, index }) => {
        return (
            <div className="card bg-base-100 text-primary-content w-100 mr-1">
                <div className="card-body">

                    <p>Se toma el elemento ubicado en el indice {index}  </p>

                    <div className="mockup-code w-full">
                        <pre><code> nums[i] = {nums[index]}</code></pre>
                    </div>


                    <div className="mockup-code w-full">
                        <pre><code>target - nums[i] = {target - nums[index]}</code></pre>
                    </div>

                    <p className="my-6">¿Existe número {nums[index]} en el hashmap? </p>


                    <div className='flex justify-center gap-2 my-1'>
                        <button className="btn btn-soft btn-accent">Si</button>
                        <button className="btn btn-soft btn-accent" onClick={negativeAnswer}>No</button>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div className="card bg-base-100 text-primary-content w-100 mr-1">
            <div className="card-body">

                <p>Se toma el elemento ubicado en el indice {index}  </p>

                <div className="mockup-code w-full">
                    <pre><code> nums[i] = {nums[index]}</code></pre>
                </div>


                <div className="mockup-code w-full">
                    <pre><code>target - nums[i] = {target - nums[index]}</code></pre>
                </div>

                <p className="my-6">¿Existe número {nums[index]} en el hashmap? </p>


                <div className='flex justify-center gap-2 my-1'>
                    <button className="btn btn-soft btn-accent">Si</button>
                    <button className="btn btn-soft btn-accent" >No</button>
                </div>

            </div>


            {steps.map((texto, index) => (
                <ExplainCard negative={negative} index={index} />
            ))}
        </div>
    )
}
