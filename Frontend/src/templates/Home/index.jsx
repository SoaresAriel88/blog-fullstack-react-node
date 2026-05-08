import "./styles.css";

import { useState, useEffect } from "react";
import axios from "axios";

import { Posts } from "../../components/Posts";
import { AddPostCard } from "../../components/AddPostCard";
import { SearchPostCard } from "../../components/SearchPostCard";

export const Home = () => {
  //const [ids, setIds] = useState(0);
  //const [cover, setCover] = useState("");
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "", cover: "" });
  const [searchValue, setSearchValue] = useState("");

  const carregarPosts = async () => {
    const res = await axios.get("http://localhost:3002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    carregarPosts();
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/posts/${id}`);
      setPosts((prev) => prev.filter((post) => post.id !== id));
      console.log("Removido com sucesso");
    } catch (error) {
      console.error("Erro ao remover post:", error);
    }
  };

const handleEdit = async (id, updatedData) => {

  try {

    const formData = new FormData();

    formData.append("title", updatedData.title); //FORM DATA SERVE PARA ENVIAR DADOS DE FORMULÁRIO É COMO SE FOSSE UM 
                                                 // FORMULÁRIO HTML, JÁ QUE O JSON NÃO ACEITA ESPECIFICAMENTE ARQUIVOS
                                                 // MAS SOMENTE TEXTO. 
    formData.append("body", updatedData.body);

    console.log(updatedData.cover);

    if (updatedData.cover instanceof File) {

      formData.append(
        "cover",
        updatedData.cover
      );
    }

    await axios.put(
      `http://localhost:3002/posts/${id}`, //TRANSFORM EM multipart/form-data
      formData
    );

    carregarPosts();

    console.log("Atualizado com sucesso");

  } catch (error) {

    console.error(error);
  }
};


  
  const handleChangeTitle = (e) =>
    setNewPost({ ...newPost, title: e.target.value });
  const handleChangeBody = (e) =>
    setNewPost({ ...newPost, body: e.target.value });
  const handleChangeCover = (e) =>
    setNewPost({ ...newPost, cover: e.target.files[0] });

const handleAdd = async (e) => {
  e.preventDefault();

  try {

    const formData = new FormData();

    formData.append("title", newPost.title);
    formData.append("body", newPost.body);
    formData.append("cover", newPost.cover);

    await axios.post(
      "http://localhost:3002/posts",
      formData
    );

    setNewPost({
      title: "",
      body: "",
      cover: null,
    });

    carregarPosts();

  } catch (error) {
    console.log(error);
  }
};

  const handleSearch = (e) => setSearchValue(e.target.value);

  const filteredPosts = searchValue
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : posts;

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}

        <SearchPostCard handleSearch={handleSearch} searchValue={searchValue} />
      </div>

      {filteredPosts.length > 0 && (
        <Posts
          posts={filteredPosts}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
          title={newPost.title}
          body={newPost.body}
          cover={newPost.cover}
          handleChangeTitle={handleChangeTitle}
          handleChangeBody={handleChangeBody}
          handleChangeCover={handleChangeCover}
        />
      )}

      {filteredPosts.length === 0 && <p>Não existe posts =(</p>}

      
      <div className="container-addPost">
        {!searchValue && (
          <AddPostCard
            handleAdd={handleAdd}
            title={newPost.title}
            body={newPost.body}
            cover={newPost.cover}
            handleChangeTitle={handleChangeTitle}
            handleChangeBody={handleChangeBody}
            handleChangeCover={handleChangeCover}
          />
        )}
      </div>
    </section>
  );
};

export default Home;

/* 
  handleAdd = () => {
    const { title, body, posts, cover } = this.state;
    let nextId = posts.length + 1;
    this.setState({
      posts: [
        ...posts,
        { id: nextId++, title: title, body: body, cover: cover },
      ],
      title: "",
      body: "",
    });
    console.log();
  };*/
/*
  handleTimeout = () => {
      const { posts, counter } = this.state;
      posts[0].title = 'o titulo mudou'
    
      this.timeOutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 2000  )
  } */
/*




/* 
 state = {
  name: 'Ariel Soares',
  counter: 0
};

handlePClick = () => { // Se usa arrow function, pois possibilita o uso do this sem fazer o bind
  this.setState({ name: 'Lobão' })
}

handleAClick = (event) => {
  event.preventDefault(); /*Serve para impedir o comportamento padrão que o navegador
                            executa automaticamente ao realizar certas ações. No caso foi o link */
/* 
  const { counter } = this.state; // == const counter = this.state.counter
  
  this.setState({ counter: counter + 1 }); // SetState Serve para atualizar o estado de um componente e agendar uma nova renderização

}

  render() {
    const { name, counter } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

//COMPONENTE DE FUNÇÃO

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}
*/
