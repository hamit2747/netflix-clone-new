import { useSelector } from "react-redux"
import { baseImgeUrl } from "../constants/constants"
import { Link } from "react-router-dom"


const Hero = () => {
    //abone olma işlemi(store'da tutulan verilere erişme)
    const state = useSelector((store)=>store.MovieReducer)

  //dizinin uzunluğuna göre rastgele sayı bulma
  const i = Math.floor(Math.random() *state.popularMovies.length)
//diziden rastgele bir film alma
  const film = state.popularMovies[i]
  

  return (
  <div className="row p-4">
    {/* yüklenme devam ediyorsa aşağıdaki kodu çalıştır */}
    {state.isLoading && <p>Loading...</p>}
    
    {/* yüklenme bittiyse aşğıdaki kodu çalıştır */}
    {!state.isLoading &&(
      <>
    <div className="col-md-6 gap-3 mb-3 d-flex flex-column  justify-content-center">
    <h1>{film.title}</h1>
    <p className="lead">{film.overview}</p>
    <p className="text-warning fw-bold">IMDB: {film.vote_average}</p>
    <div className="d-flex gap-3 justify-content-center">
      <Link to={`/movie/${film.id}`}><button className="btn btn-danger" >Film İzle</button></Link>
      <button className="btn btn-info">Listeye Ekle</button>
    </div>
    </div>

    <div className="col-md-6">
     <img className="img-fluid rounded shadow d-flex align-items-center" src={`${baseImgeUrl}${film.backdrop_path
}`}/>
 
    </div>
    </>
    )}
   
  </div>
  )
}

export default Hero;
