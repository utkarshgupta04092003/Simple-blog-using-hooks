import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

function Home() {
  const [posts, setPosts] = useState([]);

 

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      onSnapshot(q, (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setPosts(newData);
        console.log("posts", posts);
      });
    })();
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by" >Utkarsh</div>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}
export default Home;

