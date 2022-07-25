import React, { Component } from 'react'
import { movies } from './getMovies'
import axios from 'axios'


export default class extends Component {
      constructor(){
        super();
        console.log("constructor is called")
        this.state = {
          hover:"",
          parr: [1],
          currPage:1,
          movies:[],
        }
      }
    handleEnter=(id)=>{ 
      this.setState({
        hover:id
      })
    };
    handleLeave=()=>{
      this.setState({
        hover:''
      })
    };
    async componentDidMount (){
    // console.log(" componentDidMount is called")
    let ans = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d71eb886cd866b1272a7a0858a5f65f2&language=en-US&page=${this.state.currPage}`);
    // console.log(ans.data);
    this.setState({
      movies: [...ans.data.results]
    })

   }
  render() {
    console.log("render is called")
    let movie = movies.results;
    return (
     <>
     {

       this.state.movies.length == 0?(
        <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
  ) : (
    <div >
        <h3 className="text-center">
          <strong>Trending </strong>
        </h3>
        <div className='movie-list'>
          
            
        { this.state.movies.map((movieObj) => (
              <div className="card movie-card"
              onMouseEnter={()=> this.handleEnter(movieObj.id)}
              onMouseLeave={this.handleLeave}
               >
              <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} 
              className="card-img-top banner-img"
               alt="..." 
               style={{height:"40vh"}}
               />
              {/* <div className="card-body"> */}
                <h5 className="card-title  movies-title">{movieObj.original_title}</h5>
                {/* <p className="card-text movie-text">{movieObj.overview}</p> */}
                <div className='button-wrapper'>
                  {
                    this.state.hover==movieObj.id && 
                      <a href="#" className="btn btn-primary movie-button">
                        Add to favourites
                        </a>
                      }
                
              </div>
              </div>
            
            ))
          }
          </div>
          <div className="pagination">
          <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
   
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</div>
        </div>

    


   )
     }
     </>
    )
  }
}
