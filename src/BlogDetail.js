import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetail = () => {
    const {id} = useParams()
    const {data:blog,loading,error} = useFetch('http://localhost:8000/blogs/'+id);

    return ( blog &&
    <div className="blog-detail">
        {error && <div className="error">{error}</div> }
        {loading && <div className="loading">loading...</div> }
            
        <article>
            <h2>{blog.title}</h2>
            <p>writen by : {blog.author}</p>
            <div>{blog.body}</div>
        </article>
    </div> 
    );
}
 
export default BlogDetail;