import { Inter } from 'next/font/google'
import { useLocalStorage } from 'react-use'
import Head from 'next/head'
import { TodoItem } from '@/types/todo'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })
const TodoList = dynamic(() => import('../components/TodoList'), { ssr: false })
const Add = dynamic(() => import('../components/Add'), { ssr: false })

export default function Home() {
  const [todoItems, setTodoItems] = useLocalStorage<TodoItem[]>('todo', [])

  return (
    <>
      <Head>
        <title>MR MARVIS todo</title>
      </Head>
      <main className={inter.className}>
        <article className='flex min-h-screen flex-col items-center gap-12 overflow-hidden p-24 lg:gap-20'>
          <header className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
            <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
              MR MARVIS todo
            </p>
          </header>
          <div
            className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"
            aria-hidden='true'
          />
          <div className='z-20 mx-auto grid w-full max-w-xl gap-6'>
            <TodoList setTodoItems={setTodoItems} todoItems={todoItems || []} />
            <Add setTodoItems={setTodoItems} todoItems={todoItems || []} />
          </div>
        </article>
      </main>
    </>
  )
}
