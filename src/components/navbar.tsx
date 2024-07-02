import { House } from 'lucide-react';
import { Github } from 'lucide-react';
import { FolderOpen } from 'lucide-react';
import { File } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import { User } from 'lucide-react';
import { Link } from "react-router-dom";
import me from '../images/me 1.jpg'
const Navbar=()=>{
  const handleClick=()=>{
    document.body.classList.toggle("navbar1")
  }
    return(
        <>
          <div className="navbar bg-base-100 ">
  <div className="flex-1">
  <div tabIndex={0} role="button" className="btn m-1 " onClick={handleClick}> <button className="btn btn-square btn-ghost no-underline" >
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button></div>
    <a className="btn btn-ghost text-xl">My Portfolio</a>
  </div>
  <ul className="menu menu-horizontal bg-base-200 text-center mr-14 font-bold text-sm" id="navbar">
  <li><Link to="/"><House />Home</Link></li>
  <li><Link to="/about">< User />About Me</Link></li>
  <li><Link to="/projects">< FolderOpen />Projects</Link></li>
  <li><Link to="/git"><Github/>GitHub</Link></li>
  <li><Link to="/resume"><File />Resume</Link></li>
  <li><Link to="/contact">< PhoneCall />Contact</Link></li>
</ul>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={me} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </>
    )
}
export default Navbar