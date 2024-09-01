import editIcon from "../../assets/img/edit.svg";
import deleteIcon from "../../assets/img/delete.svg";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { checkTask, remove } from "../../features/todolist/toDoSlice";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const ToDoBox = ({ data = [] }) => {
  const dataF = useSelector((state) => state.todolist.data);
  const dispatch = useDispatch();
  
  return (
    <div className="todo-box">
      <h1>ToDoList</h1>

      <ToDoList data={data} />
    </div>
  );
};

export const ToDoList = ({ data = [] }) => {
  return (
    <div className="todo-box__list">
      {data.map((x, index) => {
        return <ToDoItem obj={x} index={index} />;
      })}
    </div>
  );
};

export const ToDoItem = ({ obj, index }) => {
  const data = useSelector((state) => state.todolist.data);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={!obj.status ? "todo-box__list__item" : "todo-box__list__item task-complete"}>
      <input id="check" type="checkbox" checked={obj.status} onChange={() => dispatch(checkTask(index))}/>

      <p>{obj.description}</p>

      <div className="buttons">
        <button onClick={() => setShowModal(true)}>
          <img src={editIcon} />
        </button>
        <button onClick={() => dispatch(remove(index))}>
          <img src={deleteIcon} />
        </button>
      </div>

      {showModal && (
        <Modal
          title={"Atualizar item"}
          btnName={"Atualizar"}
          type={"update"}
          setShow={setShowModal}
          keyId={index}
        />
      )}
    </div>
  );
};
