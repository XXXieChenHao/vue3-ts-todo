import { IState } from "@/typings";

export default <IState>{
  list: []
}
/*
  list:ITodo[]

  ITodo 类型
  listItem: {
    id: new Date().getTime ——> number
    content: string
    status: FINISH DOING WILLDO     ——> 枚举（一个变量拥有固定几个值时实用枚举类型）
  }


  type 类型    interface  接口     extend继承 扩展性较好
*/