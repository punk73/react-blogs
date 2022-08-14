import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        // console.log(blogs)
        const abortController = new AbortController();
        setLoading(true);
        fetch(endpoint)
            .then(res => {
                if (!res.ok) {
                    throw Error("Error has occured");
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setData(data);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('fetch aborted')
                    return;
                }
                setError(err.message);
            })
            .finally(() => setLoading(false))

        return () => abortController.abort();
    }, []);

    return {data, loading, error};

}

export default useFetch;