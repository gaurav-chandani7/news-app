import React, { Component } from 'react'

export class NewsItem extends Component<{ title: string, description: string, imgUrl: string, url: string, publishTime: string }> {
  render() {
    let { title, description, imgUrl, url, publishTime } = this.props;
    return (
      <div className="card my-3 mx-auto" style={{ width: "18rem" }}>
        <img src={imgUrl} className="card-img-top" alt="..." style={{ height: "200px", width: "100%" }} />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 48)}</h5>
          <div style={{ fontSize: "12px", fontWeight: "300", color: "#808290" }}>{publishTime}</div>
          <p className="card-text">{description.slice(0, 83)}...</p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    )
  }
}

export default NewsItem