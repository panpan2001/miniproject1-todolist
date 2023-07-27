import { toast } from "react-toastify"
import { loginFailure, loginStart, loginSuccess } from "../../Slices/AuthSlices/LoginSlices"
import { AuthApis } from "../../../Utils/Apis/AuthApis/AuthApis"

const login = async(dispatch, value, axiosJWT,accessToken, account_id)=>{
    dispatch(loginStart())
    try {
        const res= await axiosJWT.post(AuthApis.login,value,{
            headers: {
                'Content-Type': 'application/json',
                'token': `Bearer ${accessToken}`,
                account_id: account_id
            }
        })
        dispatch(loginSuccess(res.data))
        toast.success(res.data.message,{
            position: "bottom-right",
        })
    } catch (error) {
        console.log(error)
        dispatch(loginFailure(error))
        toast.error(error.response.data,{
            position: "bottom-right",
        })
    }
}

export default login