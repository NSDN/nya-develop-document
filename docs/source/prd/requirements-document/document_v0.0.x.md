# 需求文档 v0.0.3

## 版块

- 基本上保留旧版论坛版块分类
- 组联和漫画区合并

## 帖子骨架

- 一个主贴（Thread）下只存在一级回帖（Message）。
- 回复帖中添加被回复帖的引用；被回复帖中添加回复帖的引用。
- 引用只表示一层，一对多时并列显示。

## 回帖输入模式

- 默认富文本，可选 Markdown。
- 帖子内容由哪种方式渲染由选择的输入模式决定。

## 帖子构成

- 用戸信息面板（Panel）。
- 共同创作标签。
- 图片小图预览。

## 图片相关功能

- 漫画等批量图片上传采用云服务对象存储（Cloud Object Storage, COS）托管，CDN(Content Delivery Network) 外链的方式进行。
- 寻找或开发一个人机功效更高的图片浏览器。

## 其他功能

- 骰子。

## 概念图

![requirements-document_v0](https://cdn.staticaly.com/gh/SetsuikiHyoryu/image-bed@master/喵玉殿/requirements-document_v0.0.1_image.5m79h53vr200.webp)
