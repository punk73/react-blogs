import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setLoading(true);
        fetch("http://localhost:8000/blogs", {
            method : "POST",
            headers : {'Content-Type':"application/json"},
            body : JSON.stringify(blog)
        }).then(res => res.json())
            .then(data=>{
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false); 
                history.push('/')
            })
    }

    return ( <div className="create">
        <h2>Create new blogs</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
            
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            
            <label htmlFor="author">author</label>
            <select name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="yosho">yosho</option>
                <option value="luigi">luigi</option>
            </select>

            {!loading && <button type="submit">Submit</button>}
            {loading && <span>loading...</span> }
        </form>

        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
    </div> );
}
 
export default Create;