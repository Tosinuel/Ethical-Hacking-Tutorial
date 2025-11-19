import React from 'react';
import { Link } from 'react-router-dom';

const Advanced = ({ tutorials }) => {
  const advancedTutorials = tutorials.filter(t => t.level === 'advanced');

  return (
    <div className="container mt-4">
      <h1>Advanced Level Tutorials</h1>
      <p>Master advanced techniques and professional-level skills.</p>
      <div className="row">
        {advancedTutorials.map(tutorial => (
          <div key={tutorial.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={tutorial.image} className="card-img-top" alt={tutorial.title} />
              <div className="card-body">
                <h5 className="card-title">{tutorial.title}</h5>
                <p className="card-text">{tutorial.description}</p>
                <Link to={`/tutorial/${tutorial.id}`} className="btn btn-primary">Read Tutorial</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advanced;
