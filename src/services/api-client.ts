import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api', 
    params:{
        key: '5e54d49f9efa4b588f0353b25d0a435b'
    }
})

export {CanceledError}