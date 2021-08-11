import React from "react";
import "./List.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    const query = this.props.match.params.query;
    fetch("http://127.0.0.1:5000/search/" + query, {
      headers: { "Content-Type": "application/json" },
      method: "get",
    })
      .then((data) => {
        // this.setState({ data, isLoaded: true })
        return data.json();
      })
      .then((data) => {
        this.setState({ data: Array.from(data), isLoaded: true });
      });
  }

  render() {
    var { isLoaded, data } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="table">
          <h2>Showing Search Results</h2>

          <ul className="titles">
            {data.map((item) => (
              <li key={item.id}>
                <a href={`/detail/${item.id}`}> {item.title} </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Search;
