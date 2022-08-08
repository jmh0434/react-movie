import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../Components/MovieDetail";

function Detail() {
    const[loading, setLoading] = useState(true);
    const[detail, setDetail]= useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setDetail(json.data.movie);
    };
    let nowUrl = window.location.pathname;

    useEffect(() => {
        setLoading(true);
        getMovie();
    },[nowUrl]);
    return loading ? (
      <div>
        <h1>Loading...</h1>
      </div>
    ) : (
      <MovieDetail
        url={detail.url}
        year={detail.year}
        rating={detail.rating}
        coverImg={detail.medium_cover_image}
        title={detail.title_long}
        summary={detail.description_full}
        genres={detail.genres}
      ></MovieDetail>
    );
}
export default Detail;