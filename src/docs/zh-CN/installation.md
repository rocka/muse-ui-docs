# 安装

## npm 安装

推荐使用 `npm` 的方式安装，以便更好的和打包工具（[webpack](https://webpack.js.org/)）配合使用

```bash
npm i @rocka/muse-ui -S
```

## CDN

目前可以通过 [unpkg.com/@rocka/muse-ui/](https://unpkg.com/@rocka/muse-ui/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<link rel="stylesheet" href="https://unpkg.com/@rocka/muse-ui/dist/muse-ui.css">
<script src="https://unpkg.com/@rocka/muse-ui/dist/muse-ui.js"></script>
```

## Roboto Font

`Muse-UI` 实现 [Material Design](https://material.io/) ，推荐使用 [Roboto](http://www.google.com/fonts/specimen/Roboto) 字体，如果不需要 Roboto 字体，请跳过此步骤。

```html
<link rel="stylesheet" href="https://unpkg.com/typeface-roboto/index.css">
```

## Font Icons

`Muse-UI` 推荐使用 [Material Design Icons DX](https://jossef.github.io/material-design-icons-iconfont/), 需要从 CDN 上引入字体图标库。

```html
<link rel="stylesheet" href="https://unpkg.com/material-design-icons-iconfont@6/dist/material-design-icons-no-codepoints.min.css">
```
