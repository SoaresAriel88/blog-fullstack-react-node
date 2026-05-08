import "./styles.css";

export const Modal = ({
  isOpen,
  id,
  setOpenModal,
  children,
  setCloseModal,
  handleEdit,
  title,
  body,
  cover,
  handleChangeTitle,
  handleChangeBody,
  handleChangeCover,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-background">
      <div className="modal-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
         
            handleEdit(id, { title, body, cover });

         
            setCloseModal();
          }}
        >
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

          <label htmlFor="cover">Digite a URL da imagem</label>
          <input
            name="cover"
            onChange={handleChangeCover}
            id="cover"
            type="file"
            placeholder="Digite a URL da imagem"
          ></input>

          <button type="submit" className="editButton" disabled={!title.trim() || !body.trim()}>
            Save Post
          </button>

          <button
            className="buttonClose-Modal"
            onClick={setCloseModal}
            type="button"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};
