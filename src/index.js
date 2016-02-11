import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import SubmitButton from './components/submit';
const API_KEY = 'AIzaSyAuw7_HkCbkihr37j5zBDOi3PPD2bVAA7M';


var submitAction = () => {
  let values = [];
  let inputs = ['FirstName', 'LastName', 'Password'];
  inputs.forEach((input) => {
    values.push(document.getElementById(input).value);
  });
  let url = "http://test.com:8080/user/add?first_name="+values[0]+"&last_name="+values[1]+"&password="+values[2];
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.send();
  console.log(xhttp);
}

const App = () => {
  return (
     <div>
       <SearchBar placeholder={'First Name'} id={'FirstName'}/>
       <SearchBar placeholder={'LastName'} id={'LastName'}/>
       <SearchBar placeholder={'Password'} id={'Password'}/>
       <SubmitButton submitAction={submitAction} text={'Submit'}/>
     </div>
  );
}
//find the div with class container and render the App component into that div
//Take the components html and render it into the DOM(on the page)
ReactDOM.render(<App />, document.querySelector('.container'));
