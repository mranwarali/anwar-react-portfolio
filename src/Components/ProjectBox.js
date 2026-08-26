import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    FlodaDesc : "This is a flowers e-commerce website. It is a simple website where you can buy flowers online. It is a responsive website.",
    FlodaGithub : "https://github.com/mranwarali/Flowers-E-commerce-Website-",
    FlodaWebsite : "https://github.com/mranwarali",

    GreenOrganicDesc : "This is a vegitables and fruits e-commerce website. It is a simple website where you can buy vegitables and fruits online. It is a responsive website.",
    GreenOrganicGithub : "https://github.com/mranwarali/organic_store",
    GreenOrganicWebsite : "https://github.com/mranwarali",

    PortfolioDesc : "A portfolio website is a website that displays your work, skills, and experience. It's a digital resume or gallery that helps you showcase your work to potential clients and employers.",
    PortfolioGithub : "https://github.com/mranwarali/react_portfolio",
    PortfolioWebsite : "https://github.com/mranwarali",

    TodoDesc : "A to-do list is a list of tasks that need to be completed, organized by priority. You can use a to-do list to help you stay organized, avoid forgetting important tasks, and get work done efficiently.",
    TodoGithub : "https://github.com/mranwarali/todo",
    TodoWebsite : "https://github.com/mranwarali",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noopener noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank' rel="noopener noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
