import HeaderTitle from "@/components/HeaderTitle";
import { Instagram, Twitter, X, YouTube } from "@mui/icons-material";

export default function TeamPage() {
  return (
    <div className="flex flex-col px-[16px]">
      <div className="py-2">
        <HeaderTitle title="TEAM" />
      </div>
      <div className="py-2">
        <h3 className="text-center text-[10px] pr-[16px]">
          The Paper Rex VALORANT Team features some of the most celebrated
          players since the VCT's inception. Despite the emergence of younger
          raw talents, our roster remains competitive while being one of the
          longest-standing rosters in VCT. In 2024, the team triumphed as
          Champions of VCT Pacific Stage 1 and secured a spot on the podium at
          VCT Masters Madrid. As the road to Champions gets tougher each year,
          the team continues to uphold the same ideologies as always; working
          hard and playing harder.
        </h3>
      </div>
      <div className="py-2">
        <h1 className="text-lg font-bold my-[5px] py-[12px]">
          Paper Rex VALORANT Roaster
        </h1>
        {/* Card Layout */}
        <div className="flex flex-wrap justify-between">
          {/* Each card */}
          <div className=" mb-4">
            <div className="border-2 w-[160px] h-[240px] aspect-w-2 aspect-h-3 sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[360px] lg:w-[300px] lg:h-[450px] xl:w-[400px] xl:h-[600px] bg-secondary mr-4">
              {/* Insert Image */}

              {/* Name */}
            </div>
            <h3 className="mt-2 text-xs">Khalish 'd4v41' Rusyaide</h3>
            {/* Social Media */}
            <div className="flex items-center gap-[5px]">
              <Instagram sx={{ fontSize: "14px" }} />
              <X sx={{ fontSize: "14px" }} />
              <YouTube sx={{ fontSize: "22px" }} />
            </div>
          </div>

          {/* Each card */}
          <div className=" mb-4">
            <div className="border-2 w-[160px] h-[240px] aspect-w-2 aspect-h-3 sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[360px] lg:w-[300px] lg:h-[450px] xl:w-[400px] xl:h-[600px] bg-secondary mr-4">
              {/* Insert Image */}

              {/* Name */}
            </div>
            <h3 className="mt-2 text-xs">Khalish 'd4v41' Rusyaide</h3>
            {/* Social Media */}
            <div className="flex items-center gap-[5px]">
              <Instagram sx={{ fontSize: "14px" }} />
              <X sx={{ fontSize: "14px" }} />
              <YouTube sx={{ fontSize: "22px" }} />
            </div>
          </div>

          {/* Each card */}
          <div className=" mb-4">
            <div className="border-2 w-[160px] h-[240px] aspect-w-2 aspect-h-3 sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[360px] lg:w-[300px] lg:h-[450px] xl:w-[400px] xl:h-[600px] bg-secondary mr-4">
              {/* Insert Image */}

              {/* Name */}
            </div>
            <h3 className="mt-2 text-xs">Khalish 'd4v41' Rusyaide</h3>
            {/* Social Media */}
            <div className="flex items-center gap-[5px]">
              <Instagram sx={{ fontSize: "14px" }} />
              <X sx={{ fontSize: "14px" }} />
              <YouTube sx={{ fontSize: "22px" }} />
            </div>
          </div>

          {/* Each card */}
          <div className=" mb-4">
            <div className="border-2 w-[160px] h-[240px] aspect-w-2 aspect-h-3 sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[360px] lg:w-[300px] lg:h-[450px] xl:w-[400px] xl:h-[600px] bg-secondary mr-4">
              {/* Insert Image */}

              {/* Name */}
            </div>
            <h3 className="mt-2 text-xs">Khalish 'd4v41' Rusyaide</h3>
            {/* Social Media */}
            <div className="flex items-center gap-[5px]">
              <Instagram sx={{ fontSize: "14px" }} />
              <X sx={{ fontSize: "14px" }} />
              <YouTube sx={{ fontSize: "22px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
