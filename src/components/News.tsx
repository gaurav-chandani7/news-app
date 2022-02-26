import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component<{category?: string}, { articles: any[], loading: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount(){
    let {category = "all"} = this.props
    let url = `https://inshortsapi.vercel.app/news?category=${category}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.data,
      loading: false
    })
  }
  render() {
    return (
      <div className='container'>
        <h2>Top Headlines</h2>
        <div className='row'>
          {this.state.loading && <Spinner/>}
          {this.state.articles.map((ele) => {
            let {title, url, imageUrl, content, readMoreUrl, date, time}: {title: any, url:any, imageUrl:any, content:any, readMoreUrl:any, date: string, time: string} = ele;
            return <div className='col md-col-4' key={url}>
              <NewsItem title={title} imgUrl={imageUrl} description={content} url={readMoreUrl ?? url} publishTime={ `${time} on ${date}` }/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News