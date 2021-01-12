import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import {
  SET_TODO,
  SET_TODO_LIST,
  REMOVE_TODO,
  SET_TODO_STATUS,
  SET_DOING_STATUS
} from "./actionType";

interface IContext {
  commit: Commit,
  state: IState
}

export default {
  [SET_TODO]({ commit }: IContext, todo: ITodo): void {
    commit(SET_TODO, todo);
  },
  [SET_TODO_LIST]({ commit }: IContext, todoList: ITodo[]): void {
    commit(SET_TODO_LIST, todoList);
  },
  [REMOVE_TODO]({ commit }: IContext, id: number): void {
    commit(REMOVE_TODO, id)
  },
  [SET_TODO_STATUS]({ commit }: IContext, id: number): void {
    commit(SET_TODO_STATUS, id)
  },
  [SET_DOING_STATUS]({ commit }: IContext, id: number): void {
    commit(SET_DOING_STATUS, id)
  }
}