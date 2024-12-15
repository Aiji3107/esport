export default function Disclaimer({text}) {
    return (
      <div className="flex items-center justify-center gap-[5px]">
        <h3 className="font-thin text-center text-xs">
          {text}
        </h3>
      </div>
    );
}