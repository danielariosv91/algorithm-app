import { useState } from 'react';

export default function Hashmap() {
    const [steps, setSteps] = useState([]);


    const Card = ({ sum }) => {
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
    }

    return (
        <Card />
    )
}
