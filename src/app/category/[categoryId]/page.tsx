import NewsCard from "@/components/NewsCard";
import React from "react";

type CategoryPageProps = {
  params: Promise<{ categoryId: string }>;
};

type CategoryNewsItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
};

const CategoryNews = async ({ params }: CategoryPageProps) => {
  const { categoryId } = await params;
  console.log(categoryId);
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoryNews: CategoryNewsItem[] = data.data;

  return (
    <div>
      <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-5">
        {data.title}
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {categoryNews.map((news: CategoryNewsItem) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
