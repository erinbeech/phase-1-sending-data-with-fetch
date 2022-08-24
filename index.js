// Add your code here
let reqBody = {
    name: "erin",
    email: "erin@erin.com"
  };
   function submitData(reqBody) { 
 
    fetch("http://localhost:3000/users",{
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       "Accept": "application/json"
     },
     body: JSON.stringify(submitData)
    })
   .then(resp => resp.json())
    .then(submitData =>
     console.log(submitData))
    .catch(function(error) {
          alert("Bad things! Ragnarők!");
          console.log(error.message);
    } 