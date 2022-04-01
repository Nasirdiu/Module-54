import { useEffect, useState } from "react";

const useTShart = () => {
  const [tshart, setTshart] = useState([]);

  useEffect(() => {
    fetch`tshirts.json`
      .then((rse) => rse.json())
      .then((data) => setTshart(data));
  }, []);
  return [tshart, setTshart];
};
export default useTShart;
