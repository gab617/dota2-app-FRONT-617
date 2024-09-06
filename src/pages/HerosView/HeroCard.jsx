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
        className="lg:flex justify-center items-end text-white card-hero w-20 h-24 sm:w-[100%] sm:h-[120px]"
        style={{
          backgroundImage: `url(${hero.image || defectUrlImg})`,
          backgroundSize: "cover", // Ajusta el porcentaje para alejar la imagen
          backgroundPosition: "center",
        }}
      >
        <div className={`flex flex-col  second-content sm:bg-opacity-50`}>
          <p className="text-xs">{hero.name_loc} </p>
        </div>
      </div>
    </>
  );
}
