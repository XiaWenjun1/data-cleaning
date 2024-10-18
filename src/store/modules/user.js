import {createSlice} from '@reduxjs/toolkit'
import { request } from '@/utils'

const userStore = createSlice({
    name:"user",
    initialState:{
        token:''
    },

    reducers:{
        setToken(state,action){
            state.token = action.payload
        }
    }
})

const {setToken} = userStore.actions

const userReducer = userStore.reducer

//Asynchronous method to complete the login and obtain the token
const fetchLogin = (loginForm)=>{
    return async (dispatch) =>{
        //Sending asynchronous requests
        const res = await request.post('', loginForm)
        //Submit synchronous action to deposit token
        dispatch(setToken(res.data.token))
    }
}

export { fetchLogin, setToken}

export default userReducer