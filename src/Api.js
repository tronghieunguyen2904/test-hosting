import { useEffect, useState } from "react";


function Api (){
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/laptops`)
            .then(res => res.json())
            .then(posts =>{
                setPosts(posts);
            })
        },[])

    return (
        <div>
        <ul>
            {posts.map(post =>(
                <li key={post.id}>{post.brand}</li>
            ))}
        </ul>
        </div>
    );
}

export default Api