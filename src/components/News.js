import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("hello i am a constructer from news component");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    console.log("cdm");

    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=aa816fc67e4f425ea3ae21e3b790cede&page=1";

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>News Monkey - Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container">
          <button type="button" className="btn btn-dark mx-2">
            Previous
          </button>
          <button type="button" className="btn btn-dark mx-2">
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
