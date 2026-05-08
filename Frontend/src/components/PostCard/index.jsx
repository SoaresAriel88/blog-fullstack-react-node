import { useState } from "react";
import { Modal } from "../Modal/index.jsx"; // Mantendo sua importação
import "./styles.css";

export const PostCard = ({
  titlePost,
  coverPost,
  bodyPost,
  id,
  handleRemove,
  handleEdit,
}) => {
  const [openModal, setOpenModal] = useState(false);
  
  
  const [editPost, setEditPost] = useState({ 
    title: titlePost, 
    body: bodyPost, 
    cover: coverPost 
  });

  const handleChangeTitle = (e) => setEditPost({ ...editPost, title: e.target.value });
  const handleChangeBody = (e) => setEditPost({ ...editPost, body: e.target.value });
  const handleChangeCover = (e) => {

  const file = e.target.files[0];

  console.log(file);

  setEditPost((prev) => ({
    ...prev,
    cover: file
  }));
};

  return (
    <div className="post">
      <img src={`http://localhost:3002/uploads/${coverPost}`} alt={titlePost}/>
      
      <div className="post-content">
        <h1>{titlePost}</h1>
        <p>{bodyPost}</p>
      </div>
      
      <button className="removeButton" onClick={() => handleRemove(id)}>
        Delete
      </button>

      <button className="editButton" onClick={() => setOpenModal(true)}>
        Edit Post    
      </button>

      <div>
        <Modal 
          isOpen={openModal} 
          setCloseModal={() => setOpenModal(false)}     
          handleEdit={() => handleEdit(id, editPost)}
          title={editPost.title} 
          body={editPost.body}
          cover={editPost.cover}
          id={id}
          handleChangeTitle={handleChangeTitle}
          handleChangeBody={handleChangeBody}
          handleChangeCover={handleChangeCover}
        />    
      </div>
    </div>
  );
};
