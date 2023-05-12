import { css } from "lit";

export default css`
* {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  #input-search {
    width: 90%;
  }
  #search-btn {
    padding: 10px;
    background: #009cff;
    border: none;
    border-radius: 3px;
    color: #fff;
    margin: 5px;
  }

  .search-field .term {
    width: 20%;
  }
  .search-field .condition {
    width: 20%;
  }
  .search-field .value {
    width: 40%;
  }
  .search-field .action {
    display: inline-block;
    width: 10%;
  }

  /* Full-width input fields */
  input[type="text"],
  input[type="password"],
  input[type="checkbox"],
  select {
    padding: 10px;
    margin: 5px;
    display: inline-block;
    border: none;
    background: #f1f1f1;
    // box-shadow: 2px 3px 10px #101010;
    }

  input[type="text"]:focus,
  input[type="password"]:focus {
    background-color: #ddd;
    outline: none;
  }

  hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
  }

  /* Set a style for all buttons */
  button {
    background-color: #04aa6d;
    color: white;
    padding: 10px;
    margin: 5px;
    border: none;
    cursor: pointer;
    opacity: 0.9;
  }
  button.cancel-btn {
    color: white;
    padding: 5px;
    margin: 5px;
    border: none;
    cursor: pointer;
    opacity: 0.9;
  }
  .btn-section {
    text-align: right;
  }
  button:hover {
    opacity: 1;
  }
  .search-fields{
    display: flex;
    justify-content:space-between
  }

  .search-fields .range{
    display:flex;
    align-items:center;
  }
  .search-fields .range select{
    max-width:80px;
  }
  .search-fields .range h3{
    margin:0;
  }

  /* Extra styles for the cancel button */
  .cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
  }

  /* Float cancel and signup buttons and add an equal width */
  .cancelbtn,
  .signupbtn {
    float: left;
    width: 50%;
  }

  /* Add padding to container elements */
  .container {
    padding: 16px;
  }

  /* Clear floats */
  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

  /* Change styles for cancel button and signup button on extra small screens */
  @media screen and (max-width: 300px) {
    .cancelbtn,
    .signupbtn {
      width: 100%;
    }
  }
`;