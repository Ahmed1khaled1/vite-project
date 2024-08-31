

import './App.css'
import {BsFillMoonStarsFill} from'react-icons/bs'
import { AiFillFacebook ,AiFillLinkedin ,AiFillTwitterCircle }from 'react-icons/ai';
import logo from "/de.png";
import design from "/design.png"
import code from "/code.png";
import consulting from "/consulting.png";
import web1 from "/web1.png";
import web2 from "/web2.png";
import web3 from "/web3.png";
import web4 from "/web4.png";
import web5 from "/web5.png";
import web6 from "/web6.png";
import { useState } from 'react';

function App() {
const[darkMood,setDarkMood]=useState(false);

  return (
    <div className={darkMood?"dark":""} >
      <main className='bg-white -mb-10 pb-10 px-10 md:px-20 lg:px-40 
      dark:bg-gray-800'>
      <section className="min-h-screen">
        <nav className='py-10 flex justify-between'>
          <h1 className='text-xl font-medium  dark:text-white'>Developed by</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill onClick={()=>{setDarkMood(!darkMood)}} className='text-2xl cursor-pointer'/>
            </li>
            <li><a href='' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white
            rounded-md px-4 py-2 ml-8'>Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-3xl py-2 text-teal-500 font-medium md:text-6xl'>Ahmed Khaled</h2>
          <h3 className='text-2xl font-medium py-2 md:text-3xl  dark:text-white'>
            Front-end Developer</h3>
          <p className='leading-8 text-gray-800 dark:text-white'>
            Freelancer providing services for 
            programing needs. join me down 
            below and let's get crac
          </p>
        </div>
        <div className='flex gap-10 text-gray-600 text-5xl justify-center'>
          <AiFillTwitterCircle className='cursor-pointer'/>
          <AiFillLinkedin className='cursor-pointer'/>
          <AiFillFacebook className='cursor-pointer'/>
        </div>
        <div className=''>
          <img src={logo} className='bg-gradient-to-b 
          from-teal-500 my-10 rounded-3xl mx-auto 
          h-80 w-80 '/>
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl font-medium py-1  dark:text-white'>Services I Offer</h3>
          <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
            since the begaining of my journey as 
            a freelance developer , I've done remote work for
          <span className='text-teal-500'> agencies </span>
          consulted for <span className='text-teal-500'> starups </span>
          and collabrated with talented pepole to create digital products 
          for both business and consumer use.
          </p>
          <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'  >
            I offer from a wide range of services, including 
            programing 
          </p>
        </div>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 m-10'>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-400'>
          <img src={design} className='mx-auto w-20' />
          <h3 className='text-lg font-medium pt-8 pb-2'>Beutiful Designs</h3>
          <p>Creating elegant designs suited for your design theory</p>
          <h4 className='py-4 text-teal-600'> Design tools i use</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Illustrat</p>
          <p className='text-gray-800 py-1'>figma</p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-400'>
          <img src={code} className='mx-auto w-20' />
          <h3 className='text-lg font-medium pt-8 pb-2'>Beutiful Designs</h3>
          <p>Creating elegant designs suited for your design theory</p>
          <h4 className='py-4 text-teal-600'> Design tools i use</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Illustrat</p>
          <p className='text-gray-800 py-1'>figma</p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-400'>
          <img src={consulting} className='mx-auto w-20' />
          <h3 className='text-lg font-medium pt-8 pb-2'>Beutiful Designs</h3>
          <p>Creating elegant designs suited for your design theory</p>
          <h4 className='py-4 text-teal-600'> Design tools i use</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Illustrat</p>
          <p className='text-gray-800 py-1'>figma</p>
        </div>
        </div>
        
      </section>

      <section>
        <div>
          <h3  className='text-3xl font-medium  dark:text-white'>Portofolio</h3>
          <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
            since the begaining of my journey as 
            a freelance developer , I've done remote work for
          <span className='text-teal-500'> agencies </span>
          consulted for <span className='text-teal-500'> starups </span>
          and collabrated with talented pepole to create digital products 
          for both business and consumer use.
          </p>
          <p className='text-md py-2 leading-8 text-gray-800'  >
            I offer from a wide range of services, including 
            programing 
          </p>
        </div>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 m-10'>
        <div className='rounde-lg object-cover'>
          <img src={web1} className='rounded-xl w-80 h-60'/>
        </div>
        <div >
          <img src={web2} className='rounded-xl w-80 h-60'/> 
        </div>
        <div > 
          <img src={web3} className='rounded-xl w-80 h-60'/>
        </div>
        <div >
          <img src={web4} className='rounded-xl w-80 h-60'/>
        </div>
        <div >
          <img src={web5} className='rounded-xl w-80 h-60'/>
        </div>
        <div >
          <img src={web6} className='rounded-xl w-80 h-60'/>
        </div>
        </div>
        
        
      </section>
      </main>
    </div>
  )
}

export default App
//find 20:09
