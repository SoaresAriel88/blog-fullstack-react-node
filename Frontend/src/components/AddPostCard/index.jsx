import "./styles.css";
export const AddPostCard = ({
  handleAdd,
  posts,
  title,
  body,
  cover,
  handleChangeTitle,
  handleChangeBody,
  handleChangeCover
}) => {
  return (
    <div className="add-Post">
      <form action="/posts" method="POST" onSubmit={handleAdd}>
        
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
        <br />
        <label htmlFor="body">Body</label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={handleChangeBody}
        />
        <br />
        <label htmlFor="cover">Selecione uma imagem</label>
        <input
        name="cover"
        id="cover"
        type="file"
        placeholder="Envie a URL da imagem"
        onChange={handleChangeCover}>
        </input>

        <button
          type="submit"
          className="addButton"
          onClick={handleAdd}
          disabled={!title.trim() || !body.trim()}
        >
          Add Post
        </button>
      
      </form>
    </div>
  );
};
