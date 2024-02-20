import { useState, useEffect, useContext } from "react";
import { Global } from "../../../../Context";
import Loader from "../../../../Components/Loader";
import Card from "../AppCard";

import { getAll } from "../../../../Service/Main/Products";

import "../../Style/Apps.css";

function Apps() {
  const { token } = useContext(Global);
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function Jobs() {
      const fullList = await getAll(token);
      const appList = fullList.filter(product => product.type === "app")
      setList(appList);
      setLoad(false);
    }
    Jobs()
  }, [])

  return !!load ? (
    <Loader />
  ) : (
    <div className="c-apps-list">
      {
        list.map((data, i) => <Card data={data} token={token} key={"app-" + i} />)
      }
    </div>
  )
}

export default Apps;