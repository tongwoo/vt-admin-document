# 多语言

## 介绍

多语言由 `src/languages/Index.js` 文件作为入口，然后由 `main.js` 进行引用。

## 结构

在 `src/languages` 目录下有 2 个默认语言（中文、英文）目录，每个目录会有个入口文件 `Index.js`，用于引入语言文件，请参考此目录增加别的语言。

## 移除多语言

请执行下列操作

 - 删除 `src/main.js` 文件里的 `import i18n from "@/languages/Index.js`
 - 删除 `src/main.js` 文件里的 `app.use(i18n);`
 - 删除 `src/languages` 目录
 - 删除 `src/store/AppSetting.js` 中的 `language` 和 `UPDATE_LANGUAGE`
 - 删除 `src/views/layouts/BaseHeader.vue` 多语言按钮和事件代码
 - 删除 `package.json` 的 `vue-i18n`