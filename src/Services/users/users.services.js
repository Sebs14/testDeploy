import axios from "axios"
const BASE_URL = "http://localhost:8080/"

export const userservices ={
    signin: async (email, password) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/signin`,{email, password})
            return response.data
        }catch (error){
            const {data} = error?.response
            return data ?? {success: false, content: null, messages: ["Unexpected error papu :,v"]}
        }
    },
    signout: async()=>{
        try {
            const response = await axios.delete(`${BASE_URL/auth/logout}`)
            if (response.status === 204) return true
            return false
        } catch (error) {
            const {data} =error?.response
            return data ?? {succes: false, content:null, messages: ["Unexpected error"]}
            
        }
    },
    signup: async(userToCreate) => {
        try {
            const formData = new FormData()
            Object.entries(userToCreate).forEach(field => {
                const [key, value] =field
                formData.append(key,value)
            });
            const response = await axios.post(`${BASE_URL} / auth / signup`, formData,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
            return response.data ??{}
        }catch(error){

        }
    }


}