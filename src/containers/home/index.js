import React from "react";
import Movies from "../../mocks/movies.json";
import Genres from "../../mocks/genres.json";
import { FeaturedMovie } from "@/components/featured-movie";
import { Categories } from "@/components/categories";
import { MoviesSection } from "@/components/movies-section";

const HomeContainer = () => {
  return (
    <div className="container">
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      <MoviesSection
        movies={Movies.results.slice(1, 7)}
        title="Popular Films"
      />
      <MoviesSection
        movies={Movies.results.slice(7, 13)}
        title="Your Favorites"
      />
    </div>
  );
};

export default HomeContainer;
