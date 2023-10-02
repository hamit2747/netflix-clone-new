import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseImgeUrl, options } from '../constants/constants'
import millify from 'millify'


const MovieDetail = () => {
  const {id} = useParams()
  const [detail,setDetails] = useState(null)
 useEffect(()=>{
  axios.get(`movie/${id}`,options)
  .then((res)=>setDetails(res.data))
 },[])

 //Kar zarar hesabı yapmak için
 const sum = detail?.revenue - detail?.budget;

 if(!detail) return (
  <div>
    <img className='loading-gif' src="https://media.tenor.com/DQyztbEmqnYAAAAC/netflix-loading.gif" alt="" />
  </div>
 )
  return (
    <div className='  mx-3 row movie-detail p-4 col-lg-6 align-items-center d-flex   '>
      <div className='col-md-6  col-lg-6 d-flex  align-items-center  '  >
        <div className=' '>
        <img className='img-fluid shadow-lg rounded' src={baseImgeUrl.concat(detail.poster_path)} />
       
        </div>
        
       
      </div>
      <div className='col-md-5 col-lg-6  d-flex  flex-column justify-content-center'>
        <h1>{detail.title}</h1>
        <p>{detail.overview}</p>
        <div className='row'>
        <div className='col-6 col-md-12'>
          <p>Cost: {millify(detail.budget)}$</p>
          <p>Revenues: {millify(detail.revenue)}$</p>
          <p>{sum>0 ? 'Profit': 'loss'}: {millify(sum)}$</p>
        </div>
        
        <div className='col-6 col-md-12'>
        <div className='d-flex gap-3'>
          Categories:
          {detail.genres.map((genre)=>(
             <p className='badge bg-primary'>{genre.name}</p>
          ))}
        </div>
        <div className='d-flex gap-3'>
       Languages:
          {detail.spoken_languages.map((language)=>(
             <p className='badge bg-danger'>{language.name}</p>
          ))}
        </div>
        <div className='d-flex gap-3'>
        Production Companies:
          {detail.production_companies.map((comp)=>(
             <p className='badge bg-success'>{comp.name}</p>
          ))}
          
        </div>
        <span className='  mt-lg-5 bg-warning rounded p-1 shadow bottom-0 end-0 mb-3 me-4 gap-lg-3' >IMDB: {detail.vote_average.toFixed(1)}</span>
        </div>

      </div>

      </div>
 
    </div>
  )
}

export default MovieDetail
