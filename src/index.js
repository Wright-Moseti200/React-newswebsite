/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";

const App = () => {
    const [articles, setArticles] = useState([]); // State to hold fetched articles

    const news = async (value) => {
        let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${value}.json?api-key=qk781H32cAMqg7G08QvjZz0UHj2mXTtq`);
        let response1 = await response.json();
        console.log(response1);
        setArticles(response1.results); // Set articles to state
    };

    return (
        <div>
            <div className="container-fluid bg-black">
                <a className="text-black bg-white text-decoration-none" href="index.html">NewsMag</a>
                <a className="text-secondary text-decoration-none" onClick={() => news('arts')}>Arts</a>
                <a className="text-secondary text-decoration-none" onClick={() => news('home')}>Home</a>
                <a className="text-secondary text-decoration-none" onClick={() => news('science')}>Science</a>
                <a className="text-secondary text-decoration-none" onClick={() => news('us')}>USA</a>
                <a className="text-secondary text-decoration-none" onClick={() => news('world')}>World</a>
            </div>
            <br />
            <div className="newsinfo">
                {articles.map((article) => (
                    <div className="card bg-black" key={article.title}>
                        {article.multimedia && article.multimedia.length > 0 && (
                            <img src={article.multimedia[0].url} alt="picture" className="card-img-top" />
                        )}
                        <div className="card-body">
                            <p className="card-title text-white">{article.title}</p>
                            <p className="card-text text-white">{article.abstract}</p>
                            <a href={article.url} class="btn btn-primary">Read here</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const rootElement = document.querySelector("body");
const root = createRoot(rootElement);
root.render(<App />);