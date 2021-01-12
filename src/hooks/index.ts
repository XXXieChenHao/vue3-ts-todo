import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS,SET_DOING_STATUS } from "@/store/actionType"
import { ITodo, TODO_STATUS } from "@/typings"
import { watch } from "vue";
import { Store, useStore } from "vuex"

export interface IUseTodo {
  setTodo: (value: string) => void,
  setTodoList: () => void,
  removeTodo: (id: number) => void,
  setStatus: (id: number) => void,
  setDoing: (id: number) => void
}

interface IUserLocalStorage {
  getLocalList: () => ITodo[],
  setLocalList: (todoList: ITodo[]) => void
}

function useTodo (): IUseTodo {

  const store: Store<any> = useStore();
  // const data: IUserLocalStorage = useLocalStorage();
  const {getLocalList, setLocalList}: IUserLocalStorage = useLocalStorage();
  const todoList: ITodo[] = getLocalList();

  // 监听数据变化
  // watch 两个回调 第一个返回监听值的变化后  并且作为参数传入第二个回调
  watch(() => {
    return store.state.list
  }, (todoList) => {
    setLocalList(todoList);
  })

  // 设置todo  
  function setTodo(value: string): void {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status:TODO_STATUS.WILLDO
    }

    store.dispatch(SET_TODO, todo)
    // data.setLocalList(store.state.list);
    // setLocalList(store.state.list);
  }
  
  function setTodoList() {
    store.dispatch(SET_TODO_LIST, todoList)
  }
  
  function removeTodo(id: number): void {
    store.dispatch(REMOVE_TODO, id)
    // setLocalList(store.state.list);
  }
  
  function setStatus (id: number): void {
    store.dispatch(SET_TODO_STATUS, id)    
    // setLocalList(store.state.list);
    
  }
  
  function setDoing(id: number): void {
    store.dispatch(SET_DOING_STATUS, id)
    // setLocalList(store.state.list)
  }

  return {
    setTodo,
    setTodoList,
    removeTodo,
    setStatus,
    setDoing
  }
}

function useLocalStorage(): IUserLocalStorage {
  function getLocalList(): ITodo[] {
    return  JSON.parse(localStorage.getItem('todoList') || '[]')
  }

  function setLocalList(todoList: ITodo[]): void {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  return {
    getLocalList,
    setLocalList
  }
}

export {
  useTodo
}