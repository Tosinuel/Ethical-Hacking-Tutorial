import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron bg-primary text-white rounded">
        <h1 className="display-4">Ethical Hacking Tutorials</h1>
        <p className="lead">Master ethical hacking from beginner to professional level</p>
        <hr className="my-4" />
        <p>Learn practical skills in cybersecurity, penetration testing, and defensive techniques.</p>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Beginner Level</h5>
              <p className="card-text">Start your journey with fundamental concepts and basic tools.</p>
              <Link to="/beginner" className="btn btn-primary">Start Learning</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Intermediate Level</h5>
              <p className="card-text">Dive deeper into vulnerability assessment and advanced techniques.</p>
              <Link to="/intermediate" className="btn btn-warning">Continue Learning</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Advanced Level</h5>
              <p className="card-text">Master professional-level skills in exploit development and red teaming.</p>
              <Link to="/advanced" className="btn btn-danger">Advanced Topics</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
