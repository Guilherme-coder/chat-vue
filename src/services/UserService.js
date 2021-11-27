import axios from 'axios'

class UserService {
    login(credentials) {
        return axios.post('http://localhost:3333/login', credentials)
            .then(res => res.data[0], err => {
                if(err) {
                    throw new Error(err.response.data[0].message)
                }
            })
    }

    loadSession() {
        return axios.get('http://localhost:3333/load_session')
            .then(res => res.data, err => {
                if(err) {
                    throw new Error(err.response.data[0].message)
                }
            })
    }
}

export default new UserService