import { IState, ITodo, TODO_STATUS } from "@/typings";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_DOING_STATUS } from "./actionType";

export default {
  [SET_TODO](state: IState, todo: ITodo): void {
    // state.list.unshift(todo);
    // watch监听必须给一个新的值 所以上面的代码无效
    state.list = [todo, ...state.list]
  },
  [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
    state.list = todoList;
  },
  [REMOVE_TODO](state: IState, id: number): void {
    state.list = state.list.filter((item: ITodo) => item.id !== id)
  },
  [SET_TODO_STATUS](state: IState, id: number): void {
    state.list = state.list.map((item: ITodo) => {
      if (item.id === id) {
        switch (item.status) {
          case TODO_STATUS.FINISH:
            item.status = TODO_STATUS.WILLDO
            break;
          case TODO_STATUS.WILLDO:
          case TODO_STATUS.DOING:
            item.status = TODO_STATUS.FINISH
          default:
            break;
        }
      }
      return item
    })
  },
  [SET_DOING_STATUS](state: IState, id: number): void {
    // 遍历 将原有的status设置为willdo  将当前设置为 doing
    state.list = state.list.map((item: ITodo) => {
      if (item.id !== id) {
        if (item.status === TODO_STATUS.DOING) {
          item.status = TODO_STATUS.WILLDO
        } 
      }else {
        item.status = item.status === TODO_STATUS.WILLDO
          ? item.status = TODO_STATUS.DOING
          : item.status = TODO_STATUS.WILLDO
      }


      return item
    })
  }
} 