import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');


    return ( <div className="create">
        <h2>Create new blogs</h2>
        <form action="#">
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

        </form>

        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
    </div> );
}
 
export default Create;