import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Header from "./components/Header"
import MovieDetail from "./pages/MovieDetail"




function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element= {<MainPage/>} />
{/* id değişken olduğu için /id: dedğimiz zaman değişken olur  */}
      <Route path='/movie/:id' element={<MovieDetail/>} />
     </Routes>

     </BrowserRouter>
    </>
  )
}

export default App
