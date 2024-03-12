import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

export default function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { id, text, category: name as any };
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };
  const onDelete = () => {
    setToDos((oldToDos) => {
      const newToDos = [...oldToDos];
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      newToDos.splice(targetIndex, 1);
      return newToDos;
    });
  };
  return (
    <li className="flex justify-between items-center text-black px-4 py-2 bg-white rounded-2xl">
      <span className="text-2xl font-medium">{text}</span>
      <div className="flex gap-2">
        {category === "Bucket" && (
          <button name="Visited" onClick={onClick}>
            👌
          </button>
        )}
        {category === "Visited" && (
          <button name="Favorites" onClick={onClick}>
            👍
          </button>
        )}
        {category === "Favorites" && (
          <button name="Visited" onClick={onClick}>
            👎
          </button>
        )}
        <button onClick={onDelete}>❌</button>
      </div>
    </li>
  );
}
