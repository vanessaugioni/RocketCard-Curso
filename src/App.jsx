import { Botao, Container, Article, Card, Footer, Row } from "./styles";
import { LogoRock, Pessoa1, Pessoa2, Predio, Localizacao, Repositorio } from "./assets/export";
import "./global.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("https://api.github.com/users/vanessaugioni")  // link da API do GitHub
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error))
      .finally(console.log("dentro do finaly"));
  }, []);


  const [color, setColor] = useState('#53ac59') 

  function getColors() {
    const array = ['#19b5a5', '#ff0048', '#331d4a', '#2d6073', '#aee637', '#cb6f84', '#ff714b'];
    const randomNumber = Math.floor(Math.random() * array.length); 
    const result = array[randomNumber]; 
    setColor(result)

} 


// -------------------------------------
//*EXEMPLO de useState

// const [number, SetNumber] = useState(0) 
// function handleCounter() {
//     SetNumber(number + 1)
// }



  return (
    <Container>
      <section className="section1">
        <h1>Compartilhe seu #rocketcard</h1>

        <Article borderColor={color} >
          <header>
            <div>
              <img src={LogoRock} alt="imagem" />
            </div>
            <span>vanessa_ugioni</span>
          </header>

          <section className="main">
            <img className="perfil" src={user.avatar_url} alt="" />

            <Card>
          
            <Row>
                <img src={Pessoa1} alt="" />
                <span>{user.followers}</span>
                <p>Seguidores</p>
            </Row> 

              <Row>
                 <img src={Pessoa2} alt="" />
                 <span>{user.following}</span>
                 <p>Seguindo</p>
              </Row>

              <Row>
                 <img src={Repositorio} alt="" />
                 <span>{user.public_repos}</span>
                 <p>Repositórios</p>
              </Row>

              <Row>
                 <img src={Predio} alt="" />
                 <span>{user.company}</span>
              </Row>

              <Row>
                 <img src={Localizacao} alt="" />
                 <span>{user.location}</span>
              </Row>
              
            </Card>
          </section>

          <Footer>
            <div>
              <img src={LogoRock} alt="imagem" />
            </div>
            <span>ROCKETCARD</span>
          </Footer>
        </Article>
      </section>

      <section className="section2">
        <h1>Customizar Rocketcard</h1>

        <Botao onClick={getColors}>Gerar background
        </Botao>

         {/* <p>{number}</p>
        <button onClick={handleCounter}>contar numero</button>  */}

      </section>
    </Container>
  );
}
