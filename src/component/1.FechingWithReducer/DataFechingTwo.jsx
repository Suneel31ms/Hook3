import React, { useEffect, useReducer } from 'react';

import axios from 'axios'
//-------------using useReducer for Data fetching-------//

const initialState ={
    loading: true,
    post: {},
    error: ''
}
const reducer = (state, action) =>{
   switch(action.type){
       case 'FETCH_SUCCESS':
           return {
               loading: false,
               post:action.payload,
               error:''
           }
           case 'FETCH_ERROR':
               return{
                   loading:false,
                   post:{},
                   error:action.payload
               }
           default:
               return state
   }
}

function DataFechingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            console.log(res);
           dispatch({type:'FETCH_SUCCESS',payload:res.data})
        })
        .catch(error =>{
            console.log(error);
           dispatch({type:'FETCH_ERROR',payload:'Something went wrong!'})
        })
          },[])
  return (
    <div>
        {state.loading ? "Loading...": state.post.title}
        {state.error && state.error }
    </div>
  );
}

export default DataFechingTwo;
