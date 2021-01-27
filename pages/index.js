import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
`

const P = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1em;
`

const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1em;
  padding: 7px 14px;
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? ({ theme }) => theme.colors.primary : "white"};
  color: ${props => props.primary ? "white" : ({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
 
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz sobre candlesticks</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Básico sobre Candlesticks</h1>
          </Widget.Header>
          <Widget.Content>
            <Form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
             <P> Teste os seus conhecimentos sobre Candlesticks </P>
              <Input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  // State
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Seu nome :)"
              />
              <Button primary type="submit" disabled={name.length === 0}>
                Jogar {name}
              </Button>
            </Form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
