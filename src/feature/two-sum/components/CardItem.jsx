export default function CardItem() {
    return (
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
    )
}
