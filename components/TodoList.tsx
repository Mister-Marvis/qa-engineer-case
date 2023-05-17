import {ChangeEventHandler, Dispatch, FunctionComponent, SetStateAction} from "react";
import { TodoItem } from "@/types/todo";

interface ListItemProps {
  item: TodoItem;
  setTodoItems: Dispatch<SetStateAction<TodoItem[] | undefined>>;
  index: number;
}

const TodoListItem: FunctionComponent<ListItemProps> = ({
  item: { done, text },
  setTodoItems,
  index,
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> =  () => {
    setTodoItems((items) => {
      if (items) {
        items[index].done = !items[index].done;
        console.log('chnage', [...items]);

        return [...items]
      }

      return []
    })
  }

  return (
    <label className="flex cursor-pointer items-center">
      <input defaultChecked={done} onChange={handleChange} type="checkbox" className="mr-4" />
      <span className={done ? "line-through opacity-50" : ""}>{text}</span>
    </label>
  );
};

interface TodoListProps {
  todoItems: TodoItem[];
  setTodoItems: Dispatch<SetStateAction<TodoItem[] | undefined>>;
}

const TodoList: FunctionComponent<TodoListProps> = ({
  todoItems,
  setTodoItems,
}) => {
  return (
    <div className="group rounded-lg border border-transparent bg-neutral-300/30 px-6 py-4 transition-colors dark:bg-neutral-800/30">
      {todoItems.length === 0 && (
        <span className="opacity-50">No items in list</span>
      )}
      {todoItems.length > 0 && (
        <div className="space-y-4">
          {todoItems.map((item, index) => (
            <TodoListItem
              key={index}
              index={index}
              item={item}
              setTodoItems={setTodoItems}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
