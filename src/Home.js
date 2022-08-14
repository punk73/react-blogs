
import { useState, useEffect } from "react"; //this make the variable reactive;
import Bloglist from './BlogList'
import useFetch from "./useFetch";

const Home = () => {
    // ambil data, rename jadi blogs;
    var {data:blogs, loading, error} = useFetch('http://localhost:8000/blogs');
    
    const deleteBlog = (id) => {
        console.log('delete ' + id)
    }

    return ( 
        <div className="home">
            {error && <div className="error">{error}</div> }
            {loading && <div className="loading">loading...</div> }
            {blogs && <Bloglist blogs={blogs} title="All Blogs" deleteBlog={deleteBlog} ></Bloglist>}
        </div>
     );
}
 
export default Home;