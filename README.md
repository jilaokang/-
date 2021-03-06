### 武汉学院-智慧校园开发

````
 启动：2017年11月20号

 执行：武汉学院·研发组
````
[点我预览]( http://volcan.gitee.io/college_info/ )


<br/>

### 开发说明
##### 前端技术栈

- [x] html & css & weui框架
- [ ] jade & scss & vue

##### 后台技术栈
- [x] php & thinkphp框架

<br/>

### 目录结构

````
核心目录在./docs/html中，里面为各个子功能开发文件

college_info
│   README.md 说明文档
│   index.html 首页    
│
└───docs 功能目录
│   └───html 所有的小功能存放目录
│   │      02.network 网络报修目
│   │      03.Bus 校车查询
│   │      05.buyUsed 二手易购
│   │      ...
│   │      ...
│   │      ...
│   │      common 公共html模板目录
│   │    
│   └───scss 所有的样式目录
│       │   main.scss 所有css的集合文件
│       │
│       └───block
│              block.scss 独立对各块不同样式
│              diy.scss 自己写的html模块样式
│              var.scss 各类基础变量
│              weui.scss 对weui框架的改造
│   
└───lib 框架文件存放目录
│       └───jquery 
│           vue
│           Weui
│  
└───scss 专为首页开发的scss，不用管
    node_modules 附加工具，不用管
````

<br/>

### 功能列表

````
功能列表分为自主开发，第三方开发
````

| 所属     | 编号  | 名称               | 对象  | 时间  | 是否完成 |
| :------: | :---: | :----------------: | :---: | :---: | :------: |
| 生活服务 | 01    | 一卡通             | 全体  | 一期  | 新开普   |
|          | 02    | 电信报修           | 全体  | 一期  | 完成     |
|          | 03    | 校车班次           | 全体  |       | 完成     |
|          | 04    | 团购               | 全体  |       | 删去     |
|          | 05    | 二手市场           | 全体  |       | 完成     |
|          | 06    | 活动报名           | 全体  |       |          |
|          | 07    | 运动               | 全体  |       |          |
||08|兼职|学生|二期||
| 教学服务 | 21    | 校历               | 全体  | 一期  | 完成     |
|          | 22    | 图书借阅           | 全体  |       |          |
|          | 23    | 座位预约           | 全体  |       |          |
|          | 24    | 课表查询           | 全体  | 一期  |          |
|          | 25    | 成绩比例           | 老师  |       |          |
|          | 26    | 评教查询           | 老师  | 一期  |          |
|          | 27    | 工作量查询         | 老师  |       |          |
|          | 28    | 监考查询           | 老师  | 一期  |          |
|          | 29    | 成绩查询           | 全体  | 一期  | 完成     |
|          | 30    | 教师信息           | 全体  | 一期  | 完成     |
|          | 31    | 计算机、四六级报名 | 学生  | 一期  |          |
|          | 32    | 工资查询           | 老师  |       | 第三方   |
| 办事大厅 | 41    | 请假               | 老师  |       |          |
|          | 42    | 奖助学金           | 学生  |       |  新开普        |
|          | 43    | 教室借用           | 全体  | 一期  |          |
|          | 44    | 调课申请           | 老师  |       |          |
|          | 45    | OA                 | 老师  |       | 第三方   |
|          | 46    | 会议申请           | 老师  |       |          |
|          | 47    | 出勤车辆           | 老师  |       |          |
|          | 48    | 宿舍更换           | 学生  |       |          |
|          | 49    | 勤工助学           | 学生  |       |   新开普       |
|          | 50    | 心理预约           | 学生  |       | 新开普   |
|          | 51    | 假期住宿申请       | 学生  |       |          |
|          | 52    | 电信查询           | 全体  | 一期  | 删去     |
|          | 53    | 贫困生申请         | 学生  |       |     新开普     |
|          | 54    | 晚归报道           | 学生  |       |          |
  
<br/>
<br/>

```
爱我所爱，至死不渝

版权所有：武汉学院·信息中心·研发组
```
