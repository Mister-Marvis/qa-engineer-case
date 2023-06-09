import { Dispatch, FunctionComponent, SetStateAction, SyntheticEvent, useState } from 'react'
import { TodoItem } from '@/types/todo'

interface Props {
  todoItems: TodoItem[]
  setTodoItems: Dispatch<SetStateAction<TodoItem[] | undefined>>
}

const Add: FunctionComponent<Props> = ({ setTodoItems, todoItems }) => {
  const [text, setText] = useState<string>('')

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    setTodoItems([
      ...(todoItems || []),
      {
        text,
        done: false,
        index: todoItems.length,
      },
    ])

    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
      <input
        value={text}
        onChange={({ target }) => setText(target.value)}
        type='text'
        placeholder='Todo...'
        className='dark:focus:aring-neutral-800 block w-full rounded-md border-0 px-3 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 dark:bg-neutral-950 dark:text-neutral-50 dark:ring-neutral-800'
        required={true}
        minLength={3}
        maxLength={100}
      />
      <button
        type='submit'
        className='rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Add
      </button>
    </form>
  )
}

export default Add
