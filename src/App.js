import React, { useState } from "react";
import "./App.css"; // ð¥ ë°ëì App.css íì¼ì import í´ì¤ì¼ í©ëë¤.
import CustomButton from "./components/CustomButton";
import User from "./components/Users";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "ì¡ì¤ê¸°" },
    { id: 2, age: 24, name: "ì¡ê°" },
    { id: 3, age: 21, name: "ê¹ì ì " },
    { id: 4, age: 29, name: "êµ¬êµí" },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  };

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };

  return (
    <div>
      <div className="app-style">
        {users.map((user) => {
          if (user.age < 25) {
            return (
              <User
                handleDelete={deleteUserHandler}
                user={user}
                key={user.id}
              ></User>
            );
          } else {
            return null;
          }
        })}
      </div>
      <input
        value={name}
        placeholder="ì´ë¦ì ìë ¥í´ì£¼ì¸ì"
        // ì¸í ì´ë²¤í¸ë¡ ë¤ì´ì¨ ìë ¥ ê°ì nameì ê°ì¼ë¡ ìë°ì´í¸
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={age}
        placeholder="ëì´ë¥¼ ìë ¥í´ì£¼ì¸ì"
        // ì¸í ì´ë²¤í¸ë¡ ë¤ì´ì¨ ìë ¥ ê°ì ageì ê°ì¼ë¡ ìë°ì´í¸
        onChange={(e) => setAge(e.target.value)}
      />
      <CustomButton color="green" onClick={addUserHandler}>
        ì¶ê°íê¸°
      </CustomButton>
    </div>
  );
};

export default App;
