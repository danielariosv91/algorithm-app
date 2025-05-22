import TimeLine from './components/TimeLine.jsx';

import './TwoSum.scss'

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
                        <div className="card bg-base-100 text-primary-content w-100 mr-1 my-2">
                            <div className="card-body">

                                <p>Se toma el primer valor del ciclo [i] = {1}  </p>
                                <p>Se resta (nums[i] - target)</p>

                                <div className="mockup-code w-full">
                                    <pre><code> nums[i] = 2</code></pre>
                                </div>


                                <div className="mockup-code w-full">
                                    <pre><code>  9 - 2 = 7</code></pre>
                                </div>

                                <h5 className='my-5'>¿Existe {2} en el hashmap? </h5>
                                <h5 className='my-2'>No exite </h5>


                            </div>
                        </div>
                        <div className="card bg-base-100 text-primary-content w-100 mr-1">
                            <div className="card-body">

                                <p>Se toma segundo valor del ciclo </p>

                                <div className="mockup-code w-full">
                                    <pre><code> nums[i] = -6</code></pre>
                                </div>

                                <p>Se resta (nums[i] - target) </p>

                                <div className="mockup-code w-full">
                                    <pre><code>  9 - 6 = 3</code></pre>
                                </div>

                            </div>
                        </div>
                        <div className="card bg-base-100 text-primary-content w-100 mr-1">
                            <div className="card-body">

                                <p>Se toma segundo valor del ciclo </p>

                                <div className="mockup-code w-full">
                                    <pre><code> nums[i] = -6</code></pre>
                                </div>

                                <p>Se resta (nums[i] - target) </p>

                                <div className="mockup-code w-full">
                                    <pre><code>  9 - 6 = 3</code></pre>
                                </div>


                            </div>
                        </div>
                        <div className="card bg-base-100 text-primary-content w-100 mr-1">
                            <div className="card-body">

                                <p>Se toma segundo valor del ciclo </p>

                                <div className="mockup-code w-full">
                                    <pre><code> nums[i] = -6</code></pre>
                                </div>

                                <p>Se resta (nums[i] - target) </p>

                                <div className="mockup-code w-full">
                                    <pre><code>  9 - 6 = 3</code></pre>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className="flex-none card bg-base-100 text-primary-content mr-1">
                    <div className="card-body">
                        <p>Map</p>

                        <div className="mockup-code w-full">
                            <pre><code>map = {'{'}2: 0{'}'}</code></pre>

                        </div>
                        <div className="mockup-code w-full">
                            <pre><code>map = {'{'}2: 0{'}, {'}3: 0{'}'}</code></pre>

                        </div>
                        <div className="mockup-code w-full">
                            <pre><code>map = {'{'}2: 0{'}, {'}3: 1{'}, {'}11: 2{'}'}</code></pre>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
