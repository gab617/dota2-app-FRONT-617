export function Ability({ img, desc }) {
  return (
    <>
      <section className="relative">
        <div className="transition duration-300 ease-in-out cursor-pointer hover:scale-110 group">
          <img src={img} alt="" />

          <div className="absolute right-0 bottom-full mt-2 w-max p-3 bg-black bg-opacity-65 text-white rounded-md hidden group-hover:block">
            <p className="w-[15em]">{desc}</p>
          </div>
        </div>
      </section>
    </>
  );
}
