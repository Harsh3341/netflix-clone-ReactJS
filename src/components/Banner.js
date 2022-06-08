import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  return (
    <Container
      style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <Content>
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <button>Play</button>
        <button>My List</button>
        <Description>{movie?.overview}</Description>

        <FadeBottom />
      </Content>
    </Container>
  );
}

const Container = styled.header`
  color: white;
  object-fit: contain;
  height: 448px;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
    margin: 10px 0;

    @media (max-width: 1024px) {
      font-size: 2.5rem;
    }

    @media (max-width: 800px) {
      font-size: 2.3rem;
    }

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

const Content = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;

  button {
    cursor: pointer;
    color: #ffff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    padding-bottom: 0.5rem;

    &:hover {
      color: black;
      background-color: #e6e6e6;
      transition: all 0.2s;
    }
  }
`;

const Description = styled.p`
  width: 45rem;
  line-height: 1.3rem;
  padding-top: 1rem;
  font-size: 0.9rem;
  max-width: 360px;
  height: 80px;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    width: 30rem;
  }

  @media (max-width: 600px) {
    width: 20rem;
  }
`;

const FadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
  margin-left: -30px;
`;

export default Banner;
