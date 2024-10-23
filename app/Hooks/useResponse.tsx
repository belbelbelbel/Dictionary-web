import React, { useState } from 'react'
export const useResponse = () => {
    const [data, setData] = useState(null)  
    const [loading, setLoading] = useState(false)
    const FetchData = async (url: string,data:string) => {
        setLoading(true)
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            const result = res.json()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    return { data, FetchData,loading}
}
