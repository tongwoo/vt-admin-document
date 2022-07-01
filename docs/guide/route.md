# 路由

## 路由加载

由 `src/routes/Index.js` 作为路由入口，另还有其他2个文件

- `BaseRoutes.js` 用于放置基础路由
- `BusinessRoutes.js` 放置业务路由，增加新路由可以在这个文件中修改

## 路由权限

请查看[权限章节](/guide/permission)

## 路由缓存

路由缓存是指将路由所映射的组件进行 `keepalive`，参考 [KeepAlive组件](https://staging-cn.vuejs.org/guide/built-ins/keep-alive.html)

**如何开启？**

将路由元信息加上 `cache: true` 即可，如下示例：

```js
{
    path: '/setting',
    component: BaseLayout,
    meta: {
        title: '系统设置',
        cache: true
    }
}
```

## 路由守卫

放置了不少守卫了处理相关功能，下图演示了路由守卫从开始到结束的处理过程

<p align="center">
    <br>
    <img src="../assets/images/vt-admin-route.drawio.svg" />
    <br>
</p>