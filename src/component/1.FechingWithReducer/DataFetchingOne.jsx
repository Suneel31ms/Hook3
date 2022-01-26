import React, { useEffect, useState } from 'react';
import axios from 'axios'

//-----------using useState for Data Feching--------//

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})
    const [error, setError] = useState('')

    useEffect(() =>{
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(res=>{
      console.log(res);
      setLoading(false)
      setPost(res.data)
      setError('')
  })
  .catch(error =>{
      console.log(error);
      setLoading(false)
      setPost('')
      setError('Something went wrong!')
  })
    },[])
  return <div>
        {loading ? "Loading...": post.title}
        {error && error }
  </div>;
}

export default DataFetchingOne;
