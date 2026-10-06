import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  scrapable: boolean;
  topicId: string | null;
  url: string;
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: Navs[] = data.data;

  const filteredNavs = navs.filter((n) => n.scrapable);
  return (
    <div className=" flex gap-5 justify-center mt-5">
      <Link className="hover:text-red-600" href="/">
        হোম
      </Link>

      {filteredNavs.map((n, i) => (
        <Link className="hover:text-red-600" href={n.slug} key={i}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
