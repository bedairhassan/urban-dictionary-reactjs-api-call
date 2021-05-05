import React, { useState, useEffect } from 'react'


function App() {

  const [data, dataSet] = useState([])
  const [button, buttonSet] = useState(false)

  const fetchApi = () => {

    fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "ab9b4b1344msh44e5a4a72f66bf2p1e5753jsn67f54ddc6aa8",
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(response => {

        console.log(response.list)
        dataSet(response.list)
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => fetchApi, [button])

  const toggle = () => buttonSet(button)

  if (data.length > 0) {
    return (
      <React.Fragment>
        {data.map((item) => {

          return (

            <React.Fragment>
              <tr>
                <td>
                  
                  <a href={item.permalink}>
                  {item.author}
                  </a>
                  </td>
                <td>{item.definition}</td>
              </tr>
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Unavailable Data</h3>
        <button onClick={toggle}>Submit</button>
      </React.Fragment>
    )
  }

}

export default App;
