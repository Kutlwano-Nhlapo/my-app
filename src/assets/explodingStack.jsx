import React, { useState, useEffect } from 'react';
import './ExplodingStack.css';

const projects = [
  { id: 1, title: 'Ward System', desc: '.NET MVC', r: '-5deg', url: 'https://soit-iis.mandela.ac.za/grp-03-14', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60' },
  { id: 2, title: 'Scripts', desc: 'Integration', r: '3deg', url: '/NoPage.html', img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=500&q=60' },
  { id: 3, title: 'Clothing App', desc: 'Mobile', r: '-2deg', url: './NoPage.html', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=500&q=60' },
  { id: 4, title: '3D Portfolio', desc: 'Blender', r: '6deg', url: './NoPage.html', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=60' },
];

const ExplodingStack = () => {
  const [isOpen, setIsOpen] = useState(false);

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
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  click here to visit the site
                </a>
                <p>{project.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExplodingStack;