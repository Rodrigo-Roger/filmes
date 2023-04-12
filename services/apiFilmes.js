import axios from "axios";

const apiFilmes = axios.create({
    baseURL:'https://api.themoviedb.org/3', 
    headers: {
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWVjNWRlMDRjYmE5NjZlNzEzMTQzYjEzODZmODBmMiIsInN1YiI6IjY0MzVlODllZmQ0ZjgwMDBkMzk4MjQ5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s_JIWrltimnpeBlEXCVWksH6gHjCIIfXsbpduO9ulaA'
    }
})

export default apiFilmes