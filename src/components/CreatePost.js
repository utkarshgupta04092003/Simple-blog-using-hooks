import {db} from '../firebase';
import {collection, addDoc } from "firebase/firestore";
import {useFormInput} from "../hooks";
import swal from 'sweetalert';
 
function CreatePost() {


    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');


    function handleSubmit(e){

        e.preventDefault();

        addDoc(collection(db, "posts"), {
           title: title.value,
           subTitle: subTitle.value,
           content: content.value,
           createdAt: new Date()
        })
        .then((docRef) => {
            console.log("Post added" + docRef);
            // alert('Your post is published')
            swal("Congratulation!", "Post is published successfully!", "success");
            window.history.back();

        })
        .catch((err) => {
            console.log("Error : ", err);
        });
        
    }




  return (
    <div className="create-post">
      <form onSubmit={handleSubmit}>

        <div className="form-field">
          <label>Title</label>
          <input {...title} required/>
        </div>

        <div className="form-field">
          <label >Sub Title</label>
          <input {...subTitle} required/>
        </div>

        <div className="form-field">
          <label >Content</label>
          <textarea {...content} required></textarea>
        </div>

        <button type="" className="create-post-btn">Create Post</button>

      </form>
    </div>
  );
}
export default CreatePost;
