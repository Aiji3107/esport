import BigButton from "@/components/bigButton";
import Carousel from "@/components/carousel";
import SettingsIcon from "@/components/icon/gearshape.svg";
import MatchTodayCard from "@/components/MatchTodayCard";
import PlayerCard from "@/components/playerCard";
import UpcomingMatchCard from "@/components/upcomingCard";
// ICON IMPORT
import NewsIcon from "@/components/icon/news.svg";
import TeamIcon from "@/components/icon/team.svg";
import AboutIcon from "@/components/icon/info.svg";
import Image from "next/image";
import HeaderTitle from "@/components/HeaderTitle";
import { Group, HowToVote, Info, Newspaper } from "@mui/icons-material";
import Link from "next/link";

export default function Page() {
  const currentPage = "home";

  const iconMap = {
    Newspaper: Newspaper,
    HowToVote: HowToVote,
    Group: Group,
    Info: Info,
  };


  const ButtonData = [
    {
      id: 1,
      text: "NEWS",
      icon: "Newspaper", // Pastikan ini sesuai dengan nama di iconMap
      href: "/news",
    },
    {
      id: 2,
      text: "VOTE",
      icon: "HowToVote", // Sesuaikan dengan objek iconMap
      href: "/vote",
    },
    {
      id: 3,
      text: "TEAM",
      icon: "Group",
      href: "/team",
    },
    {
      id: 4,
      text: "ABOUT",
      icon: "Info",
      href: "/about",
    },
  ];


  const UpcomingData = [
    {
      id: 1,
      name: "match 1",
      teamAway: "Team Asssss",
      teamHome: "Team B",
      liga: "La Liga",
      ligaImg: "",
      homeImg: "",
      awayImg: "",
    },
    {
      id: 2,
      name: "match 2",
      teamAway: "Team C",
      teamHome: "Team D",
      liga: "Premier League",
      ligaImg: "",
      homeImg: "",
      awayImg: "",
    },
  ];

  const MTData = [
    {
      id: 1,
      MTImg: "",
      title: "Match Highlight",
      body: "Watch the best moments",
    },
    {
      id: 2,
      MTImg: "",
      title: "Player Interview",
      body: "Exclusive player talk",
    },
  ];

  return (
    <>
      <HeaderTitle title="HOME" />
      <div>
        {/* Carousel */}
        <Carousel />
      </div>
      <div className="button-section">
        

        {ButtonData.map((button) => (
          <BigButton
            key={button.id}
            text={button.text}
            icon={button.icon} // Menyertakan icon di sini
            href={button.href}
            className="button-padding-16"
          />
        ))}
      </div>
      <div className="">
        {/* upcoming Match */}
        <h1 className="heading-text pb-2">Upcoming Match</h1>
        {/* Map Data untuk menghasilkkan UpcomingMatchCard */}
        {UpcomingData.map((data) => (
          <UpcomingMatchCard
            key={data.id}
            name={data.name}
            teamAway={data.teamAway}
            teamHome={data.teamHome}
            liga={data.liga}
            ligaImg={data.ligaImg}
            homeImg={data.homeImg}
            awayImg={data.awayImg}
          />
        ))}
      </div>
      <div className="pt-4">
        {/* Match Today */}
        {MTData.map((data) => (
          <MatchTodayCard
            key={data.id}
            title={data.title}
            MTImg={data.MTImg}
            body={data.body}
          />
        ))}
        <h1 className="heading-text pb-2">match Today</h1>
      </div>
      <div className="pt-4">
        {/* Player of the match voting */}
        <h1 className="heading-text pb-2">Player of the match voting</h1>
        <PlayerCard />
      </div>
    </>
  );
}
