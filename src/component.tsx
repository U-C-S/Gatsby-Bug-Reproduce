import React from "react";

export class Cards extends React.Component<
  { data: { name: string; image: string } },
  {}
> {
  render() {
    let { data } = this.props;
    //ignore the fact there are no images, It behaves with same.
    let x: React.CSSProperties = {
      backgroundImage: `url(${data.image})`,
    };

    return (
      <div className="card">
        <div className="card-image" style={x}></div>
        <h2>{data.name}</h2>
      </div>
    );
  }
}
