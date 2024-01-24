import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import {doc, getDoc} from 'firebase/firestore';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    (async () => {
        
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);

      const PostDetail = docSnap.data();
      console.log(PostDetail);
      setPost(PostDetail);

    })();
  
  }, []);


  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
