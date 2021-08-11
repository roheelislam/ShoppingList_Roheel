import "./create.css";
import React from "react";
import Editor from "./Editor";

class list_Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      isLoaded: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch("http://127.0.0.1:5000/detail/" + id, {
      headers: { "Content-Type": "application/json" },
      method: "get",
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          title: data.title,
          description: data.desc,
          isLoaded: true,
        });
      });
  }


  render() {
    const { id } = this.props.match.params;
    const { title, description, isLoaded } = this.state;
    return isLoaded ? (
      <Editor id={id} title={title} description={description} />
    ) : (
      <></>
    );
  }
}

export default list_Edit;
