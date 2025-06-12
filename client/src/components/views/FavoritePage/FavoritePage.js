import React, { useEffect, useState } from 'react'
import './favorite.css';
import axios from 'axios';
import { Button , Popover } from 'antd';

const IMAGE_URL = 'https://image.tmdb.org/t/p/';

function FavoritePage() {

     const variables = {
    userFrom: localStorage.getItem('userId')
    }
    const [FavoritedMovies, setFavoritedMovies] = useState([])

    useEffect(() => {
      fetchFavoritedMovies();  
      })


    const fetchFavoritedMovies = () => {
    
          axios.post('/api/favorite/getFavoritedMovie', variables).then(response => {
        if (response.data.success) {
          setFavoritedMovies(response.data.favorites);
         
        } else {
          alert('Failed to get favorite Video Information');
        }
          
      })
    
    }

const onClickRemove = (movieId) => {  
    const variables = {
        userFrom: localStorage.getItem('userId'),
        movieId: movieId
    }
   
   
    axios.post("/api/favorite/removeFromFavorite", variables).then((response) => {
        if (response.data.success) {
          fetchFavoritedMovies();
         
        } else {
          alert("Failed to remove from favorites");
        }
      });

}  

const renderTableBody = FavoritedMovies.map((movie, index) => {


const content = (
    <div>
        {movie.moviePost ?
        <img src = {`${IMAGE_URL}w500${movie.moviePost}`} alt = {movie.movieTitle}/>
    : "no image"}
    </div>
)
return <tr>

    <Popover content = {content} title = {movie.movieTitle} key = {index}>
            <td>{movie.movieTitle}</td>
    </Popover>
    
    <td>{movie.movieRunTime} Mins</td>
    <td><Button onClick={()=>onClickRemove(movie.movieId)}>Remove from Favorites</Button></td>
    




</tr>




});


  return (
    <div style = {{width: "85%", margin: "1rem auto"}}>
        <h2>Favorite Movies by Me</h2>
        <hr/>
        <table>
            <thead>
                <tr>
                    <th>Movie Title</th>
                    <th>Movie Runtime</th>

                    <th>Remove from Favorites</th>
                </tr>
            </thead>

            <tbody>
                    {renderTableBody}
            </tbody>
        </table>
           
        






    </div>
  )
}

export default FavoritePage