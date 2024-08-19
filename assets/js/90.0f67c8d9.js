(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{368:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"面试官-你在react项目中是如何使用redux的-项目结构是如何划分的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试官-你在react项目中是如何使用redux的-项目结构是如何划分的"}},[s._v("#")]),s._v(" 面试官：你在React项目中是如何使用Redux的? 项目结构是如何划分的？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/31a4aff0-e7dc-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"一、背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、背景"}},[s._v("#")]),s._v(" 一、背景")]),s._v(" "),t("p",[s._v("在前面文章了解中，我们了解到"),t("code",[s._v("redux")]),s._v("是用于数据状态管理，而"),t("code",[s._v("react")]),s._v("是一个视图层面的库")]),s._v(" "),t("p",[s._v("如果将两者连接在一起，可以使用官方推荐"),t("code",[s._v("react-redux")]),s._v("库，其具有高效且灵活的特性")]),s._v(" "),t("p",[t("code",[s._v("react-redux")]),s._v("将组件分成：")]),s._v(" "),t("ul",[t("li",[s._v("容器组件：存在逻辑处理")]),s._v(" "),t("li",[s._v("UI 组件：只负责现显示和交互，内部不处理逻辑，状态由外部控制")])]),s._v(" "),t("p",[s._v("通过"),t("code",[s._v("redux")]),s._v("将整个应用状态存储到"),t("code",[s._v("store")]),s._v("中，组件可以派发"),t("code",[s._v("dispatch")]),s._v("行为"),t("code",[s._v("action")]),s._v("给"),t("code",[s._v("store")])]),s._v(" "),t("p",[s._v("其他组件通过订阅"),t("code",[s._v("store")]),s._v("中的状态"),t("code",[s._v("state")]),s._v("来更新自身的视图")]),s._v(" "),t("h2",{attrs:{id:"二、如何做"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、如何做"}},[s._v("#")]),s._v(" 二、如何做")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("react-redux")]),s._v("分成了两大核心：")]),s._v(" "),t("ul",[t("li",[s._v("Provider")]),s._v(" "),t("li",[s._v("connection")])]),s._v(" "),t("h3",{attrs:{id:"provider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#provider"}},[s._v("#")]),s._v(" Provider")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("redux")]),s._v("中存在一个"),t("code",[s._v("store")]),s._v("用于存储"),t("code",[s._v("state")]),s._v("，如果将这个"),t("code",[s._v("store")]),s._v("存放在顶层元素中，其他组件都被包裹在顶层元素之上")]),s._v(" "),t("p",[s._v("那么所有的组件都能够受到"),t("code",[s._v("redux")]),s._v("的控制，都能够获取到"),t("code",[s._v("redux")]),s._v("中的数据")]),s._v(" "),t("p",[s._v("使用方式如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Provider store "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("store"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("App "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Provider"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"connection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[s._v("#")]),s._v(" connection")]),s._v(" "),t("p",[t("code",[s._v("connect")]),s._v("方法将"),t("code",[s._v("store")]),s._v("上的"),t("code",[s._v("getState")]),s._v("和 "),t("code",[s._v("dispatch")]),s._v("包装成组件的"),t("code",[s._v("props")])]),s._v(" "),t("p",[s._v("导入"),t("code",[s._v("conect")]),s._v("如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" connect "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-redux"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("用法如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("connect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mapStateToProps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mapDispatchToProps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MyComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以传递两个参数：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("mapStateToProps")])]),s._v(" "),t("li",[t("p",[s._v("mapDispatchToProps")])])]),s._v(" "),t("h3",{attrs:{id:"mapstatetoprops"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mapstatetoprops"}},[s._v("#")]),s._v(" mapStateToProps")]),s._v(" "),t("p",[s._v("把"),t("code",[s._v("redux")]),s._v("中的数据映射到"),t("code",[s._v("react")]),s._v("中的"),t("code",[s._v("props")]),s._v("中去")]),s._v(" "),t("p",[s._v("如下：")]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("mapStateToProps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("state")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// prop : state.xxx  | 意思是将state中的某个数据映射到props中")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" state"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bar\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("组件内部就能够通过"),t("code",[s._v("props")]),s._v("获取到"),t("code",[s._v("store")]),s._v("中的数据")]),s._v(" "),t("div",{staticClass:"language-cons line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("class Foo extends Component {\n    constructor(props){\n        super(props);\n    }\n    render(){\n        return(\n         // 这样子渲染的其实就是state.bar的数据了\n            <div>this.props.foo</div>\n        )\n    }\n}\nFoo = connect()(Foo)\nexport default Foo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"mapdispatchtoprops"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mapdispatchtoprops"}},[s._v("#")]),s._v(" mapDispatchToProps")]),s._v(" "),t("p",[s._v("将"),t("code",[s._v("redux")]),s._v("中的"),t("code",[s._v("dispatch")]),s._v("映射到组件内部的"),t("code",[s._v("props")]),s._v("中")]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("mapDispatchToProps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("dispatch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认传递参数就是dispatch")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onClick")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dispatch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'increatment'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Component")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("props")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n         \n             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button onClick "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onClick"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("点击increase"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nFoo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("connect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" Foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("整体流程图大致如下所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/3e47db10-e7dc-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"三、项目结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、项目结构"}},[s._v("#")]),s._v(" 三、项目结构")]),s._v(" "),t("p",[s._v("可以根据项目具体情况进行选择，以下列出两种常见的组织结构")]),s._v(" "),t("h4",{attrs:{id:"按角色组织-mvc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按角色组织-mvc"}},[s._v("#")]),s._v(" 按角色组织（MVC）")]),s._v(" "),t("p",[s._v("角色如下：")]),s._v(" "),t("ul",[t("li",[s._v("reducers")]),s._v(" "),t("li",[s._v("actions")]),s._v(" "),t("li",[s._v("components")]),s._v(" "),t("li",[s._v("containers")])]),s._v(" "),t("p",[s._v("参考如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("reducers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n  todoReducer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  filterReducer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\nactions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n  todoAction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  filterActions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\ncomponents"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n  todoList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  todoItem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  filter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\ncontainers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n  todoListContainer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  todoItemContainer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  filterContainer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h4",{attrs:{id:"按功能组织"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按功能组织"}},[s._v("#")]),s._v(" 按功能组织")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("redux")]),s._v("使用功能组织项目，也就是把完成同一应用功能的代码放在一个目录下，一个应用功能包含多个角色的代码")]),s._v(" "),t("p",[t("code",[s._v("Redux")]),s._v("中，不同的角色就是"),t("code",[s._v("reducer")]),s._v("、"),t("code",[s._v("actions")]),s._v("和视图，而应用功能对应的就是用户界面的交互模块")]),s._v(" "),t("p",[s._v("参考如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("todoList"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n  actions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  actionTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  reducer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  views"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n    components"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    containers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\nfilter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n  actions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  actionTypes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  reducer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  views"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n    components"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    container"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("每个功能模块对应一个目录，每个目录下包含同样的角色文件：")]),s._v(" "),t("ul",[t("li",[s._v("actionTypes.js 定义action类型")]),s._v(" "),t("li",[s._v("actions.js 定义action构造函数")]),s._v(" "),t("li",[s._v("reducer.js  定义这个功能模块如果响应actions.js定义的动作")]),s._v(" "),t("li",[s._v("views 包含功能模块中所有的React组件，包括展示组件和容器组件")]),s._v(" "),t("li",[s._v("index.js 把所有的角色导入，统一导出")])]),s._v(" "),t("p",[s._v("其中"),t("code",[s._v("index")]),s._v("模块用于导出对外的接口")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" actions "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./actions.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" reducer "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./reducer.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" view "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./views/container.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" actions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reducer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" view "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("导入方法如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" actions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reducer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" view "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" TodoList "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./xxxx'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("ul",[t("li",[s._v("https://www.redux.org.cn/docs/basics/UsageWithReact.html")]),s._v(" "),t("li",[s._v("https://segmentfault.com/a/1190000010384268")])])])}),[],!1,null,null,null);t.default=e.exports}}]);