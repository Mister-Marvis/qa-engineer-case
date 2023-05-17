import { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { TodoItem } from '@/types/todo'

interface ListItemProps {
  item: TodoItem
  todoItems: TodoItem[]
  setTodoItems: Dispatch<SetStateAction<TodoItem[] | undefined>>
}

const TodoListItem: FunctionComponent<ListItemProps> = ({ item, todoItems, setTodoItems }) => {
  const handleChange = (item: TodoItem) => {
    setTodoItems(
      todoItems.map((i) =>
        i.index === item.index
          ? {
              ...item,
              done: !item.done,
            }
          : i,
      ),
    )
  }

  return (
    <li data-index={item.index}>
      <label className='flex cursor-pointer items-center'>
        <input checked={item.done} onChange={() => handleChange(item)} type='checkbox' className='mr-4' />
        <span className={item.done ? 'line-through opacity-50' : ''}>{item.text}</span>
      </label>
    </li>
  )
}

interface TodoListProps {
  todoItems: TodoItem[]
  setTodoItems: Dispatch<SetStateAction<TodoItem[] | undefined>>
}

const TodoList: FunctionComponent<TodoListProps> = ({ todoItems, setTodoItems }) => {
  return (
    <div className='group rounded-lg border border-transparent bg-neutral-300/30 px-6 py-4 transition-colors dark:bg-neutral-800/30'>
      {todoItems.length === 0 && <span className='opacity-50'>No items in list</span>}
      {todoItems.length > 0 && (
        <ol className='space-y-4'>
          {todoItems
            .sort((a, b) => (a.index > b.index ? 1 : -1))
            .map((item) => (
              <TodoListItem key={item.index} item={item} todoItems={todoItems} setTodoItems={setTodoItems} />
            ))}
        </ol>
      )}
    </div>
  )
}

export default TodoList
