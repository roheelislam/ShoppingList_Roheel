import React from "react";
import Button from "react-bootstrap/Button";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./editor.css";
class Editor extends React.Component {
  constructor(props) {
    super(props);
    const { id, title, description } = this.props;
    this.state = {
      id: id || "",
      title: title || "",
      description: description || "",
    };
  }

  titleHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  editiorHandler = (event, editor) => {
    const data = editor.getData();
    this.setState({ description: data });
  };

  onSubmitHandler = () => {
    const { title, description, id } = this.state;
    if (title === null || title.length === 0) {
      alert("Please enter a Title");
      return;
    }
    if (description === null || description.length === 0) {
      alert("Please enter a Description");
      return;
    }

    if (id !== "") {
      fetch("http://127.0.0.1:5000/list_Edit", {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify({
          title,
          desc: description,
          id,
        }),
      }).then(() => {
        alert(title + " have been edited!");
      });
    } else {
      fetch("http://127.0.0.1:5000/create", {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify({
          title,
          desc: description,
        }),
      })
        .then(() => {
          console.log("Hello");
          alert(title + " have been added!");
        })
        .catch((ex) => {
          console.log(ex);
        });
    }
  };

  render() {
    const { title, description, id } = this.state;
    console.log("EDITOR LOG", { title, description, id });
    return (
      <>
        <form className="form">
          <div className="title">
            <h5>Title</h5>
            <input
              name="title"
              placeholder="Enter Title"
              value={title}
              onChange={this.titleHandler}
            />
          </div>
          <br />
          <br />
          <div className="container">
            <h5>Description: </h5>
            <CKEditor
              editor={ClassicEditor}
              data={description}
              onBlur={this.editiorHandler}
            />
          </div>
          <br />
        </form>
        <br />
        <div className="container button-container">
          <div className="button">
            <Button onClick={() => window.history.back()} variant="secondary">
              Go Back
            </Button>
          </div>
          <div className="button">
            <Button onClick={this.onSubmitHandler} variant="success">
              Submit
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Editor;
