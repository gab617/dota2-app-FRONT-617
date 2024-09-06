import "./HeroCard.css";

export function HeroCard({
  hero,
  handleClick,
  defectUrlImg,
  handleImageError,
}) {
  return (
    <>
      <div
        onClick={(evt) => {
          evt.preventDefault();
          handleClick(hero);
        }}
        className="lg:flex justify-end items-end text-white card-hero w-20 h-24 sm:w-[100%] sm:h-[118px]"
        style={{
          backgroundImage: `url(${hero.image || defectUrlImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={`flex flex-col  second-content sm:bg-opacity-50`}>
          <p className="text-xs">{hero.name_loc} </p>
        </div>
      </div>

      {/*       <div
        onClick={(evt) => {
          evt.preventDefault();
          handleClick(hero);
        }}
        className="HeroCard"
      >
        <img
          className="lg:w-full lg:h-24 lg:object-cover lg:object-center lg:p-1"
          src={hero.image || defectUrlImg}
          alt={`image ${hero.name_loc || "x"}`}
          onError={handleImageError}
        />

      </div> */}
    </>
  );
}
