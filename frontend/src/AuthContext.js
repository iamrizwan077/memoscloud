import axios from 'axios'
import React, {createContext, useState, useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import jwt_decode from "jwt-decode";


const AuthContext = createContext()

export default AuthContext



export const AuthProvider = ({children}) => {

    
    let [authToken, setAuthToken] = useState(()=> localStorage.getItem("authToken") ? JSON.parse(localStorage.getItem("authToken")) :null)
    let [user, setUser] = useState(()=> localStorage.getItem("authToken") ? jwt_decode(localStorage.getItem("authToken")) :null)
    let [auth, setAuth] = useState(()=> localStorage.getItem("authToken") ? true :false)
    const navigate = useNavigate()
    let [loading,setLoading] = useState(true)

    

    const loginUser = async(e) => {
        e.preventDefault()
        console.log("FOrm")
        {/*}let response = await axios({
            method:"post",
            url:"http://127.0.0.1:8000/api/token/obtain/",
            headers: {
            //    'Authorization': "JWT "+ localStorage.getItem('access_token'),
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            data: JSON.stringify(({'email': e.target.email.value, 'password': e.target.password.value}))
        }){*/}

        let response = await fetch("http://127.0.0.1:8000/api/token/obtain/",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(({'email': e.target.email.value, 'password': e.target.password.value}))
                 
        })
        let data = await response.json()
        
    //    console.log("data:" , data)
      //  console.log(response)
    //    console.log(response.status)
        if(response.status === 200){
    //        console.log("RAched1")
            setAuthToken(data)

      //      console.log("RAched2")
        //    console.log(data)

          //  console.log(typeof(data))

        //    console.log(data.access)
            console.log(jwt_decode(data.access))
            
            setUser(jwt_decode(data.access))

//            console.log("RAched3")
            setAuth(true)

  //          console.log("RAched4")
            localStorage.setItem("authToken", JSON.stringify(data))
            
        }
        else{
            console.log("Something went wrong!")
        }
        
        return navigate("/")
    }

    let updateToken = async () => {
        console.log("Update called")
        let response = await fetch("http://127.0.0.1:8000/api/token/refresh/",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'refresh': authToken.refresh}
            )
                 
        })
        let data = await response.json()
        if(response.status === 200){
//            console.log("RAched1")
            setAuthToken(data)

  //          console.log("RAched2")
    //        console.log(data)

      //      console.log(typeof(data))

            console.log(data.access)
        //    console.log(jwt_decode(data.access))
            setUser(jwt_decode(data.access))

          //  console.log("RAched3")
            setAuth(true)

     //       console.log("RAched4")
            localStorage.setItem("authToken", JSON.stringify(data))
            
        }
        else{
            logoutUser()
        }
        
    }

    useEffect(()=>{
        let interval = setInterval(()=>{
            if(authToken){
                updateToken()
                console.log("REQUEST SENT")
            }
        }, 300000)
        return () => clearInterval(interval)
        
    }, [authToken])



    const logoutUser = () => {
        setAuthToken(null)
        setUser(null)
        setAuth(false)
        localStorage.removeItem("authToken")
    }


    const signupUser = async (e) => {
        
        e.preventDefault()
        console.log("sing FOrm")
        {/*}let response = await axios({
            method:"post",
            url:"http://127.0.0.1:8000/api/token/obtain/",
            headers: {
            //    'Authorization': "JWT "+ localStorage.getItem('access_token'),
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            data: JSON.stringify(({'email': e.target.email.value, 'password': e.target.password.value}))
        }){*/}

        let response = await fetch("http://127.0.0.1:8000/api/user/create/",{
            method: "post",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(({'username': e.target.username.value,'email': e.target.email.value, 'password': e.target.password.value}))
                 
        }
        )
        let data = await response.json()
        console.log(data)
        
    //    console.log("data:" , data)
      //  console.log(response)
        console.log(response.status)
        if(response.status === 201){
            //  console.log(data)
         //     let tokens = {'refresh':data.refresh, 'access': data.access}
    //        console.log("RAched1")
    //            console.log(tokens)
            setAuthToken(data)

      //      console.log("RAched2")
        //    console.log(data)

          //  console.log(typeof(data))

        //    console.log(data.access)
  //              console.log(data.username)

    //          setUser(data.username)
              setUser(jwt_decode(data.access))

//            console.log("RAched3")
              setAuth(true)

  //          console.log("RAched4")
            localStorage.setItem("authToken", JSON.stringify(data))
            
        }
        else{
            console.log("Something went wrong!")
        }
        
        return navigate("/")
    

    }

    let contextData = {
        user:user,
        auth,auth,
        authToken:authToken,
        signupUser:signupUser,
        loginUser:loginUser,
        logoutUser:logoutUser
    }

    

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>

        
    )
}