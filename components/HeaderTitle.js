export default function HeaderTitle({title}) {
  return (
    <div className="flex justify-center py-3">
      <h1 className="text-accent font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
        {title}
      </h1>
    </div>
  );
}
