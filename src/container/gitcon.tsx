import Navbar from "../components/navbar";
import {Github} from "lucide-react"
import Footer from "../components/footer";
const Gitcon =()=>{
    return(
        <>
        <div className=" bg-black ">
        <Navbar/>
        <div className="text-center mb-5">
            <a href="https://github.com/Simon-Njoroge" className=" text-red-600  hover:text-white" target="_blank">
           <p className=""><Github className="text-center"/>View My Git Hub</p>
           </a>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Gitcon