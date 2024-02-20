import { useState, useEffect } from "react";

import Loader from "../../../../Components/Loader";
import Card from "../AppCard";

import "../../Style/Apps.css";

function Apps() {
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(true);

  const mocked = [{
    id: 1,
    name: "Hey Pet",
    online: true,
    type: "app",
    image: "https://play-lh.googleusercontent.com/4y_rLtJea8puDsXPXJbOoQFKIqfsv471teCk9lyYLrA7IkvyKagdqJICYmqaJMrcw6c=w240-h480"
  }]

  useEffect(() => {
    async function Jobs() {

      setList(mocked);
      setLoad(false);
    }
    Jobs()
  }, [])

  return !!load ? (
    <Loader />
  ) : (
    <div className="c-apps-list">
      {
        list.map((data, i) => <Card data={data} key={"app-" + i} />)
      }
    </div>
  )
}

export default Apps;