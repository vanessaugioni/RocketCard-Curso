import { Botao, Container, Article } from "./styles";
import { LogoRock } from "./assets/export";
import "./global.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("https://api.github.com/users/vanessaugioni")
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error))
      .finally(console.log("dentro do finaly"));
  }, []);

  console.log(user, "user");

  return (
    <Container>
      <section className="section1">
        <h1>Compartilhe seu #rocketcard</h1>

        <Article>
          <header>
            <div>
              <img src={LogoRock} alt="imagem" />
            </div>
            <span>birobirobiro</span>
          </header>

          <section>
          <img src={user.avatar_url} alt="" /> 

            <div>
              <p>{user.followers}</p>
              <p>{user.following}</p>
              <p>{user.public_repos}</p>
              <p>{user.company}</p>
              <p>{user.location}</p>
            </div>

          </section>

          <footer>
            <div>
              <img src={LogoRock} alt="imagem" />
            </div>
            <span>ROCKETCARD</span>
          </footer>
        </Article>
      </section>

      <section className="section2">
        <h1>Customizar Rocketcard</h1>

        <Botao>Gerar background</Botao>
      </section>
    </Container>
  );
}
