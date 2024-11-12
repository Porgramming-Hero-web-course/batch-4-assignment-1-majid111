type Circle ={ shape: "circle", radius: number };
type Rectangle={
    shape: "rectangle",
    width: number,
    height: number,
  };

  type Area=Circle | Rectangle;

  const calculateShapeArea=(area:Area)=>{
    if(area.shape==="circle"){
        return 3.1416*area.radius*area.radius
    }
    else if(area.shape==="rectangle"){
        return area.width*area.height
    }
  }



const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 11,
  });
  console.log(circleArea,rectangleArea);
  
  