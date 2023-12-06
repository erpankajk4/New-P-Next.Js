"use client";

import { useState, useEffect } from "react";
import Article from "./Article";
import LayoutButton from "@/components/LayoutButton";

import { collection, onSnapshot } from "firebase/firestore";
import { useAuth } from "../../../firebase/auth";
import { db } from "../../../firebase/firebase";

const Liked = () => {
  const [filterArticles, setFilterArticles] = useState([]);
  const [layout, setLayout] = useState(false);
  const { authUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!authUser) {
          setFilterArticles([]);
          return;
        }

        const likedArticlesRef = collection(db, "User", authUser.uid, "liked");

        const unsubscribe = onSnapshot(likedArticlesRef, (querySnapshot) => {
          const articles = [];
          querySnapshot.forEach((doc) => {
            articles.push({ itemRef: doc.id, ...doc.data() });
          });
          setFilterArticles(articles);
          console.log("Retrieved articles:", articles);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching liked articles:", error);
      }
    };
    fetchData();
  }, [authUser]);

  return (
    <div className="w-[700px]">
      <div className="flex justify-between">
        <p className="font-bold text-lg mt-1">Liked Stories :</p>
        <LayoutButton layout={layout} setLayout={setLayout} />
      </div>
      {filterArticles.length !== 0
        ? filterArticles.map((article) => (
            <div key={article.id}>
              <Article data={article.articleData} layout={layout} />
            </div>
          ))
        : "You didn't like anything Yet."}
    </div>
  );
};

export default Liked;
