import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b0c30f7cc0d845fe9185e79eef710cc6&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(100);
    // console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false)
  }

  useEffect(() => {
  document.title = `${props.category} - NewzHunk`;
    updateNews();
    // eslint-disable-next-line
  }, []);
  // const componentDidMount = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b0c30f7cc0d845fe9185e79eef710cc6&page=1&pageSize=${props.pageSize}`;
  //   // setLoading(true);
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // // console.log(parseData);
  //   // setState({articles: parseData.articles,
  //   //                totalResults:parseData.totalResults,
  //   //                loading: false
  //   // });
  //   updateNews();
  // }

  // const hanldePreviousClick = async () => {
  //   // console.log("PREVIOUS");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b0c30f7cc0d845fe9185e79eef710cc6&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //   // setState({loading: true})
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parseData.articles,
  //   //   loading: false
  //   // })
  //   this.setState({ page: this.state.page - 1 }, () => this.updateNews());
  // };

  // const hanldeNextClick = async () => {
  //   console.log("NEXT");
  //   // let condition = this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize);
  //   // if(!condition) {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b0c30f7cc0d845fe9185e79eef710cc6&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   //   this.setState({loading: true})
  //   //   let data = await fetch(url);
  //   //   let parseData = await data.json();

  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parseData.articles,
  //   //     loading: false
  //   //   })
  //   // }
  //   this.setState({ page: this.state.page + 1 }, () => this.updateNews());
  // };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b0c30f7cc0d845fe9185e79eef710cc6&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  }

    return (
      <>
        <h1 className="my-3" style={{marginLeft: '71px', paddingTop: '50px'}}>
          NewzHunk - Top Headlines <small style={{fontSize: '30px'}}>- {props.category}</small>
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={hanldePreviousClick}
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              state.page + 1 > Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-primary"
            onClick={hanldeNextClick}
          >
            Next &raquo;
          </button>
        </div> */}
      </>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
