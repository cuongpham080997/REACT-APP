import React, { useCallback, useEffect, useState } from "react";

// try {
//   const a = 10;
//   a = 20;
// } catch (e) {
//   console.log(e);
// }

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("idle");

  const handleGetAllTodo = () => {
    const nm = Math.floor(Math.random() * 100);

    setStatus("loading");
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10&_start=${nm}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setStatus("success");
        setTodos(resp);
      })
      .catch(() => {
        setStatus("fail");
      });
  };

  // await + async
  const _handleGetAllTodo = async () => {
    try {
      const nm = Math.floor(Math.random() * 100);
      setStatus("loading");
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=10&_start=${nm}`
      );
      const _todos = await resp.json();
      setStatus("success");
      setTodos(_todos);
    } catch (e) {
      setStatus("fail");
    }
  };

  // Gọi api ngay khi người dùng vừa vào trang web
  //   useEffect(() => {
  //     handleGetAllTodo();
  //   }, []);

  useEffect(() => {
    const _handleGetAllTodo = async () => {
      try {
        const nm = Math.floor(Math.random() * 100);
        setStatus("loading");
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/todos?_limit=10&_start=${nm}`
        );
        const _todos = await resp.json();
        setStatus("success");
        setTodos(_todos);
      } catch (e) {
        setStatus("fail");
      }
    };

    _handleGetAllTodo();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const nm = Math.floor(Math.random() * 100);
        setStatus("loading");
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/todos?_limit=10&_start=${nm}`
        );
        const _todos = await resp.json();
        setStatus("success");
        setTodos(_todos);
      } catch (e) {
        setStatus("fail");
      }
    })();
  }, []);

  const opacity = status === "loading" ? 0.4 : 1;

  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          opacity: opacity,
        }}
      >
        {todos.map((t) => {
          // Hoàn thành: màu xanh
          // Không hoàn thành: màu đỏ
          // dựa vào completed
          return (
            <li
              className={`alert ${
                t.completed ? "alert-success" : "alert-danger"
              } `}
              key={t.id}
            >
              {t.title}
            </li>
          );
        })}
      </ul>

      <button onClick={_handleGetAllTodo} className="btn btn-success">
        Get All Todo
      </button>
    </div>
  );
}

export default TodoList;
