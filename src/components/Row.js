import { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <Container>
      <h2>{title}</h2>
      <RowPosters {...settings}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </RowPosters>
    </Container>
  );
}

const Container = styled.div``;

const RowPosters = styled(Slider)`
  overflow: hidden;
  margin: 20px 0;

  & > button {
    opacity: 0;
    height: 100%;
    width: 4vw;
    z-index: 3;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      z-index: 4;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    background-color: black;
    left: -20px;
  }

  .slick-next {
    background-color: black;
    right: -20px;
  }

  .slick-slide {
    padding: 0 4px;
  }

  img {
    transition: transform 450ms;
    border-radius: 5px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default Row;
