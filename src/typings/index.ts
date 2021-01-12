interface ITodo {
  id: number;
  content: string;
  status: TODO_STATUS;
}

interface IState {
  list: ITodo[]
}

enum TODO_STATUS {
  WILLDO = 'willdo',
  DOING = 'doing',
  FINISH = 'finish'
}

export {
  ITodo,
  IState,
  TODO_STATUS
}