import { useState, SyntheticEvent, FunctionComponent } from "react";
import { Dispatch, SetStateAction } from "react";
import { TodoItem } from "@/types/todo";

interface Props {
  setTodoItems: Dispatch<SetStateAction<TodoItem[] | undefined>>;
}

const Add: FunctionComponent<Props> = ({ setTodoItems }) => {
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    setTodoItems((items) => {
      return [
        ...(items || []),
        {
          done: false,
          text: todoItem,
        },
      ];
    });

    setTodoItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
      <input
        value={todoItem}
        onChange={({ target }) => setTodoItem(target.value)}
        type="text"
        placeholder="Todo..."
        className="block w-full rounded-md border-0 py-2 px-3 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 dark:bg-neutral-800 dark:text-neutral-50 dark:ring-neutral-500"
      />
      <button type="submit" className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Add
      </button>
    </form>
  );
};

export default Add;
