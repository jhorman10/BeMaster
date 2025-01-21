import React from 'react';
import {
  Comics,
  ComicsItem,
  Result,
  Stories,
  StoriesItem,
  URL,
} from '../../interface';
import './style.css';

interface CardProps {
  cat: Result;
}

export const ContentDetails: React.FC<CardProps> = ({ cat }) => {
  const {
    id,
    name,
    description,
    modified,
    resourceURI,
    urls,
    thumbnail,
    comics,
    stories,
    events,
    series,
  } = cat;

  // Obtener la URL de la imagen desde el campo `thumbnail`
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

  // Función para renderizar los items de los comics
  const renderComicsItems = (comics: Comics) => {
    return comics.items.map((comic: ComicsItem) => (
      <p key={comic.resourceURI}>
        <a href={comic.resourceURI} target="_blank" rel="noopener noreferrer">
          {comic.name}
        </a>
      </p>
    ));
  };

  // Función para renderizar los items de las historias
  const renderStoriesItems = (stories: Stories) => {
    return stories.items.map((story: StoriesItem) => (
      <p key={story.resourceURI}>
        <a href={story.resourceURI} target="_blank" rel="noopener noreferrer">
          {story.name} ({story.type})
        </a>
      </p>
    ));
  };

  // Función para renderizar las URLs
  const renderUrls = (urls: URL[]) => {
    return urls.map((url, index) => (
      <a
        key={index}
        href={url.url}
        target="_blank"
        rel="noopener noreferrer"
        className="url-item"
      >
        {url.url}
      </a>
    ));
  };

  return (
    <div className="card-detail" id={id}>
      {/* Imagen del thumbnail */}
      <img src={imageUrl} alt={name} className="card-detail-image" />

      <div className="card-detail-content">
        {/* Título del contenido */}
        <h2 className="card-detail-title">{name}</h2>

        {/* Descripción */}
        <p className="card-detail-synopsis">
          {description ? description : 'No description available.'}
        </p>

        {/* Fecha de modificación */}
        <p className="card-detail-intro">
          <strong>Modified:</strong> {modified}
        </p>

        {/* Enlace de recursos */}
        <p className="card-detail-resource">
          <strong>Resource URI:</strong>{' '}
          <a href={resourceURI} target="_blank" rel="noopener noreferrer">
            {resourceURI}
          </a>
        </p>

        {/* URLs */}
        <div className="urls-list">{renderUrls(urls)}</div>

        {/* Comics */}
        {comics.available !== '0' && (
          <div className="comics-section">
            <h3>Comics:</h3>
            <p>{comics.available} available</p>
            {renderComicsItems(comics)}
          </div>
        )}

        {/* Stories */}
        {stories.available !== '0' && (
          <div className="stories-section">
            <h3>Stories:</h3>
            <p>{stories.available} available</p>
            {renderStoriesItems(stories)}
          </div>
        )}

        {/* Events */}
        {events.available !== '0' && (
          <div className="events-section">
            <h3>Events:</h3>
            <p>{events.available} available</p>
            {/* Puedes agregar más detalles si es necesario */}
          </div>
        )}

        {/* Series */}
        {series.available !== '0' && (
          <div className="series-section">
            <h3>Series:</h3>
            <p>{series.available} available</p>
            {/* Puedes agregar más detalles si es necesario */}
          </div>
        )}
      </div>
    </div>
  );
};
