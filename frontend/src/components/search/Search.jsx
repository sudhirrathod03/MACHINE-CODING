import React, { useEffect, useMemo, useState } from "react";
import styles from "./search.module.css";
function Search() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  // const filterredUser = users.filter(
  //   (user) => user.firstName.toLowerCase().includes(search.toLowerCase()),
  //   console.log("calculated"),
  // );

  const searchUser = useMemo(() => {
    console.log("cal");
    return users.filter((user) => {
      return user.firstName.toLowerCase().includes(search.toLowerCase());
    });
  }, [users, search]);
console.log(searchUser);


  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search"
          className={styles.userInput}
          onChange={handleChange}
          value={search}
        />

        {
          <ul>
            {searchUser.map((user) => (
              <li key={user.id}>{user.firstName}</li>
            ))}
          </ul>
        }
      </div>
    </>
  );
}

export default Search;
