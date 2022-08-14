import { Link } from "react-router-dom";

const BlogList = ({blogs, title, deleteBlog}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return ( <div className="blog-list">
        <h2>{title}</h2>
        {
            blogs.map(blog => (
                <div className = "blog-preview" key = {blog.id}>
                    <h2> {blog.title} </h2> 
                    <p> written by: {blog.author}</p> 
                    {/* <a href={'/blogs/'+blog.id}>show blog</a> */}
                    <Link to={'/blogs/'+blog.id}>Show Blog</Link>
                    <button onClick={() => {deleteBlog(blog.id)}} >delete blog</button>
                </div>
            ))
        }
    </div> );
}
 
export default BlogList;