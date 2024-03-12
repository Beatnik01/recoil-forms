import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

export default function ToDoList() {
  const [Bucket, Visited, Favorites] = useRecoilValue(toDoSelector);
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-5xl font-bold text-white pointer-events-none select-none text-center">
          여행
        </h1>
        <ToDoForm />
        <ul className="flex flex-col gap-2 px-4">
          {Bucket.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white pointer-events-none select-none text-center">
          여행 완료!
        </h1>
        <ul className="flex flex-col gap-2 px-4 pt-3">
          {Visited.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white pointer-events-none select-none text-center">
          좋았던 곳
        </h1>
        <ul className="flex flex-col gap-2 px-4 pt-3">
          {Favorites.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
