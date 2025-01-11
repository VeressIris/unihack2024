
const BeeAnimation = ({ currentBeeImage }) => {
  return (
    <div className="absolute bottom-10 left-10 z-20">
      <img src={currentBeeImage} alt="Bee" className="h-[200px] w-auto transition-opacity duration-1000" />
    </div>
  );
};

export default BeeAnimation;
