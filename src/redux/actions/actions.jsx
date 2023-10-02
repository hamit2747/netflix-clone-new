import axios from "axios";
import { options } from "../../constants/constants";
import { ActionTypes } from "../../constants/actionTypes";

//bütün atılan isteklerin başına eklenir 
axios.defaults.baseURL ='https://api.themoviedb.org/3'

// ! senkron(normal) Aksiyon
//aksiyon objesi oluşturan bir fonksiyon 
export const setLoading = (payload)=> ({
    type:ActionTypes.SET_LOADING,
    payload
})


//hem verileri çeksin hem de reducer'a aktarsın

// ! asenkron(thunk) Aksiyon
export const getMovies = () => {
    return async function (dispatch) {
      // veri çekme işlemleri
      const res = await axios.get(
        '/movie/popular?language=en',options
      );
  
      // gelen veriyi reducer'a aktarma
      dispatch({
        type: ActionTypes.SET_MOVIES,
        payload: res.data,
      });
    };
  };
  

//thunk fonksiyon kısa yazımı

// export const kisaYazim = ()=> async(dispatch)=>{

// }

export const getGenres = ()=>(dispatch)=>{
  //kategori verilerini çek
  axios.get(
  '/genre/movie/list?language=en',options
  )
  //reducer'a aktar
  .then((res)=>dispatch({
    type:ActionTypes.SET_GENRES,
    payload:res.data.genres,
  }))
  .catch((err)=>console.log(err))

}