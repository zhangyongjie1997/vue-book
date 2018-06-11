# vue-book

> A Vue.js project

 项目用到*less*.
```
npm install less less-loader axios vuex bootstrap --save-dev
```
- mock模拟数据
- api代表所有接口
- base基础组件
- components页面级组件

## 热门图书功能
- 先写服务端，确保数据能正常返回
- 增加api方法，实现获取数据的功能
- 在相应的组件中应用api，如果是一个基础组件(能复用的)需要用这些数据，应该在使用这个组件的父级中调用这个方法，再将数据传递给基础组件
- 创建一个基础组件
  - 1.创建一个.vue文件
  - 2.在需要使用这个组件的父级中引用这个组件，并注册
  - 3.以标签的形式引入

