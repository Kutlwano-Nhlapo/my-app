import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExplodingStack.css';

const projects = [
  { 
    id: 1, 
    title: 'Ward System', 
    desc: 'ASP.NET Core MVC',
    d: 'SQL Server',
    d2: 'Entity Framework',
    style: 'JavaScript', 
    r: '-5deg', 
    url: 'https://soit-iis.mandela.ac.za/grp-03-14', 
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60',
    external: true
  },
  { 
    id: 2, 
    title: 'Scripts', 
    desc: 'Integration',
    d: 'Python',
    d2: 'Automation',
    style: 'API', 
    r: '3deg', 
    url: '/not-found', 
    img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=500&q=60',
    external: false
  },
  { 
    id: 3, 
    title: 'Clothing App', 
    desc: 'Mobile',
    d: 'React Native',
    d2: 'Firebase',
    style: 'UI/UX', 
    r: '-2deg', 
    url: '/not-found', 
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=500&q=60',
    external: false
  },
  { 
    id: 4, 
    title: '3D Portfolio', 
    desc: 'Blender',
    d: 'Three.js',
    d2: 'WebGL',
    style: '3D Modeling', 
    r: '6deg', 
    url: '/not-found', 
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=60',
    external: false
  },
];

const ExplodingStack = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const columns = 4;
  const gapX = 115; 
  const gapY = 120;

  const getPosition = (index) => {
    const colIndex = index % columns;
    const rowIndex = Math.floor(index / columns);
    const totalRows = Math.ceil(projects.length / columns);
    const xOffset = (colIndex - (columns - 1) / 2) * gapX;
    const yOffset = (rowIndex - (totalRows - 1) / 2) * gapY;
    return { x: `${xOffset}%`, y: `${yOffset}%` };
  };

  const handleProjectClick = (e, project) => {
    e.stopPropagation();
    if (project.external) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    } else {
      navigate('/not-found');
    }
  };

  return (
    <div className={`stack-container ${isOpen ? 'open' : ''}`}>
      <div 
        className="stack-area" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="head"><b>My Projects</b></p>
        <div className="card cover">
          <h3>My Portfolio</h3>
          <p>Click to view</p>
        </div>
        {projects.map((project, index) => {
          const pos = getPosition(index);
          return (
            <div 
              key={project.id} 
              className="card project-card"
              style={{ 
                '--x': pos.x, 
                '--y': pos.y, 
                '--r': project.r 
              }}
            >
              <img src={project.img} alt={project.title} />
              <div className="card-content">
                <h4>{project.title}</h4>
                <button 
                  className="project-link"
                  onClick={(e) => handleProjectClick(e, project)}
                >
                  Click here to visit the site
                </button>
                <div className='stack-row'>
                  <span>{project.desc}</span>
                  <span>{project.d}</span>
                  <span>{project.d2}</span>
                  <span>{project.style}</span>                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExplodingStack;