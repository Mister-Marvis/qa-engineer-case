import { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { TodoItem } from '@/types/todo'

interface ListItemProps {
  item: TodoItem
  setTodoItems: Dispatch<SetStateAction<TodoItem[] | undefined>>
  index: number
}

const TodoListItem: FunctionComponent<ListItemProps> = ({ item, setTodoItems, index }) => {
  const handleChange = (item: TodoItem, index: number) => {
    setTodoItems((prev) => {
      if (prev) {
        prev[index].done = !prev[index].done

        return [...prev]
      }

      return []
    })
  }

  return (
    <li>
      <label className='flex cursor-pointer items-center'>
        <input defaultChecked={item.done} onChange={() => handleChange(item, index)} type='checkbox' className='mr-4' />
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
          {todoItems.map((item, index) => (
            <TodoListItem key={index} index={index} item={item} setTodoItems={setTodoItems} />
          ))}
        </ol>
      )}
    </div>
  )
}

export default TodoList
