import Image from "next/image";
import React from "react";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const [FirstNews, ...otherNews] = news;

  return (
    <div className="flex gap-3">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            height={600}
            width={600}
            src={FirstNews.imageUrl}
            alt={FirstNews.imageAlt}
          />
        </figure>
        <div className="card-body">
          <p className="text-red-600 font-bold">{FirstNews.category}</p>
          <h2 className="card-title">{FirstNews.title}</h2>
          <p>{FirstNews.description}</p>
        </div>
      </div>
      <div className="grid gap-2">
        {otherNews.slice(0, 5).map((newsItem) => (
          <div
            key={newsItem.id}
            className="card bg-base-100 border border-gray-300 p-5 px-3"
          >
            <div>
              <p className="text-red-600 font-bold">{FirstNews.category}</p>
              {newsItem.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
