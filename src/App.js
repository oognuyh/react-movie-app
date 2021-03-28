import React, { useState, useEffect, useReducer, useCallback } from "react";
import axios from "axios";
import { Card, Header, Modal, Loader } from "./components";
import { movieReducer, modalReducer } from "./reducer/reducer";
import { ACTIONS } from "./common/action";

const App = () => {
  const [state, dispatch] = useReducer(movieReducer, { loading: false, movies: null, error: null });
  const [modal, modalDispatch] = useReducer(modalReducer, { movie: null, isOpen: false });
  const [queryTerm, setQueryTerm] = useState("");

  const fetchMovies = useCallback(async ({ queryTerm, dispatch }) => {
    dispatch({ type: ACTIONS.LOADING });

    await axios
      .get(`https://yts-proxy.now.sh/list_movies.json?sort_by=rating&query_term=${queryTerm || ""}`)
      .then((response) => {
        dispatch({ type: ACTIONS.SUCCESS, payload: response.data.data.movies });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ERROR, error: error });
      });
  });

  useEffect(() => {
    fetchMovies({ dispatch: dispatch, queryTerm: queryTerm });
  }, [queryTerm]);

  const { loading, error, movies } = state;

  return (
    <>
      {modal.isOpen && (
        <Modal.Container>
          <Modal>
            <Modal.CloseButton onClick={() => modalDispatch({ type: ACTIONS.HIDE })} />
            <Modal.Image src={modal.movie.background_image} alt={modal.movie.title} />
            <Modal.Content>
              <Modal.Title>{modal.movie.title}</Modal.Title>
              <Modal.MetaWrapper>
                <Modal.Year>{modal.movie.year}</Modal.Year>
                <Modal.Runtime>{modal.movie.runtime} min</Modal.Runtime>
              </Modal.MetaWrapper>
              <Modal.Description>{modal.movie.description_full}</Modal.Description>
            </Modal.Content>
            <Modal.DownloadWrapper>
              {modal.movie.torrents.map((torrent) => {
                return (
                  <Modal.DownloadButton key={torrent.hash} href={torrent.url}>
                    {torrent.quality}
                  </Modal.DownloadButton>
                );
              })}
            </Modal.DownloadWrapper>
          </Modal>
        </Modal.Container>
      )}
      <Header>
        <Header.SearchIcon style={{ color: "white", paddingRight: "8px" }} />
        <Header.Input onChange={(event) => setQueryTerm(event.target.value)} value={queryTerm} />
      </Header>
      {loading ? (
        <Loader />
      ) : (
        movies && (
          <Card.Container>
            {movies.map((movie) => {
              return (
                <Card key={movie.id}>
                  <Card.Image src={movie.medium_cover_image} />
                  <Card.Content>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Rating value={movie.rating / 2} precision={0.1} style={{ color: "yellow" }} />
                    <Card.GenreContainer>
                      {movie.genres.map((genre) => {
                        return <Card.Genre key={`${movie.id}-${genre}`}>{genre}</Card.Genre>;
                      })}
                    </Card.GenreContainer>
                    <Card.Summary>{movie.summary}</Card.Summary>
                    <Card.DetailsButton onClick={() => modalDispatch({ type: ACTIONS.SHOW, movie: movie })}>See Details</Card.DetailsButton>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Container>
        )
      )}
      {error && <h1>Error occurs</h1>}
    </>
  );
};

export default App;
