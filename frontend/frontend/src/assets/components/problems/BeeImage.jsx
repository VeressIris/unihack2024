
import beeImage from "/images/problems-images/problems-bee.svg"; 

const BeeImage = () => {
  return (
    <img
      src={beeImage}
      alt="Bee Head"
      className="fixed"
      style={{
        top: "50%",                  
        left: "-100px",                 
        width: "250px",                
        height: "250px",              
        transform: "translateY(-50%) rotate(45deg)", 
        zIndex: 1000,                
      }}
    />
  );
};

export default BeeImage;
