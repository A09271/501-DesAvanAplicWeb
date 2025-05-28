import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <Link to="/class1" className="home-link">class1</Link>
      <Link to="/class2" className="home-link">class2</Link>
      <Link to="/class3" className="home-link">class3</Link>
      <Link to="/class4" className="home-link">class4</Link>
      <Link to="/class5" className="home-link">class5</Link>
      <Link to="/class6" className="home-link">class6</Link>
      <Link to="/class7" className="home-link">class7</Link>
    </>
  );
};

export default Home;
