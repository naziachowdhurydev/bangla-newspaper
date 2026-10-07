import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";

interface IOtherSection {
  currentId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  const otherSections: IOtherSection[] = sections.slice(1);
  console.log(otherSections);

  return (
    <div>
      <Marquee />
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-2">
        {/* news section */}
        <div className=" col-span-2 ">
          <MainNews news={mainNews} />

          <div className="grid  gap-2 mt-5">
            {otherSections.map((os) => (
              <div key={os.currentId} className="my-2 pb-2 ">
                <h1 className="text-md font-bold border-b-2 pb-1 border-red-700">
                  {os.title}
                </h1>

                <div className="grid grid-cols-3 gap-2 mt-5">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* most read section */}
        <div className="bg-green-200 col-span-1"></div>
      </div>
    </div>
  );
}
