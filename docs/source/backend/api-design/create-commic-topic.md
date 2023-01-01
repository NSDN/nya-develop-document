# 创建漫画主题 API

## 说明

点击提交主题按钮时执行此 API。

## HTTP 基本信息

- URL: `/topic/commic`
- Method: POST
- Content-Type: application/json

## Request Body

|物理名|理论名|类型|必须|
|-|-|-|-|
|topicTitle|主题标题|string|true|
|pages|图片列表|Commic.Page[]|true|

### Commic.Page

|物理名|理论名|类型|必须|说明|
|-|-|-|-|-|
|id|主键|number|true|数组中的元素下标|
|path|图标地址|string|true|初始为空或为用户图床中的地址|
|name|图片名称|string|true||
|content|图片文件本体|Blob|false|用户上传文件时使用此属性|

## Response

- 正常: 状态码
- 异常： 状态码 + 错误信息
