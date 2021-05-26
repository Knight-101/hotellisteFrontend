import React, { useEffect, useState } from "react";
import "./featured.css";
import Card from "./card";
import { useHistory } from "react-router";
import { BASE_URL } from "../../variables";

const Featured = (props) => {
  const history = useHistory();
  const [items, setItems] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const baseurl = BASE_URL + "/hotels/list/rating/5";

  useEffect(() => {
    fetch(baseurl)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [baseurl]);

  if (isLoaded) {
    return (
      <div className="master-main">
        <div className="heading-master">Featured</div>
        <div className="card-master-1">
          <Card
            image_src={items[0].Image}
            name={items[0].Name}
            location={items[0].location.cityName}
            onClick={() => {
              localStorage.setItem("featuredIndex", 0);
              history.push("/main/hotels");
            }}
          ></Card>
          <Card
            image_src={items[1].Image}
            name={items[1].Name}
            location={items[1].location.cityName}
            onClick={() => {
              localStorage.setItem("featuredIndex", 1);
              history.push("/main/hotels");
            }}
          ></Card>
          <Card
            image_src={items[2].Image}
            name={items[2].Name}
            location={items[2].location.cityName}
            onClick={() => {
              localStorage.setItem("featuredIndex", 2);
              history.push("/main/hotels");
            }}
          ></Card>
          <Card
            image_src={items[3].Image}
            name={items[3].Name}
            location={items[3].location.cityName}
            onClick={() => {
              localStorage.setItem("featuredIndex", 3);
              history.push("/main/hotels");
            }}
          ></Card>
        </div>
      </div>
    );
  } else {
    return (
      <div className="master-main">
        <div className="heading-master">
          <h5>Featured</h5>
        </div>
      </div>
    );
  }
};

export default Featured;
