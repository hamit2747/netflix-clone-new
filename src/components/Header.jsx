import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="p-2 ps-3 d-flex justify-content-between align-items-center">
      <Link to={'/'}>
      <img   width={120} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
      </Link> 
      <div className="d-flex p-1 gap-3 ">
     <select className=" bg-transparent p-1 text-white " >
      <option className=" text-black" value="">Türkçe</option>
      <option className=" text-black"  value="">English</option>
     </select>
      <button className="btn btn-danger">Oturum Aç</button>
      
      </div>
      
    </header>
  )
}

export default Header
