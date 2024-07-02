
import microsoft from '../images/microsoft.png'
import Me from './image'
const Aboutdata = () => {
    return (
        <>
            <div className="flex mx-5 mt-8 gap-5 md:flex-wrap" id="about">
                <div className='w-1/2 h-lvh bg-black text-white p-5 ' style={{overflow:"scroll"}} id="data">
                    <h1 className='font-bold underline'>ABOUT ME</h1>
                    <h3 className='font-bold'>my story</h3>
                    <p>
                        Hi I am Simon njoroge, a passionate full stack web developer in kenya. I'm passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean human code matters to me.
                    </p>
                    <br></br>
                    <p>
                        I believe in defining myself not by my past work, but by the work I aspire to accomplish.
                        I value continuous learning, self-challenge, and meaningful pursuits.
                        Fueled by high energy and boundless enthusiasm, I am easily inspired and always eager to follow my passions.
                        My diverse interests, hobbies, and areas of study fuel my passion for creativity and innovation. I am a fast learner, capable of acquiring new skills and managing multiple projects with ease.
                        I strive to develop expertise in several areas throughout my life and career.
                    </p>
                    <br/>
                    <h3 className='font-bold underline'>Leadership</h3>
                    <br/>
                    <p>
                        I have served in various areas such as the presidents/ president-elect of rotaract club of Kirinyaga University
                        , the Kirinyaga university christian union.
                    </p>
                    <br/>
                    <h4 className='font-bold underline'>Skills aquired as a leader</h4>
                    <ol style={{listStyleType:"Disc"}} className='ml-10'>
                        <li>Influence and Impact</li>
                        <li>Personal Growth</li>
                        <li>Building and Empowering Teams:</li>
                        <li>Decision-Making:</li>
                        <li>Networking and Relationship Building</li>
                        <li>Setting Vision and Direction:</li>
                        <li>Mentoring and Development</li>
                    </ol>
                    <br/>
                    <h1 className='font-bold underline'>me in 5 years</h1>
                    <br/>
                    <p>
                        Currently immersed in web development, diving deep into typescript,drizzle-orm,hono and React js. It's like venturing into a whole new realm, and I must say, the journey has been incredibly exhilarating.
                        Now, let's talk about dreams. In five years, I envision myself as the go-to expert in web development, leading a stellar team of developers at <img src={microsoft} alt="" className='inline'/>microsoft.
                        Yet, it's not just about career advancement; I have grander aspirations.
                        My goal is to cultivate a vibrant community within the tech sphere, where both newcomers and seasoned professionals alike feel empowered to achieve anything. Because, truth be told, tech is inclusive, and I'm determined to demonstrate its accessibil
                    </p>
                </div>
                <div className='w-1/2'>
                    <Me />
                </div>
            </div>

        </>
    )
}
export default Aboutdata