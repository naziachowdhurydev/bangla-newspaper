interface IMostReadNews {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const news: IMostReadNews[] = data.data;
  //   console.log(news);

  return (
    <div className="card p-2 bg-base-100 border border-gray-300">
      <h1 className="font-bold text-red-700 mb-5">সর্বাধিক পঠিত</h1>
      <div className="grid gap-2">
        {news.map((n, i) => (
          <div key={n.id} className=" flex gap-2 ">
            <p className="font-bold text-2xl text-red-500">{i + 1}</p>
            <h2 className="text-lg ">{n.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
