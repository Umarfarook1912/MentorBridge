import React, { useEffect, useState } from 'react'

const Effect8 = () => {
    const [loading, setLoading] = useState(false);
    const [joke, setJoke] = useState('');
    useEffect(() => {
        const fetchJoke = async () => {
            try {
                const response = await fetch('https://official-joke-api.appspot.com/random_joke');
                const data = await response.json();
                setJoke(`${data.setup}-${data.punchline}`);
            }
            catch (error) {
                setJoke("Failed to fetch Joke");
            }
            finally {
                setLoading(false);
            }
        }
        fetchJoke();
    },[])
    return (
        <div>
            <h1>Random Joke</h1>
            {loading ?<p>loading..</p>:<p>{joke}</p>}

        </div>
    )
}

export default Effect8