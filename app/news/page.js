import Disclaimer from "@/components/disclaimer";
import HeaderTitle from "@/components/HeaderTitle";
import Image from "next/image";
import Link from "next/link";
import Photo1 from "@/components/assets/Group Photos/2023-champions-f0rsaken-something(1).jpg";
import CardNews from "@/components/CardNews";

export default function NewsPage() {
  return (
    <div className=" md:container">
      <HeaderTitle title="NEWS" />
      <Disclaimer text="Keep up with the latest Paper Rex news, tournaments, roster changes, and media features." />
      <div className="mb-2" />
      {/* Content */}

      {/* layout card */}
      <div className="flex flex-col justify-center items-center gap-2">
        {/* Card */}
        <div className="flex flex-col justify-center items-center">
          {/* Gambar */}
          <Image
            className="w-[340px] h-[190px] bg-white object-cover md:w-[720px] md:h-[406px] lg:w-[1920px] lg:h-[1085px]"
            alt="gambar"
            width={2048}
            height={1366}
            src={Photo1}
          />
          <div className="text-wrap">
            {/* Date */}
            <h1 className="text-left text-xs">Oct 11, 2024</h1>
            <div className="text-pretty">
              {/* title */}
              <h1 className="text-center text-accent text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold my-2">
                Paper Rex wins the 2024 SEA Games
              </h1>

              {/* Content */}
              <h3 className="text-balance text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;ss standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.<span> </span>
                {/* ReadMore */}
                <Link className="text-red-600" href="/">
                  ReadMore...
                </Link>
              </h3>
            </div>

            <div className="p-2" />
          </div>
        </div>

        {/* Card */}
        <CardNews
          imageSrc={Photo1}
          date="Oct 11, 2024"
          title="Paper Rex wins the 2024 SEA Games"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          link="/"
        />
        <div className="text-wrap">
          {/* Date */}
          <h1 className="text-left text-xs">Oct 11, 2024</h1>
          <div className="text-pretty">
            {/* title */}
            <h1 className="text-center text-accent text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold my-2">
              Paper Rex wins the 2024 SEA Games
            </h1>

            {/* Content */}
            <h3 className="text-balance text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;ss standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.<span> </span>
              {/* ReadMore */}
              <Link className="text-red-600" href="/">
                ReadMore...
              </Link>
            </h3>
          </div>

          <div className="p-2" />
        </div>
      </div>
    </div>
  );
}
