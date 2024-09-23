"use client";
export const options = {
    "method": "GET",
    "headers": {
        "Content-Type": "application/json",
    }
}

const fetchData = () => {
    const responseData = fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    return responseData;
}

const getMovies = async () => {
    const data = await fetchData()
    return data
}
export default getMovies;
