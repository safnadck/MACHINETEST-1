import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const DetailViewPage = () => {
  const { id } = useParams();  // Get the dynamic parameter `id`
  const [post, setPost] = useState(null);

  console.log('Detail View Page ID:', id); // Debugging

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post details", error);
      });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card" style={{ width: '100%', maxWidth: '600px' }}>
        <div className="card-body">
          <h1 className="card-title text-center">{post.title}</h1>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailViewPage;
