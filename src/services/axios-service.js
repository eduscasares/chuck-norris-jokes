import APIRequest from '../utils/config/axios.config';

export function getRandomJoke() {
    
    return APIRequest.get('/', {
        validateStatus: function(status) {
            return status < 500; // Resuelve solo si STATUS es menor de 500
        }
    }); 

}