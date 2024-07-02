import Me from './image'
import reactlogo from '../assets/react.svg'
const Homedata=()=>{
    return(
        <>
        <div className="flex justify-between mx-5 md:bg-black" id="home">
            <div className="pt-16 " id="hdata">
                <h1 className="font-serif text-6xl">I'm Web Developer
                Simon N. Mukiri</h1>
                <p>I am a student at Kirinyaga University curenty learning react</p>
                <img src={reactlogo} alt="" className='mt-5 h-1/2 '/>
            </div>
             <div className='w-1/2'>
                <Me />
                </div>
        </div>
        </>
    )
}
export default Homedata