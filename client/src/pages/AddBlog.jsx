import react, {useState} from 'react';
import axios from 'axios';
import '../styles/AddBlog.css';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3020/addBlog', {
        title,
        content,
        author
      });

      setMessage(res.data.message);
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (error) {
      console.error(error);
      setMessage('Error adding blog');
    }
  };

  return (
    <div className="add-blog-container">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label><br />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <div>
          <label>Author:</label><br />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default AddBlog;