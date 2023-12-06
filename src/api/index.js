const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN_NEWS

export const getNewsTopHeadlines = async () => {
    const newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_TOKEN}`, { cache: "no-store" });
    return newsData.json();
  };
  
  export const getNewsSearch = async (keyword) => {
    const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${API_TOKEN}&q=${keyword}&pageSize=10`, { cache: "no-store" });
    // const newsData = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_TOKEN}&pageSize=10`, { cache: "no-store" });
    return newsData?.json();
  };
  