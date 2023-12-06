"use client";
import { useEffect, useState } from "react";
import Article from "../../components/Article";
import { useSearchParams } from "next/navigation";
import LayoutButton from "@/components/LayoutButton";
import Loader from "@/components/Loader";

const Search = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.get("q") : null;
  const [layout, setLayout] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getNews = async () => {
      try {
        setLoading(true);
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN_NEWS;
        const response = await fetch(
          `https://newsapi.org/v2/everything?apiKey=${API_TOKEN}&q=${search}&pageSize=10`,
          { signal }
        );
        const responseToJson = await response.json();
        const randomArticle = responseToJson?.articles;
        const filterArticles = randomArticle.filter(
          (article) => article?.source?.id !== null
        );
        setLoading(false);
        setNewsData(filterArticles);
      } catch (error) {
        if (typeof error === "object" && error !== null) {
          console.log(error.toString());
        } else {
          console.log("Unexpected error", error);
        }
      }
    };

    if (search) {
      getNews();
    }

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <div className="w-[700px]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-[700px]">
            <div className="flex justify-between">
              <p className="font-bold text-lg mt-1">Top Search :</p>
              <LayoutButton layout={layout} setLayout={setLayout} />
            </div>
            {newsData.map((article, idx) => (
              <div key={`${article?.title}-${idx}`}>
                <Article data={article} layout={layout} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
