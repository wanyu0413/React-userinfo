import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <lable htmlFor="username">Username</lable>
        <input id="username" type="text" />
        <lable htmlFor="age">Age (Years)</lable>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
