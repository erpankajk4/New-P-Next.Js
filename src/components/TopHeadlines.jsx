"use client"

import { useEffect, useState } from 'react';
import { getNewsTopHeadlines } from '../api/index';
import { removeDuplicateData } from '../utils/index';
import Article from './Article';
import LayoutButton from './LayoutButton';

const TopHeadlines = () => {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [layout, setLayout] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsTop = await getNewsTopHeadlines();
        const filteredData = removeDuplicateData(newsTop);
        setFilteredArticles(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='w-[700px]'>
      <div className="flex justify-between">
  <p className="font-bold text-lg mt-1">Top Stories :</p>
  <LayoutButton layout={layout} setLayout={setLayout} />
</div>
      {filteredArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} layout={layout} setLayout={setLayout}/>
        </div>
      ))}
    </div>
  );
};

export default TopHeadlines;
