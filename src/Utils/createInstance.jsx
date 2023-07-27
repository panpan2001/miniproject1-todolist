import axios from "axios";
import jwtDecode from 'jwt-decode'
import { AuthApis } from "./Apis/AuthApis/AuthApis";

const refreshTooken= async()=>{
    try {
        const res= await axios.post(AuthApis.refreshToken,{withCredentials: true})
        return res.data
    } catch (error) {
        console.log(error)
    }
}
const createAxiosJWT=(dispatch,accounts,stateSuccess)=>{
    const newInstance= axios.create()
    
   newInstance.interceptors.request.use(
        async (config) => {
            let date= new Date()
            const decodeToken = jwtDecode(accounts?.accessToken)
            if(decodeToken < date.getTime()/1000){
                const data= await refreshTooken()
                const refreshAccount={
                    ...accounts,
                    accessToken:data.accessToken,
                }
                dispatch(stateSuccess(refreshAccount))
                config.headers['token']=`Bearer ${data.accessToken}`
            }
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )
    return newInstance
}

export default createAxiosJWT