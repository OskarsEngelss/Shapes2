import {useEffect, useState} from "react";

function App() {
  const [shape, setShape] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:8080/");
      const data = await response.json();
      
      setShape(data);
      setLoading(false);
    }

    getData();
  }, []);

  const rectangleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: `${shape[0]?.height}px`,
    width: `${shape[0]?.width}px`,
    backgroundColor: shape[0]?.color,
  };

  const circleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: `${2 * shape[1]?.radius}px`,
    width: `${2 * shape[1]?.radius}px`,
    backgroundColor: shape[1]?.color,
    borderRadius: '50%',
  };

  return (
    <>
      {loading === false ? <div style={rectangleStyle}><p>{shape[0].area}</p></div> : ""}
      {loading === false ? <div style={circleStyle}><p>{shape[1].area}</p></div> : ""}
    </>
  )
}

export default App;
