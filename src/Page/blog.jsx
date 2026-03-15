import React, { useState } from 'react';
import './blog.css';
import { articlesData } from '../data/articlesData.jsx';

const Blog = () => {
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const handleShowDetail = (articleId) => {
    setSelectedArticleId(articleId);
  };

  const handleCloseDetail = () => {
    setSelectedArticleId(null);
  };

  if (selectedArticleId !== null) {
    const article = articlesData.find((a) => a.id === selectedArticleId);
    const { content } = article;

    return (
      <section className="article-detail-view">
        <button onClick={handleCloseDetail} className="back-button">
          ← Back
        </button>
        <div className="detail-container">
          <div className="detail-img-wrap">
            <img src={article.image} alt={article.excerpt} />
          </div>
        </div>
        
        {/* Main Content Section */}
        <div className="detail-content">
          <h1 className="detail-title">{content.title}</h1>
          <hr className="detail-divider" />
          <p className="full-text">{content.fullText}</p>
          <h2 className="detail-subheading">
            {content.subheading.split(' ').map((word, i) => (
              i === 0 ? <span key={i} className="underline-word">{word} </span> : word + (i === content.subheading.split(' ').length - 1 ? '' : ' ')
            ))}
          </h2>
          <ol className="detail-list">
            {content.detailList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>

        {/* Cooking Section */}
        <div className="cooking">
          <img src={article.cookImage} alt={article.excerpt} />
          <div className="text-cook">
            <p>{content.cookingText}</p>
          </div>
        </div>

        {/* Secondary Content Section */}
        <div className="detail-content">
          <hr className="detail-divider" />
          <p className="full-text">{content.secondaryText}</p>
          <h2 className="detail-subheading">{content.secondarySubheading}</h2>
          <p style={{ fontSize: '1.1rem' }}>{content.secondaryDesc}</p>
          <ul className="detail-list">
            {content.secondaryList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Final Cooking Image */}
        <div className="cooking">
          <img src={article.cookImageFinal} alt={article.excerpt} />
        </div>

        {/* Last Text Blocks */}
        <div className="last-text">
          {content.lastBlocks.map((block, i) => (
            <div key={i} className="last-text-block">
              <h3 className="last-heading">{block.heading}</h3>
              <p className="last-para">{block.para}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="latest-articles-section">
      <div className="section-header">
        <h1>Latest Articles</h1>
      </div>
      <div className="articles-grid">
        {articlesData.map((article) => (
          <article key={article.id} className="article-card">
            <div className="images-wrapper">
              <img
                src={article.image}
                alt={article.excerpt}
                onClick={() => handleShowDetail(article.id)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="article-content">
              <span className='date'>{article.date}</span>
              <h3>{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;