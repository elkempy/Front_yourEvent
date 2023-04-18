import axios from 'axios'

let token = localStorage.getItem("token")
let email = localStorage.getItem("email")


export const registerUser = async (newUser) =>
    await axios.post('http://localhost:4000/registerUser', newUser)

export const loginUser = async (loginUser)=>
    await axios.post('http://localhost:4000/loginUser',loginUser)

export const update = async(update)=>
    await axios.put(`http://localhost:4000/update/${email}`, update, {
        headers : {
            token : token
        }
    })    


