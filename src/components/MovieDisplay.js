function MovieDisplay({movie}) {

    //if the movie exists, we want to display this
    const loaded = () => {
    return(
        //populate the page with jsx using props targeting items within the OMDb API object retrieved
        <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
        </>
    )};
    //if the movie doesnt exist, we want to display this
    const loading = () => {
        return <h1>No Movie to Display</h1>;
    };
    //ternary operator that will run loaded if movie === true and loading if movie === false
    return movie ? loaded() : loading();
};

export default MovieDisplay;