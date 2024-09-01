import { useDispatch, useSelector } from "react-redux";
import { Main } from "./components/Main/Main";
import "./App.css";
import { ToDoBox } from "./components/ToDoList/ToDoList";
import { useState } from "react";
import { Modal } from "./components/Modal/Modal";

function App() {
  const data = useSelector((state) => state.todolist.data);

  const [showModal, setShowModal] = useState(false);

  return (
    <Main>
      <ToDoBox data={data} />

      <button onClick={() => setShowModal(true)}>Adicionar tarefa</button>

      {showModal && (
        <Modal
          type={"add"}
          title={"Adicionar Tarefa"}
          btnName={"Adicionar"}
          setShow={setShowModal}
        />
      )}
    </Main>
  );
}

export default App;
