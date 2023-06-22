import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  const inputChangeHandler = (input, value) => {
    console.log(input, value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <lable htmlFor="username">Username</lable>
        <input
          id="username"
          type="text"
          onChange={(event) => {
            inputChangeHandler("username", event.target.value);
          }}
        />
        <lable htmlFor="age">Age (Years)</lable>
        <input
          id="age"
          type="number"
          onChange={(event) => {
            inputChangeHandler("age", event.target.value);
          }}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
