import react,{useEffect,useState} from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';

const Home = () => {
    const [data, setData] = react.useState([]);
    const [error, setError] = react.useState(null);

    const baseurl = import.meta.env.VITE_BASE_URL;
    console.log(baseurl);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseurl}/`);
                setData(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                setError(error.message||'Server interaction failed');
            }
        };

        fetchData();
    },[])

    return(
        <div className='blog-container'>
            {data.reverse().map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
            ))}
        </div>
    )
}

export default Home;