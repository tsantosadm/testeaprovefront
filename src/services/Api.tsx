import Axios from 'axios'

export const api = Axios.create({

  baseURL:'http://localhost:5000/api/chuck-norris'

})



