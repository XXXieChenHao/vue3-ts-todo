# 组件内部  ——>  commit ——>  mutation ——> 试图变更 ——> 响应式

1. 组件 ——> dispath ——> action
2. dispath ——> type(actionType) ——> 某一个action
3. action ——> commit 调用 ——> mutation
4. mutation ——> change ——> state
5. render 方案: state ——> 数据流 ——> 视图 

1. actionType   action类型
2. actions      调用mutation的方法
3. mutations    更高state的方法
4. state        中央数据管理池 
5. store出口    actions、mutation、state统一到仓库中进行管理