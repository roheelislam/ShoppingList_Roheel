import React from "react";
import "./detail.css";
import Button from "react-bootstrap/Button";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    fetch("http://127.0.0.1:5000/detail/" + id, {
      headers: { "Content-Type": "application/json" },
      method: "get",
    })
      .then((data) => {
        // this.setState({ data, isLoaded: true })
        return data.json();
      })
      .then((data) => {
        this.setState({ data, isLoaded: true });
        console.log(data);
      });
  }

  render() {
    console.log(this.props);
    const html = this.state?.data?.desc || "";
    return (
      <>
        <div className="title_desc">
          <ul className="title_1">
            <li>
              <div className="title_2">{this.state?.data?.title}</div>
              <ul className="desc">
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
              </ul>
            </li>
          </ul>
        </div>

        <div className="button">
          <Button onClick={() => window.history.back()} variant="secondary">
            <b>Go Back</b>
          </Button>
        </div>
      </>
    );
  }
}

export default Detail;
