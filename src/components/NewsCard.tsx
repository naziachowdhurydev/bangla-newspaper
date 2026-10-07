import Image from "next/image";
import React from "react";

interface INewsCard {
  news: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
  };
}

const NewsCard = ({ news }: INewsCard) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          height={600}
          width={600}
          src={news.imageUrl}
          alt={news.imageAlt}
        />
      </figure>
      <div className="card-body">
        <p className="text-red-600 font-bold">{news.category}</p>
        <h2 className="card-title">{news.title}</h2>
        <p>{news.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
