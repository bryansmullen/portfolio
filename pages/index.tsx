import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  const projects = [
    {
      id: 1,
      subdomain: "http://expanding-cards.bryanmullen.io",
      name: "Expanding Cards",
      description:
        "Basic cards generated in React using CSS flex and animation",
    },
  ];

  return (
    <Container>
      <Head>
        <title>Bryan Mullen | Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>Bryan Mullen</Title>

        <Description>Developer Portfolio</Description>

        <Grid className="project">
          {projects.map((project) => (
            <Card key={project.id} href={project.subdomain}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </Card>
          ))}
        </Grid>
      </Main>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; Bryan Mullen {new Date().getFullYear()}
        </a>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  a {
    color: #0070f3;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }

  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Card = styled.a`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: red;
    border-color: red;
    cursor: pointer;
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;
