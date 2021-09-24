//Intent: Convert the interface of a class into another
//clients expect. Adapters lets classes work together that couldn't
//otherwise because of incompatible
//interfaces.

//it lets code work in environment that
//it would otherwise have not worked on.
const localStorage = require("./localStorage");
console.log("localStorage length: ", localStorage.getLength());

var uid = localStorage.getItem("user_id");

console.log("user_id: ", uid);

if (!uid) {
  console.log("User ID not found. Setting the user id and token...");
  localStorage.setItem("token", "TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
  localStorage.setItem("user_id", "12345");
} else {
  console.log("User ID found.", uid);
  console.log("clearning the User ID...");
  localStorage.clear();
}
