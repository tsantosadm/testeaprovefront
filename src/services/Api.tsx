import Axios from 'axios'

const api = Axios.create({

  baseURL:'http://localhost:5000/api/chuck-norris'

})

export default api;

