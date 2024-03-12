import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface IToDo {
  id: number;
  text: string;
  category: "Bucket" | "Visited" | "Favorites";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "Bucket"),
      toDos.filter((toDo) => toDo.category === "Visited"),
      toDos.filter((toDo) => toDo.category === "Favorites"),
    ];
  },
});
