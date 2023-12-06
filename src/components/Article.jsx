import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";
import { useEffect, useState } from "react";

import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where, onSnapshot } from "firebase/firestore";
import { useAuth } from "../../firebase/auth";
import { db } from "../../firebase/firebase";

const Article = ({ data, layout }) => {
  const { authUser } = useAuth();
  const [isLiked, setIsLiked] = useState(false);

  const addToLiked = async (data) => {
    const title = data?.title;
    try {
      const q = query(
        collection(db, "User", authUser.uid, "liked"),
        where("id", "==", title)
      );
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        // Item is not in the liked collection, so add it
        await addDoc(collection(db, "User", authUser.uid, "liked"), {
          id: data?.title, // Using title as id
          owner: authUser.uid,
          articleData: {
            source: data?.source,
            author: data?.author,
            title: data?.title,
            description: data?.description,
            url: data?.url,
            urlToImage: data?.urlToImage,
            publishedAt: data?.publishedAt,
            content: data?.content,
          },
        });
        console.log("Item has been added successfully");
        setIsLiked(true);
      } else {
        // Item is already in the liked collection, remove it
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
          console.log("Item removed as it was already in the liked collection");
        });
        setIsLiked(false);
      }
    } catch (error) {
      console.error("Error adding/removing liked articles:", error);
    }
  };
  
  const handleLikeClick = (e) => {
    e.preventDefault();
    if (!authUser) {
      alert("Please sign in first.");
      return;
    }
      addToLiked(data);
    }

  return (
    <div>
      {!layout ? (
        // List Layout
        <div className="py-2 border-b border-gray-300 mb-4 relative">
          <div className="relative w-full h-[300px]">
            <Image
              src={
                data?.urlToImage !== null
                  ? data?.urlToImage
                  : "/img/news-u-logo.webp"
              }
              alt={data?.title}
              priority={true}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <Link href={data?.url} legacyBehavior>
            <a target="_blank" className="font-bold text-lg hover:underline">
              {data?.title}
            </a>
          </Link>
          <div className="flex space-x-4 my-2">
            <Tag data={data?.source.name} />
            <Tag data={data?.author} />
            <Tag data={new Date(data?.publishedAt).toDateString()} />
          </div>
          <p className="text-sm">{data?.description}</p>
          <button
            className={`text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 absolute right-2 top-4 `}
            onClick={(e) => handleLikeClick(e)}
          >
            {isLiked ? "liked" : "like"}
          </button>
        </div>
      ) : (
        // Grid Layout
        <div className="flex justify-between gap-2 p-2 mb-4 border-b border-gray-300 relative">
          <div className="relative w-[40%] h-[200px] ">
            <Image
              src={
                data?.urlToImage ? data?.urlToImage : "/img/news-u-logo.webp"
              }
              alt={data?.title}
              className="object-cover w-[400px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div>
          <div className=" w-[60%] flex flex-col justify-between">
            <div>
              <Link
                href={data?.url}
                passHref
                className="font-bold text-sm hover:underline"
              >
                {data?.title}
              </Link>
              <p className="text-sm ">{data?.description}</p>
              {/* <p className="text-sm ">{data?.content}</p> */}
            </div>
            <div className="flex flex-row space-x-2 max-w-max my-2">
              <Tag data={data?.source.name} />
              <Tag data={new Date(data?.publishedAt).toDateString()} />
            </div>
          </div>
          <button
            className={`text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 absolute left-4 top-4 `}
            onClick={handleLikeClick}
          >
            {isLiked ? "liked" : "like"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Article;
