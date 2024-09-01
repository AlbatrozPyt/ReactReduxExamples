import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../../features/todolist/toDoSlice";
import "./style.css";
import { useState } from "react";

export const Modal = ({ title, btnName, setShow, type, keyId }) => {
  const data = useSelector((state) => state.todolist.data);
  const dispatch = useDispatch();

  const [desc, setDesc] = useState("");

  return (
    <div className="bg-modal">
      <div className="box-modal">
        <h1>{title}</h1>

        <textarea
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Escreva aqui..."
        ></textarea>

        <button
          onClick={() => {
            setShow(false);

            if (type === "add") {
              dispatch(add({ description: desc, status: false }));
            }

            if (type === "update") {
              dispatch(update({ description: desc, keyId}));
            }
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};
