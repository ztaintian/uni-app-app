# 直聊招聘 App

一个基于 uni-app + Vue 3 的招聘 App 原型，界面和交互风格参考 Boss 直聘：职位浏览、在线沟通、个人中心三大核心模块。

## 功能模块

- 职位：首页展示岗位推荐、搜索框、筛选标签、岗位卡片、公司信息和招聘者状态。
- 沟通：展示招聘者会话列表，支持全部、未读、已约面筛选。
- 我的：展示求职者资料、简历完整度、求职意向和常用功能入口。
- 底部导航：三个主菜单共用同一个导航组件，点击后跳转到真实页面。

## 技术栈

- uni-app
- Vue 3
- Vue 3 Composition API
- `<script setup>`
- rpx 移动端适配

## 目录结构

```text
.
├── App.vue
├── main.js
├── manifest.json
├── pages.json
├── AGENTS.md
├── components/
│   ├── AppSearchBar.vue
│   ├── BottomNav.vue
│   ├── FilterChips.vue
│   └── JobCard.vue
├── data/
│   ├── jobs.js
│   ├── messages.js
│   └── profile.js
├── pages/
│   ├── index/index.vue
│   ├── chat/chat.vue
│   └── profile/profile.vue
├── static/
└── utils/
    ├── job.js
    └── navigation.js
```

## 关键文件说明

- `pages/index/index.vue`: 职位页面，负责岗位搜索、筛选和列表展示。
- `pages/chat/chat.vue`: 沟通页面，负责会话列表和消息状态筛选。
- `pages/profile/profile.vue`: 我的页面，负责个人资料、求职意向和功能入口。
- `components/BottomNav.vue`: 公共底部导航组件。
- `components/AppSearchBar.vue`: 公共搜索组件。
- `components/FilterChips.vue`: 公共筛选标签组件。
- `components/JobCard.vue`: 公共岗位卡片组件。
- `utils/job.js`: 岗位格式化、搜索、筛选方法。
- `utils/navigation.js`: 底部导航配置和跳转方法。
- `data/`: 页面使用的本地模拟数据。
- `AGENTS.md`: 本项目给 coding agent 使用的开发约定。

## 运行方式

当前项目没有 `package.json`，也没有 npm 脚本。

推荐使用 HBuilderX：

1. 使用 HBuilderX 打开项目目录。
2. 选择运行到浏览器、模拟器或手机。
3. 从底部导航切换 `职位`、`沟通`、`我的` 三个页面。

## 开发约定

- 新页面优先使用 Vue 3 组合式写法和 `<script setup>`。
- 页面负责状态和组装，公共 UI 拆到 `components/`。
- 模拟数据放到 `data/`。
- 公共方法放到 `utils/`。
- 新增页面必须注册到 `pages.json`。
- 新增底部菜单需要同步更新 `utils/navigation.js` 和 `pages.json`。
- 尽量保持移动端界面简洁、清晰、稳定，不要把页面写成单个超大文件。

## 后续可扩展方向

- 接入真实岗位接口。
- 增加岗位详情页。
- 增加聊天详情页。
- 增加简历编辑页。
- 增加登录和用户状态管理。
