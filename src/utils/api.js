import axios from 'axios';


export const postFormData = (username, name, phone, address, city, state, country) => {
    console.log('hello')
    return axios.post("/user/adduser", {
        username,
        name,
        phone,
        address,
        city,
        state,
        country,
    })
};

export const updateFormData = (username, name, phone, address, city, state, country) => {
    return axios.put("/user/updateuser", {
        username,
        name,
        phone,
        address,
        city,
        state,
        country,
    })
};

export const getUsername = (user) => {
    return axios.get(`/user/getuser?user=${user}`);
}
