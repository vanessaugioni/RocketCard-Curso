// Base de informações para estilização

//   --bg: #000000;
//   --bg-card: #0E1218;
//   --text: #F1F1F1;
//   --img-profile: #8257e5;
//   --buttons: #FFF;
//   --border-button: #1A1A1A;

// font-family: Prompt
// font-family: 'Prompt', sans-serif;

// ------------------------------------- \\

import styled from "styled-components";

// ------------------------------------------------------------

export const Container = styled.main`
  // Corpo do projeto ("Body")
  width: 100%;
  height: 100vh;
  display: flex;

  section.section1 {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    margin-left: 25rem;

    h1 {
      color: #ffff;
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
      margin-left: 5rem;
      margin-bottom: 1.5rem;
      font-family: "Prompt", sans-serif;
    }
  }

  section.section2 {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10em;

    h1 {
      color: #fff;
      font-size: 20px;
      font-family: "Prompt", sans-serif;
      line-height: 30px;
      font-weight: 400;
      margin-bottom: 1rem;
    }
  }
`;

export const Article = styled.article`
  width: 438px;
  height: 693px;
  background: #1e1e1e;
  border-radius: 50px;
  border-style: solid;
  border-color: #000000;
  border-top-width: 27px;
  border-bottom-width: 27px;
  border-left-width: 15px;
  border-right-width: 15px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding: 2rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      background: none;
      border: 1px #fff solid;
      border-radius: 100px;
      width: 55px;
      height: 55px;
    }

    img {
      margin-top: 0.5rem;
      width: 30px;
      height: 37px;
    }

    span {
      font-family: "Prompt", sans-serif;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
      color: #ffffff;
    }
  }

  section {
    img {
      width: 355px;
      height: 350px;
      border-radius: 100%;
      border: 10px solid #8257e5;
    }

    div {
      width: 195.5px;
      height: 194.7px;
      border-radius: 50px;
      background-color: gray;

      ul {
        display: flex; 
      }

      img {
        width: 20.79px;
        height: 20.79px; 
        border:none;

      }



      /* p {
        font-family: "Prompt", sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #FFFFFF;
      } */
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding: 2rem;

    img {
      margin-top: 0.5rem;
      width: 28px;
      height: 34px;
    }

    span {
      font-family: "Prompt", sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #ffffff;
    }
  }
`;

//--------------------------------------------
// Estilização BOTÃO

export const Botao = styled.button`
  background-color: #000000;
  border: 3px solid #1a1a1a;
  border-radius: 15px;
  width: 229px;
  height: 59.47px;

  color: #ffff;
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  font-family: "Prompt", sans-serif;
`;
