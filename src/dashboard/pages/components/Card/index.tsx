import React from 'react';
// import { Link } from 'react-router-dom';
import './style.css';

interface Category {
  title: string;
  synopsis: string;
  intro: string;
  image: string;
  url?: string;
  category?: string;
}

interface CardProps {
  cat: Category;
}

export const Card: React.FC<CardProps> = ({ cat }) => {
  const { title, intro, image, synopsis, url } = cat;
  return (
    // <Link to={`${url?.toLocaleLowerCase()}`}>
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-synopsis">{synopsis}</p>
        <p className="card-intro">{intro}</p>
      </div>
    </div>
    // </Link>
  );
};
