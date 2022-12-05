import React from "react";
import ResponsiveGrid from "./ResponsiveGrid";
import ResponsiveGrid1 from "./ResponsiveGrid1";


const {useEffect, useState } = React;
const ProductPages = (props) => {

  const [isLoading, setIsLoading] = useState(false)
  const buttonHandler = () => {
    setIsLoading(current => !current)
  }

  useEffect( () => {
    console.log(isLoading);
}, [isLoading]);
 
    return (<div>
      {isLoading?<ResponsiveGrid />
    :<ResponsiveGrid1 />}
    <br />
    <br />
      <button className="btn btn-group btn-outline-secodndary" onClick={buttonHandler}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
    </button>
    <span>    
    </span>
    <button className="btn btn-group btn-outline-secodndary" onClick={buttonHandler}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
    </button>
    
      </div>
      );
    

}

export default ProductPages;