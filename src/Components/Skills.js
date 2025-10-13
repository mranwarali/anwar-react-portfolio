import React from 'react';
import { FaReact, FaGitAlt, FaGithub, FaFigma, FaBootstrap, FaPython, FaHtml5 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiCss3, SiDjango, SiTailwindcss, SiMui, SiMysql, SiRedux } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    Python: <FaPython />,
    Django: <SiDjango />,
    React: <FaReact />,
    Redux: <SiRedux />,
    Javascript: <DiJavascript1 />,
    HTML: <FaHtml5 />,
    CSS: <SiCss3 />,
    TailwindCSS: <SiTailwindcss />,
    MaterialUI: <SiMui />,
    MySQL: <SiMysql />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,

  }

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
