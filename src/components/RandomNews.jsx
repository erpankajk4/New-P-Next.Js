"use client"

import { useEffect, useState } from 'react';
import { getNewsSearch } from '../api/index';
import RandomArticle from './RandomArticle';
import { removeDuplicateData } from '../utils/index';

const RandomNews = () => {
  const [filterArticles, setFilterArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomNews = await getNewsSearch("random news");
        const filteredData = removeDuplicateData(randomNews);
        setFilterArticles(filteredData);
      } catch (error) {
        console.error('Error fetching random news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mt-1 w-[40%] border-l border-gray-300'>
      <h1 className="font-bold text-lg mt-1 pl-1">Random News :</h1>
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <RandomArticle data={article} />
        </div>
      ))}
    </div>
  );
};

export default RandomNews;
