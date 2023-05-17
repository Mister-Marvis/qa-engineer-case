import { TodoItem } from '@/types/todo'

export const initial: TodoItem[] = [
  {
    done: true,
    text: 'Download repository',
  },
  {
    done: false,
    text: 'Add Jest dependency',
  },
  {
    done: false,
    text: 'Create at least 3 unit tests',
  },
  {
    done: false,
    text: 'Add Cypress dependency',
  },
  {
    done: false,
    text: 'Create at least 3 E2E tests',
  },
]
