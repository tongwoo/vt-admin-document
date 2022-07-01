# 权限

在开发过程中，常常会有权限控制这样的需求，在前端中涉及到权限控制的包括但不限于以下几个方面：

 - 路由，没有权限则无法访问这个路由且跳转到 `src/views/error/Forbidden.vue` 页面
 - 菜单，没有权限则不显示
 - 按钮，没有权限则不显示
 - 其他

无论是哪种，其主体都会绑定一个权限对应的值，这个值保存在 `src/common/constants/Permission.js` 中，一个权限对应一个常量，需要根据实际情况进行增删。

判断其是否拥有权限的只有一个方法，即：`checkAccess()`，一般情况下不需要手动去调用，下面介绍以上几种的权限处理方式。


## 路由权限

不同于其他模板采用动态路由的方式，我们使用的是静态路由，即：所有的路由放入 `Router` 实例中。

在每个路由的 `meta` 中创建一个 `permission` 属性，其值为 `src/common/constants/Permission.js` 中的某个常量，系统会在前置路由守卫 `beforeEach` 中进行判断并处理。

**示例：**

```js
import {USER_MANAGE} from '../common/constants/Permission.js';

//路由配置
{
    path: '/setting',
    component: BaseLayout,
    meta: {
        title: '系统设置',
        permission: USER_MANAGE //需要 USER_MANAGE 权限才能访问
    }
}
```

## 菜单权限

菜单跟路由一样，需要在菜单项上增加一个 `permission` 的属性，详情见：`src/common/data/NavigateMenu.js` 文件

**示例：**

```js
import {USER_MANAGE} from '../common/constants/Permission.js';

//菜单项
{
    name: '系统管理',
    path: '/settlement',
    icon: 'bi bi-gear-fill',
    show: true,
    permission: USER_MANAGE //需要 USER_MANAGE 权限才能访问
}
```

## 按钮或其他元素权限

其他 `ui` 类相关的权限判断只需要增加一个 `v-has` 指令即可

**示例：**

```vue
<template>
    <button type="button" v-has="USER_MANAGE">保存</button>
</template>
<script setup>
import {USER_MANAGE} from '@/common/constants/Permission.js';
</script>
```
