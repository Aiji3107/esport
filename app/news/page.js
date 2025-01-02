import Disclaimer from "@/components/disclaimer";
import HeaderTitle from "@/components/HeaderTitle";
import Image from "next/image";
import Link from "next/link";
import Photo1 from "@/components/assets/Group Photos/2023-champions-f0rsaken-something(1).jpg";
import CardNews from "@/components/CardNews";
import { prisma } from "@/lib/prisma";

// Initialize Prisma Client

export default async function NewsPage() {
  // fetch news data from prisma
  const news = await prisma.article.findMany();
  return (
    <div className=" md:container">
      <HeaderTitle title="NEWS" />
      <Disclaimer text="Keep up with the latest Paper Rex news, tournaments, roster changes, and media features." />
      <div className="mb-2" />
      {/* Content */}

      {/* layout card */}
      <div className="flex flex-col justify-center items-center gap-2">
        {/* Card */}
        {/* using map prisma */}
        {news.map((item) => (
          <CardNews
            key={item.id} // Tambahkan key untuk setiap card
            imageSrc={item.thumbnail}
            date={item.createdAt}
            title={item.title}
            content={item.content}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
