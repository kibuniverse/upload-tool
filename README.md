# 上传工具类



🎉 实现了大文件(大于2GB)并发切片上传，断点续传以及服务端验证秒传功能



### attention

该上传工具需要后台的支持，服务端使用了Node进行编写，在开始上传前请先启动服务，服务端的代码作为`server.js`放在本文件夹中，请与本文件夹中启动服务。

```mysql
node server.js
// 如果安装了pm2
pm2 start server.js
```



## 用法

> 该工具类使用`ts`编写，后转为`js`，默认引用的是`js`文件

默认上传的`ip`为本机`127.0.0.1`地址， 如需要更改地址可以修改`util`文件夹`ApiUrl.js`中的`ip`值



#### 参数描述

|         参数名          | 是否必须 |   类型   |                        描述                        |
| :---------------------: | :------: | :------: | :------------------------------------------------: |
|        chunkSize        |    ❌     |  number  |             每个文件上传时的切片的大小             |
|       concurrency       |    ❌     |  number  |               每个文件的并发上传数量               |
| updateWaitCalculateFile |    ✔     | function |   更新待计算hash数组，将待计算的数组作为参数传入   |
|  updateWaitUploadFile   |    ✔     | function |     更新待上传数组，将待上传的数组作为参数传入     |
|   updateUploadedFiles   |    ✔     | function | 更新已上传文件数组，将上传完成的的数组作为参数传入 |



#### 对外暴露的可调用方法

|    名称     |          接受参数          |                描述                |
| :---------: | :------------------------: | :--------------------------------: |
| addNewFiles | 新添加的文件数组<FileList> | 添加新文件，自动开始计算上传等流程 |





