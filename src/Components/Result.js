import React from 'react'

function Result({result, openPopup}) {
    return (
        <div className="result">
            <img src={result.Poster} alt='Movie Poster' onClick={() => openPopup(result.imdbID)}/>
            <h3>{result.Title}</h3>
         </div>
    )
}

export default Result
