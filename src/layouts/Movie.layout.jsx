import React, { useContext, useEffect } from "react";
import axios from "axios";
// Components
import MovieNavbar from "../components/Navbar/movieNavbar.component";

//context
import {MovieContext} from ""
import { useParams } from "react-router";

const MovieLayout = (props) => {

  const { id } = useParams();
  const{ movie, setMovie } = useContext(MovieContext);

  useEffect = () =>{

    
  }






  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;