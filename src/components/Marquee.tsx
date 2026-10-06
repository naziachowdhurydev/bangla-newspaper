import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headline {
  id: number;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines: Headline[] = data.data;
  console.log(headlines);
  return (
    <div className="bg-red-700 text-white ">
      <div className="flex items-center overflow-hidden container mx-auto">
        <div className="font-bold bg-red-800 py-1.5 px-5">সর্বশেষ</div>
        <MarqueeText direction="right" duration={12}>
          {headlines.map((h: Headline) => (
            <span key={h.id}>
              {h.title}
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
