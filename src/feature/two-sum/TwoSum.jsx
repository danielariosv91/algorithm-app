import './TwoSum.scss'

export const TwoSum = () => {
    return (
        <div className="content">
            <h1>Algortimo Dos Sumas (Two Sum)</h1>

            <p className='my-8'>Dado un array de enteros nums y un entero objetivo, devuelve los índices de los dos números de forma que sumen el objetivo.
                Puedes asumir que cada entrada tendrá exactamente una solución y no puedes usar el mismo elemento dos veces.
                Puedes devolver la respuesta en cualquier orden.</p>

            <div className="flex my-8">
                <input type="text" placeholder="Ingresar Rango de valores" className="input" />
                <input type="text" placeholder="Ingresar Target" className="input" />
                <button className="btn btn-soft btn-accent">Generar</button>
            </div>


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


            <div className="flex">
                <div className="w-14 timeline">
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-start timeline-box">2</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-primary h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">-6</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className=" h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">11</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">7</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="flex summay">
                    <div className="card bg-base-100 text-primary-content w-96 mr-1">
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
                    <div className="card bg-base-100 text-primary-content w-96 mr-1">
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



                <div className="card bg-base-100 text-primary-content w-96 mr-1">
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
