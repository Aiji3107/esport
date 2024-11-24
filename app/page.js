import BigButton from "@/components/bigButton";
import Carousel from "@/components/carousel";
import SettingsIcon from "@/components/icon/gearshape.svg";
import MatchTodayCard from "@/components/MatchTodayCard";
import PlayerCard from "@/components/playerCard";
import UpcomingMatchCard from "@/components/upcomingCard";
// ICON IMPORT
import NewsIcon from "@/components/icon/news.svg";
import VoteIcon from "@/components/icon/vote.png";
import TeamIcon from "@/components/icon/team.svg";
import AboutIcon from "@/components/icon/info.svg";
import Image from "next/image";

export default function Page() {
  const currentPage = "home";

  const ButtonData = [
    {
      id: 1,
      text: "NEWS",
      icon: NewsIcon,
      href: "/news",
    },
    {
      id: 2,
      text: "VOTE",
      icon: VoteIcon,
      href: "/vote",
    },
    {
      id: 3,
      text: "TEAM",
      icon: TeamIcon,
      href: "/team",
    },
    {
      id: 4,
      text: "ABOUT",
      icon: AboutIcon,
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
      ligaImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
      homeImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
      awayImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
    },
    {
      id: 2,
      name: "match 2",
      teamAway: "Team C",
      teamHome: "Team D",
      liga: "Premier League",
      ligaImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
      homeImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
      awayImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
    },
    {
      id: 3,
      name: "match 3",
      teamAway: "Team E",
      teamHome: "Team F",
      liga: "Serie A",
      ligaImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
      homeImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
      awayImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
    },
  ];

  const MTData = [
    {
      id: 1,
      MTImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
      title: "Match Highlight",
      body: "Watch the best moments",
    },
    {
      id: 2,
      MTImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
      title: "Player Interview",
      body: "Exclusive player talk",
    },
    {
      id: 3,
      MTImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
      title: "Tactical Analysis",
      body: "Deep dive into strategies",
    },
    {
      id: 4,
      MTImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
      title: "Post-Match Reactions",
      body: "Hear from the experts",
    },
    {
      id: 5,
      MTImg: "@/public/image/2022-masters-grand-finals-crowd.jpg",
      title: "Upcoming Matches",
      body: "Stay updated on schedules",
    },
  ];

  return (
    <>
      <div className="header">
        <div></div>
        <h1 className="header-text header-title">PAPER REX</h1>
        <Image src={SettingsIcon} alt="settingsIcon" />
      </div>
      <div>
        {/* Carousel */}
        <Carousel />
      </div>
      <div className="button-section">
        {/* Map data untuk menghasilkan BigButton */}
        {ButtonData.map((button) => (
          <BigButton
            key={button.id}
            text={button.text}
            icon={button.icon}
            href={button.href} // Pass href ke BigButton
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
