import React, { useState } from "react";
import "./App.css";
import Working from "./Todo/Working";
import Done from "./Todo/Done";

function App() {
  const [work, setWork] = useState([
    { id: 1, title: "리액트", body: "리액트", isDone: false },
    { id: 2, title: "리액트1", body: "리액트1", isDone: false },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [isDone, setisDone] = useState(false);

  const AddHandler = () => {
    const newWorkList = {
      id: work.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setWork([...work, newWorkList]);
  };

  const delTotal = (id) => {
    const newWorkDel = work.filter((work) => work.id !== id);
    setWork(newWorkDel);
  };

  const clears = (id) => {
    // setisDone(!isDone);
    const newList = work.map((work) => {
      if (work.id === id) {
        return {
          ...work,
          isDone: !work.isDone,
        };
      } else {
        return {
          ...work,
        };
      }
    });
    setWork(newList);
  };
  return (
    <div className="Total">
      <div className="Top1">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="Middle1">
        <div className="In1">
          제목 &nbsp;&nbsp;
          <input
            className="In2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="In1">
          내용 &nbsp;&nbsp;
          <input
            className="In2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="Addbtn">
          <button onClick={AddHandler}>추가하기</button>
        </div>
      </div>
      <p>Working</p>
      <div className="WT">
        {work.map((Works) => {
          if (Works.isDone === false) {
            return (
              <Working
                clE={clears}
                deL={delTotal}
                Works={Works}
                key={Works.id}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <p>Done!</p>
      <div className="WT">
        {work.map((Works) => {
          if (Works.isDone === true) {
            return (
              <Done
                clE={clears}
                deL={delTotal}
                Works={Works}
                key={Works.id}
              ></Done>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default App;
