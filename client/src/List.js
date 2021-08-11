import React from "react";
import { NavLink } from "react-router-dom";
import "./List.css";
import { TagCloud } from "react-tagcloud";
import Button from "react-bootstrap/Button";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tagDataItems: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/", {
      headers: { "Content-Type": "application/json" },
      method: "get",
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        //write a logic to make the data according to your need
        this.setState({ data, isLoaded: true });

        //Below is Ravin Code => I made function called 'function_ListRan' to get the ssame output.
        // this.setState({
        //   tagDataItems: data
        //     .sort(() => Math.random() - Math.random())
        //     .slice(0, 10),
        // });

        this.setState({
          tagDataItems: this.function_ListRan(data, 10),
        });

        console.log(data);
      });
  }
  //Getting the 7 random numbers form the list
  function_ListRan(data, itemSize) {
    //var a = [12,23,345,34,54,60,23,213,325,45,453,3445,36,5645,5674]
    var list_Rand = [];
    var tempRand = 0;

    while (list_Rand.length < itemSize) {
      tempRand = parseInt(Math.random() * data.length);
      tempRand = data[tempRand];
      if (!list_Rand.includes(tempRand)) {
        list_Rand.push(tempRand);
      }
    }

    return list_Rand;
  }

  deleteItem(itemId, data, title) {
    // console.log(itemId);
    // data = data.filter((item) => item.id !== itemId);

    // console.log(data);

    fetch("http://127.0.0.1:5000/delete/" + itemId, {
      headers: { "Content-Type": "application/json" },
      method: "get",
    }).then(() => {
      this.componentDidMount();
      alert(title + " have been deleted!");
    });

    // console.log(data);
    // this.setState({ data, isLoaded: true });
  }

  // editItem(itemId, title, desc) {
  //   fetch("http://127.0.0.1:5000/create", {
  //     headers: { "Content-Type": "application/json" },
  //     method: "post",
  //     body: JSON.stringify({
  //       title,
  //       desc,
  //     }),
  //   });
  // }

  test_edit(itemId) {
    console.log(itemId);
    window.location = `/list_Edit/${itemId}`;

    //(window.location = `/list_edit/${item.id}`)
  }

  render() {
    var { isLoaded, data, tag_data, tagDataItems, setState } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <div className="TagCloud">
            <TagCloud
              minSize={15}
              maxSize={50}
              tags={tagDataItems.map((item) => {
                return {
                  value: item.title,
                  count: Math.random() * 20,
                  id: item.id,
                };
              })}
              onClick={(tag) => (window.location = `/detail/${tag.id}`)}
            />
          </div>

          <div>
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <a href={`/detail/${item.id}`}> {item.title} </a>
                  <button
                    onClick={this.deleteItem.bind(
                      this,
                      item.id,
                      data,
                      item.title
                    )}
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => (window.location = `/list_Edit/${item.id}`)}
                  >
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="button">
            <Button onClick={() => window.history.back()} variant="primary">
              <b>Go Back</b>
            </Button>
          </div>
        </>
      );
    }
  }
}

export default List;
