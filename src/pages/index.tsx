import React from "react";

import { Cards } from "../component";
import { data } from "../data";

class IndexPage extends React.Component {
  render() {
    let CardsWithData = data.someData.map((x) => {
      let imgPath = data["image-root"] + x.image;
      x.image = imgPath;
      //check the browser console after making a change in this file
      //Path additions happen. But when page is reloaded it works fine
      console.log(x.image);
      return <Cards key={x.name} data={x} />;
    });

    return <div>{CardsWithData}</div>;
  }
}

export default IndexPage;
