import React, { use, useEffect } from "react";

const PropComp = ({ prop, propFunc }) => {
    
    useEffect(() => {
        propFunc();
    }, []);
    
  return (
    <div>
      <p>Prop:{prop}</p>
    </div>
  );
}

export default PropComp;