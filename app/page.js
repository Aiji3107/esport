import BigButton from "@/components/bigButton";
import Carousel from "@/components/carousel";
import SettingsIcon from "@/components/icon/gearshape.svg";
import MatchTodayCard from "@/components/MatchTodayCard";
import PlayerCard from "@/components/playerCard";
import UpcomingMatchCard from "@/components/upcomingCard";
import Image from "next/image";

export default function Page() {
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
        {/* 4 Buttons */}
        <BigButton className="button-padding-16" />
        <BigButton className="button-padding-16" />
        <BigButton className="button-padding-16" />
        <BigButton className="button-padding-16" />
      </div>
      <div className="pt-4">
        {/* upcoming Match */}
        <h1 className="heading-text pb-2">Upcoming Match</h1>
        <UpcomingMatchCard />
      </div>
      <div className="pt-4">
        {/* Match Today */}
        <h1 className="heading-text pb-2">match Today</h1>
        <MatchTodayCard />
      </div>
      <div className="pt-4">
        {/* Player of the match voting */}
        <h1 className="heading-text pb-2">Player of the match voting</h1>
        <PlayerCard />
      </div>
    </>
  );
}
