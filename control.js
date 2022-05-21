function validateForm() {
  let user = document.forms["myForm"]["user"].value;
  let pass = document.forms["myForm"]["pass"].value;
  if (user == "") {
    alert("Name must be filled out");
    return false;
  } else if (pass == "") {
    alert("Pass must be filled out");
    return false;
  }

  if (!user.includes("@", 1)) {
    alert("User must have @");
    return false;
  } else {
    return true;
  }
}
