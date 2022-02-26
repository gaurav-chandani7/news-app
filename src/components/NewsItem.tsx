import { Component } from 'react'

export class NewsItem extends Component<{ title: string, description: string, imgUrl: string, url: string, publishTime: string, mode: string }> {
  render() {
    let { title, description, imgUrl, url, publishTime, mode } = this.props;
    return (
      <div className={`card ${mode === 'light' ? '' : 'border-secondary'} my-3 mx-auto bg-${mode === 'light' ? 'light' : 'dark'}`} style={{ width: "18rem" }}>
        <img src={imgUrl} className="card-img-top" alt="..." style={{ height: "200px", width: "100%" }} />
        <div className="card-body">
          <h5 className={`card-title text-${mode === 'light' ? 'dark' : 'light'}`}>{title.slice(0, 42)}...</h5>
          <div style={{ fontSize: "12px", fontWeight: "300", color: "#808290" }}>{publishTime}</div>
          <p className={`card-text text-${mode === 'light' ? 'dark' : 'light'}`}>{description.slice(0, 83)}...</p>
          <a href={url} target="_blank" rel="noreferrer" className={`btn btn-sm btn-${mode === 'light' ? 'dark' : 'secondary'}`}>Read more</a>
        </div>
      </div>
    )
  }
}

export default NewsItem