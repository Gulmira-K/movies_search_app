import axios from "axios";

export default axios.create({
   baseURL: 'https://api.themoviedb.org/3',
     params: {
       api_key: 'e7fa7a273b74abf43da4905d3e11d887',
       language: 'es-ES',
  }
})
