import { SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

type Inputs = {
  toDo: string;
};

export default function ToDoForm() {
  const setToDos = useSetRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ toDo }) => {
    const newToDo: IToDo = {
      id: Date.now(),
      text: toDo,
      category: "Bucket",
    };
    setToDos((prev) => [...prev, newToDo]);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-6 mb-2 w-64">
        <input
          list="select-country"
          className="bg-gray-50 rounded-md px-2 py-4 w-full outline-none border-2 focus:ring-blue-500 focus:border-blue-500 block"
          placeholder="어디로 갈까?"
          {...register("toDo", { required: true })}
        />
        <datalist id="select-country">
          <option value="🇰🇷 한국"></option>
          <option value="🇺🇸 미국"></option>
          <option value="🇨🇳 중국"></option>
          <option value="🇯🇵 일본"></option>
          <option value="🇫🇷 프랑스"></option>
          <option value="🇩🇪 독일"></option>
          <option value="🇮🇹 이탈리아"></option>
          <option value="🇬🇧 영국"></option>
          <option value="🇨🇦 캐나다"></option>
          <option value="🇦🇺 호주"></option>
          <option value="🇷🇺 러시아"></option>
          <option value="🇧🇷 브라질"></option>
          <option value="🇲🇽 멕시코"></option>
          <option value="🇮🇳 인도"></option>
          <option value="🇦🇷 아르헨티나"></option>
          <option value="🇸🇦 사우디아라비아"></option>
          <option value="🇪🇸 스페인"></option>
          <option value="🇳🇱 네덜란드"></option>
          <option value="🇨🇭 스위스"></option>
          <option value="🇧🇪 벨기에"></option>
        </datalist>
        {errors.toDo && (
          <span className="text-red-500 font-bold text-center pointer-events-none select-none">
            😤 가고싶은 나라를 선택하세요.
          </span>
        )}
        <input
          className="rounded-md px-2 py-4 w-full font-medium focus:outline-none foucs:ring-4 focus:ring-gray-100 text-slate-900  bg-white hover:text-blue-700 hover:bg-gray-100 cursor-pointer"
          type="submit"
          value="가자!!"
        />
      </form>
      <ul></ul>
    </>
  );
}
