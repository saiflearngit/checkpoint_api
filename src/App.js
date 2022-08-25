import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listOfUSer, setListOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => setListOfUSer(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("listOfUSer",listOfUSer);
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of users</h1>
        {listOfUSer.map((user,index) => (
          <>
            <div key={index}>
              <h6>id : {user.id}</h6>
              <h6>name : {user.name}</h6>
              <h6>username : {user.username}</h6>
              <h6>email : {user.email}</h6>
              <h6>address : </h6>
              <h6>street : {user.address.street}</h6>
              <h6>suite : {user.address.suite}</h6>
              <h6>city : {user.address.city}</h6>
              <h6>zipcode : {user.address.zipcode}</h6>
              <h6>geo : </h6>
              <h6>lat : {user.address.geo.lat}</h6>
              <h6>lng : {user.address.geo.lng}</h6>
              <h6>phone : {user.phone}</h6>
              <h6>website : {user.website}</h6>
              <h6>company : </h6>
              <h6>name : {user.company.name}</h6>
              <h6>catchPhrase : {user.company.catchPhrase}</h6>
              <h6>bs : {user.company.bs}</h6>
              <hr></hr>
              <br></br>
            </div>
          </>
        ))}
      </header>
    </div>
  );
}

export default App;
