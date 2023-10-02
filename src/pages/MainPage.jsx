import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Hero from '../components/Hero'
import { getGenres, getMovies, setLoading } from '../redux/actions/actions'
import ListMovies from '../components/ListMovies'




const MainPage = () => {
  const dispatch = useDispatch()
  const state = useSelector((store)=>store.MovieReducer)
 
  useEffect(()=>{
   
    // loading'i true yapar
    dispatch(setLoading(true))
  
    // popular film verisini çektik thunk ile store aktardık
    dispatch(getMovies())

    // kategori verisini çek ve store'a aktar
    dispatch(getGenres())
    
    
},[])
  
return (
    <div>
      <Hero/>
      {/* Herbir kategori için o kategoriye ait 
      filmleri listleyecek bileşeni ekrana bastık
      */}
      {
        state.genres.map((genre)=> 
        <ListMovies key={genre.id} genre={genre}/>
        
        )
      }
    </div>
  )
}

export default MainPage;
