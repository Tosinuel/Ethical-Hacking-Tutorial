import React from 'react';
import { useParams } from 'react-router-dom';

const TutorialPage = ({ tutorials }) => {
  const { id } = useParams();
  const tutorial = tutorials.find(t => t.id === parseInt(id));

  if (!tutorial) {
    return <div className="container mt-4"><h2>Tutorial not found</h2></div>;
  }

  return (
    <div className="container mt-4">
      <h1>{tutorial.title}</h1>
      <img src={tutorial.image} alt={tutorial.title} className="img-fluid mb-3" />
      <div dangerouslySetInnerHTML={{ __html: tutorial.content }} />
    </div>
  );
};

export default TutorialPage;
