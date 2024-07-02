import Library from '../images/library.png'
import todo from '../images/todo.png'
import countries from "../images/restcountry.png"
import remote from '../images/remote.png'
import blog from '../images/blog.png'
import job from '../images/joblisting.png'
import faqs from '../images/faqs.png'
import contactus from '../images/contactus.png'
import socialmedia from '../images/socialmedia.png'
import advice from '../images/advice.png'
interface Tproject {
    title: string,
    img: string,
    desc: string,
    link: string
}
const Projects = () => {
    const data: Tproject[] = [{
        title: "Library Full Stack Project",
        img: Library,
        desc: "is a fulll stack library project where you can search ,add,edit and delete a book",
        link: "https://library-react-project-six.vercel.app/"
    },
    {
        title: "todo Project",
        img: todo,
        desc: "is a todo project where you can add a todo update and delete a todo. you can also switch from dark and light mode ",
        link: "https://todo-app-react-nu-one.vercel.app/"
    },
    {
        title: "countries Project",
        img: countries,
        desc: "is a country projects thats contains all countries in the word with their flag. you can search ac country by its name ",
        link: "https://countries-react-project-eight.vercel.app/"
    },
    {
        title: "Snap Project",
        img: remote,
        desc: "is a a remote work project wher you can perfom various activities in the navbar ",
        link: "https://snap-react-project-2.vercel.app/"
    },
    {
        title: "blog_landing Project",
        img: blog,
        desc: "is a project where you can perform many tasks in the navbar ",
        link: "https://blogr-landing-project-1.vercel.app/"
    }
    ]
    const htmldata:Tproject[]=[
        {
            title: "job listing Project",
            img: job,
            desc: "is a api project developed using html,js and data.json file",
            link: "https://simon-njoroge.github.io/staticjoblisting/"
        },
        {
            title: "faqs Project",
            img: faqs,
            desc: "is a project that contains frequently most asked questions",
            link: "https://simon-njoroge.github.io/faqs_project/"
        },
        {
            title: "Contact form Project",
            img: contactus,
            desc: "is a contact form developed using html and javascript",
            link: "https://simon-njoroge.github.io/contact_us_form/"
        },
        {
            title: "social media dashboard Project",
            img: socialmedia,
            desc: "is an api project that returns you followers, views and likes",
            link: "https://simon-njoroge.github.io/socialmediaapiproject/"
        },
        {
            title: "advice generator Project",
            img: advice,
            desc: "is an advice generator projects that provides an advice for you ",
            link: "https://simon-njoroge.github.io/advice_generator/"
        }
    ]
    
    return (
        
        <>
        <div className='mx-5 mb-5'>
            <h1 className='mb-2 font-bold text-center my-3 text-2xl'>Frontend react Project</h1>
            <div className='grid grid-cols-3 gap-5 ' id="projects">
                
                {
                    data && data.map((data: Tproject, index: any) => (

                        <div key={index} className='border-2 border-black rounded p-5 cursor-pointer hover:bg-gray-900 text-white' id="pdata">
                            <img src={data.img} alt="project" className='h-1/2 w-full' />
                            <h1 className='font-bold my-3'>{data.title}</h1>
                            <p className='mb-3'>{data.desc}</p>
                            <button className='bg-black text-white p-1 rounded px-10  hover:bg-white hover:text-black'><a href={data.link} target="_blank">View project</a></button>
                        </div>
                    ))
                }
            </div>
            <h1 className='mb-2 font-bold text-center my-3 text-2xl'>Frontend html/js Project</h1>
            <div className='grid grid-cols-3 gap-5' id="projects">
                
                {
                    htmldata && htmldata.map((data: Tproject, index: any) => (

                        <div key={index} className='border-2 border-black rounded p-5 cursor-pointer  hover:bg-gray-900 text-white' id="pdata">
                            <img src={data.img} alt="project"  className='h-1/2 w-full'/>
                            <h1 className='font-bold my-3'>{data.title}</h1>
                            <p className='mb-3'>{data.desc}</p>
                            <button className='bg-black text-white p-1 rounded text-center hover:bg-white hover:text-black'><a href={data.link} target="_blank">View project</a></button>
                        </div>
                    ))
                }
            </div>
            </div>
        </>
    )
}
export default Projects