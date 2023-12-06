import Image from "next/image";
import Tag from "./Tag";
import Link from "next/link";

const RandomArticle = ({ data }) => {
  return (
    <div className="flex justify-between gap-2 p-2 mb-4 border-b border-gray-300">
      <div className="w-[60%] flex flex-col justify-between">
        <div>
        <Link href={data?.url} passHref className="text-sm font-bold hover:underline">
          {data?.title}
        </Link>
        <p className="text-sm ">{data?.description}</p>
        </div>
        <div className="flex flex-row space-x-2 max-w-max my-2">
          <Tag data={data?.source.name} />
          <Tag data={new Date(data?.publishedAt).toDateString()} />
        </div>
      </div>
      <div className="relative w-[40%] h-[200px]">
        <Image
          src={data?.urlToImage ? data?.urlToImage : "/img/news-u-logo.webp"}
          alt={data?.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default RandomArticle;
