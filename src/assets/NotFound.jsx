import React, { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    // Generate random stars
    const starsContainer = document.getElementById('stars');
    if (starsContainer) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
      }
    }
  }, []);

  return (
    <>
      <style>{`
        .notfound-wrapper {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: linear-gradient(135deg, #a666ea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .notfound-container {
          text-align: center;
          color: white;
          z-index: 1;
          padding: 2rem;
          max-width: 600px;
        }

        .error-code {
          font-size: 10rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 1rem;
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .glitch {
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: '404';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          opacity: 0.8;
        }

        .glitch::before {
          animation: glitch-1 2s infinite;
          color: #ff00de;
          z-index: -1;
        }

        .glitch::after {
          animation: glitch-2 2s infinite;
          color: #00fff2;
          z-index: -2;
        }

        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(2px, -2px); }
          66% { transform: translate(-2px, 2px); }
        }

        .notfound-container h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .notfound-container p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2rem;
          border: 2px solid white;
          background: transparent;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn:hover {
          background: white;
          color: #667eea;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .btn-primary {
          background: white;
          color: #667eea;
        }

        .btn-primary:hover {
          background: transparent;
          color: white;
        }

        .astronaut {
          font-size: 4rem;
          animation: spin 20s linear infinite;
          display: inline-block;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .error-code {
            font-size: 6rem;
          }
          .notfound-container h1 {
            font-size: 1.8rem;
          }
          .notfound-container p {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="notfound-wrapper">
        <div className="stars" id="stars"></div>
        
        <div className="notfound-container">        
          <div className="error-code glitch">404</div>
          <h1> We Have a Problem</h1>
          <p>The page you're looking for has drifted off into space. It might have been moved, deleted, or never existed in the first place.</p>
         
        </div>
      </div>
    </>
  );
};

export default NotFound;