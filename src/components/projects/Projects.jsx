import React from 'react'

import ToDo from '../../assets/todo.jpg'
import Weather from '../../assets/weather.webp'
import Chat from '../../assets/chat.png'

const Projects = () => {

  const reactData = [
    {
      id: 1,
      thumbnail: ToDo,
      name: 'ToDo list',
      github: 'https://github.com/',
      demo: 'https://fonts.google.com/'
    },
    {
      id: 2,
      thumbnail: Weather,
      name: 'Chat App',
      github: 'https://github.com/',
      demo: 'https://fonts.google.com/'
    },
    {
      id: 3,
      thumbnail: Chat,
      name: 'Weather App',
      github: 'https://github.com/',
      demo: 'https://fonts.google.com/'
    }  
]

const laravelData = [
  {
    id: 1,
    thumbnail: ToDo,
    name: 'ToDo list',
    github: 'https://github.com/',
    demo: 'https://fonts.google.com/'
  },
  {
    id: 2,
    thumbnail: Weather,
    name: 'Chat App',
    github: 'https://github.com/',
    demo: 'https://fonts.google.com/'
  },
  {
    id: 3,
    thumbnail: Chat,
    name: 'Weather App',
    github: 'https://github.com/',
    demo: 'https://fonts.google.com/'
  }
]

const otherData = [
  {
    id: 1,
    thumbnail: ToDo,
    name: 'ToDo list',
    github: 'https://github.com/',
    demo: 'https://fonts.google.com/'
  },
  {
    id: 2,
    thumbnail: Weather,
    name: 'Chat App',
    github: 'https://github.com/',
    demo: 'https://fonts.google.com/'
  },
  {
    id: 3,
    thumbnail: Chat,
    name: 'Weather App',
    github: 'https://github.com/',
    demo: 'https://fonts.google.com/'
  }
]

  return (
	<div className="projects" id='projects'>
    <div className="container">
    <h2 className='section-title'>Projects</h2>
    <div className="projects-wrap">
      
      <div className="project-row">
        <h2>React Projects</h2>
        <div className="projects-list">
          
        {
          reactData.map(({id, thumbnail, name, github, demo}) => {
            return(
              <div className="project-item">
                <div className="project-thumbnail">
                  <img src={thumbnail} alt="" />
                </div>
                <div className="project-name">{name}</div>
                <div className="project-btns">
                  <a href={github} className="btn github">Github</a>
                  <a href={demo} className="btn demo">Demo</a>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>

      
      <div className="project-row">
        <h2>Laravel Projects</h2>
        <div className="projects-list">
        {
          laravelData.map(({id, thumbnail, name, github, demo}) => {
            return(
              <div className="project-item">
                <div className="project-thumbnail">
                  <img src={thumbnail} alt="" />
                </div>
                <div className="project-name">{name}</div>
                <div className="project-btns">
                  <a href={github} className="btn github">Github</a>
                  <a href={demo} className="btn demo">Demo</a>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>

      
      <div className="project-row">
        <h2>Other Projects</h2>
        <div className="projects-list">

        {
          otherData.map(({id, thumbnail, name, github, demo}) => {
            return(
              <div className="project-item">
                <div className="project-thumbnail">
                  <img src={thumbnail} alt="" />
                </div>
                <div className="project-name">{name}</div>
                <div className="project-btns">
                  <a href={github} className="btn github">Github</a>
                  <a href={demo} className="btn demo">Demo</a>
                </div>
              </div>
            )
          })
        }

        </div>
      </div>

    </div>
    </div>
  </div>
  )
}

export default Projects