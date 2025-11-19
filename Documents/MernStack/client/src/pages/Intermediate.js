import React from 'react';
import tutorials from '../data/tutorials';

const Intermediate = () => {
  const intermediateTutorials = tutorials.filter(t => t.level === 'intermediate');

  return (
    <div className="container mt-4">
      <h1>Intermediate Level Tutorials</h1>
      <p>Build on your knowledge with more advanced techniques.</p>
      <div className="row">
        {intermediateTutorials.map(tutorial => (
          <div key={tutorial.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={tutorial.image} className="card-img-top" alt={tutorial.title} />
              <div className="card-body">
                <h5 className="card-title">{tutorial.title}</h5>
                <p className="card-text">{tutorial.description}</p>
                <button className="btn btn-primary" onClick={() => {
                  alert(tutorial.title + '\n\n' + tutorial.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...');
                }}>Read Tutorial</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intermediate;
