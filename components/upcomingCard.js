import Image from "next/image";

export default function UpcomingMatchCard({
  liga,
  ligaImg,
  teamHome,
  teamAway,
  homeImg,
  awayImg,
}) {
  const style = {
    bgcolor: "#000066",
    headercolor: "#FF0066",
    ligacolor: "#E4FF00",
    linecolor: "#0000A6",
  };

  return (
    <div
      className="rounded-xl p-4 mb-5 shadow-2xl"
      style={{ backgroundColor: style.bgcolor }}
    >
      <div className="flex justify-start items-center mb-4 border-b-2" style={{ borderColor: style.linecolor}}>
        <Image src={ligaImg} alt="Liga Icon" className="rounded-full w-10" />
        <div>
          <p style={{ color: style.headercolor }}>
            {teamHome} vs {teamAway}
          </p>
          <p style={{ color: style.ligacolor }}>{liga}</p>
        </div>
      </div>
      <div className="flex justify-between my-2">
        <div className="flex items-center">
          <div className="pr-4">
            <Image
              src={homeImg}
              alt="HomeIcon"
              className="rounded-full w-4 h-4"
            />
          </div>
          <div style={{ color: style.headercolor }}>{teamHome}</div>
        </div>
        <div>2</div>
      </div>
      <div className="flex justify-between my-2">
        <div className="flex items-center">
          <div className="pr-4">
            <Image
              src={awayImg}
              alt="AwayIcon"
              className="rounded-full w-4 h-4"
            />
          </div>
          <div style={{ color: style.headercolor }}>{teamAway}</div>
        </div>
        <div>2</div>
      </div>
    </div>
  );
}
