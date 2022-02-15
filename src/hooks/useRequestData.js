import React, { useEffect, useState } from "react";
import axios from React;

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [url])

    return (data)

}

export default useRequestData
