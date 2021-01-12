<template>
  <div>
    <!-- 列表会改变时不能使用index  因为index不稳定 -->
    <todo-item 
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing = setDoing
    />
  </div>
</template>

<script lang="ts">
import { IUseTodo, useTodo } from '@/hooks';
import { ITodo } from '@/typings';
import { defineComponent, PropType } from 'vue'
import TodoItem from './item.vue'
export default defineComponent({
  name: "todoList",
  props: {
    todoList: Array as PropType<ITodo[]>   // 断言
  },
  components: {
    TodoItem
  },
  setup() {
    const {
      removeTodo,
      setDoing,
      setStatus,
    }: IUseTodo = useTodo();

    return {
      removeTodo,
      setDoing,
      setStatus,
    }
  }
});
</script>

<style scoped lang="less">
</style>
