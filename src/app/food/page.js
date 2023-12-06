"use client"

import { useState, useEffect } from 'react';
import { getNewsSearch } from '@/api';
import Article from '@/components/Article';
import { removeDuplicateData } from '@/utils';
import LayoutButton from "@/components/LayoutButton";

const Food = () => {
  const [filterArticles, setFilterArticles] = useState([]);
  const [layout, setLayout] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsfood = await getNewsSearch('food');
        const filteredArticles = removeDuplicateData(newsfood);
        setFilterArticles(filteredArticles);
      } catch (error) {
        console.error('Error fetching food news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[700px]">
      <div className="flex justify-between">
        <p className="font-bold text-lg mt-1">Top Stories :</p>
        <LayoutButton layout={layout} setLayout={setLayout} />
      </div>
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} layout={layout} />
        </div>
      ))}
    </div>
  );
};

export default Food;
