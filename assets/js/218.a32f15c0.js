(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{488:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"面试官-vue组件之间的通信方式都有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试官-vue组件之间的通信方式都有哪些"}},[s._v("#")]),s._v(" 面试官：Vue组件之间的通信方式都有哪些？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/7de50d20-3aca-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"一、组件间通信的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、组件间通信的概念"}},[s._v("#")]),s._v(" 一、组件间通信的概念")]),s._v(" "),t("p",[s._v("开始之前，我们把"),t("strong",[s._v("组件间通信")]),s._v("这个词进行拆分")]),s._v(" "),t("ul",[t("li",[s._v("组件")]),s._v(" "),t("li",[s._v("通信")])]),s._v(" "),t("p",[s._v("都知道组件是"),t("code",[s._v("vue")]),s._v("最强大的功能之一，"),t("code",[s._v("vue")]),s._v("中每一个"),t("code",[s._v(".vue")]),s._v("我们都可以视之为一个组件通信指的是发送者通过某种媒体以某种格式来传递信息到收信者以达到某个目的。广义上，任何信息的交通都是通信"),t("strong",[s._v("组件间通信")]),s._v("即指组件("),t("code",[s._v(".vue")]),s._v(")通过某种方式来传递信息以达到某个目的举个栗子我们在使用"),t("code",[s._v("UI")]),s._v("框架中的"),t("code",[s._v("table")]),s._v("组件，可能会往"),t("code",[s._v("table")]),s._v("组件中传入某些数据，这个本质就形成了组件之间的通信")]),s._v(" "),t("h2",{attrs:{id:"二、组件间通信解决了什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、组件间通信解决了什么"}},[s._v("#")]),s._v(" 二、组件间通信解决了什么")]),s._v(" "),t("p",[s._v("在古代，人们通过驿站、飞鸽传书、烽火报警、符号、语言、眼神、触碰等方式进行信息传递，到了今天，随着科技水平的飞速发展，通信基本完全利用有线或无线电完成，相继出现了有线电话、固定电话、无线电话、手机、互联网甚至视频电话等各种通信方式从上面这段话，我们可以看到通信的本质是信息同步，共享回到"),t("code",[s._v("vue")]),s._v("中，每个组件之间的都有独自的作用域，组件间的数据是无法共享的但实际开发工作中我们常常需要让组件之间共享数据，这也是组件通信的目的要让它们互相之间能进行通讯，这样才能构成一个有机的完整系统")]),s._v(" "),t("h2",{attrs:{id:"二、组件间通信的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、组件间通信的分类"}},[s._v("#")]),s._v(" 二、组件间通信的分类")]),s._v(" "),t("p",[s._v("组件间通信的分类可以分成以下")]),s._v(" "),t("ul",[t("li",[s._v("父子组件之间的通信")]),s._v(" "),t("li",[s._v("兄弟组件之间的通信")]),s._v(" "),t("li",[s._v("祖孙与后代组件之间的通信")]),s._v(" "),t("li",[s._v("非关系组件间之间的通信")])]),s._v(" "),t("p",[s._v("关系图:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/85b92400-3aca-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"三、组件间通信的方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、组件间通信的方案"}},[s._v("#")]),s._v(" 三、组件间通信的方案")]),s._v(" "),t("p",[s._v("整理"),t("code",[s._v("vue")]),s._v("中8种常规的通信方案")]),s._v(" "),t("ol",[t("li",[s._v("通过 props 传递")]),s._v(" "),t("li",[s._v("通过 $emit 触发自定义事件")]),s._v(" "),t("li",[s._v("使用 ref")]),s._v(" "),t("li",[s._v("EventBus")]),s._v(" "),t("li",[s._v("$parent 或$root")]),s._v(" "),t("li",[s._v("attrs 与 listeners")]),s._v(" "),t("li",[s._v("Provide 与 Inject")]),s._v(" "),t("li",[s._v("Vuex")])]),s._v(" "),t("h3",{attrs:{id:"props传递数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props传递数据"}},[s._v("#")]),s._v(" props传递数据")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/8f80a670-3aca-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("适用场景：父组件传递数据给子组件")]),s._v(" "),t("li",[s._v("子组件设置"),t("code",[s._v("props")]),s._v("属性，定义接收父组件传递过来的参数")]),s._v(" "),t("li",[s._v("父组件在使用子组件标签中通过字面量来传递值")])]),s._v(" "),t("p",[t("code",[s._v("Children.vue")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("props")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字符串形式  ")]),s._v("\n name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("String "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接收的类型参数  ")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对象形式  ")]),s._v("\n    age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    \n        type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("Number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接收的类型为数值  ")]),s._v("\n        defaule"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认值为18  ")]),s._v("\n       require"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// age属性必须传递  ")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("code",[s._v("Father.vue")]),s._v("组件")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Children name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jack"')]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"emit-触发自定义事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#emit-触发自定义事件"}},[s._v("#")]),s._v(" $emit 触发自定义事件")]),s._v(" "),t("ul",[t("li",[s._v("适用场景：子组件传递数据给父组件")]),s._v(" "),t("li",[s._v("子组件通过"),t("code",[s._v("$emit触发")]),s._v("自定义事件，"),t("code",[s._v("$emit")]),s._v("第二个参数为传递的数值")]),s._v(" "),t("li",[s._v("父组件绑定监听器获取到子组件传递过来的参数")])]),s._v(" "),t("p",[t("code",[s._v("Chilfen.vue")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$emit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'add'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" good"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("Father.vue")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Children @add"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cartAdd($event)"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"ref"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[s._v("#")]),s._v(" ref")]),s._v(" "),t("ul",[t("li",[s._v("父组件在使用子组件的时候设置"),t("code",[s._v("ref")])]),s._v(" "),t("li",[s._v("父组件通过设置子组件"),t("code",[s._v("ref")]),s._v("来获取数据")])]),s._v(" "),t("p",[s._v("父组件")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Children ref"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$refs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取子组件实例，通过子组件实例我们就能拿到对应的数据  ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"eventbus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eventbus"}},[s._v("#")]),s._v(" EventBus")]),s._v(" "),t("ul",[t("li",[s._v("使用场景：兄弟组件传值")]),s._v(" "),t("li",[s._v("创建一个中央事件总线"),t("code",[s._v("EventBus")])]),s._v(" "),t("li",[s._v("兄弟组件通过"),t("code",[s._v("$emit")]),s._v("触发自定义事件，"),t("code",[s._v("$emit")]),s._v("第二个参数为传递的数值")]),s._v(" "),t("li",[s._v("另一个兄弟组件通过"),t("code",[s._v("$on")]),s._v("监听自定义事件")])]),s._v(" "),t("p",[t("code",[s._v("Bus.js")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建一个中央时间总线类  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Bus")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callbacks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存放事件的名字  ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fn")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callbacks"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callbacks"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callbacks"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$emit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callbacks"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callbacks"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("cb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$bus "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Bus")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将$bus挂载到vue实例的原型上  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 另一种方式  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$bus "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Vue已经实现了Bus的功能  ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[t("code",[s._v("Children1.vue")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$bus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$emit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("Children2.vue")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$bus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("handle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"parent-或-root"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parent-或-root"}},[s._v("#")]),s._v(" $parent 或$ root")]),s._v(" "),t("ul",[t("li",[s._v("通过共同祖辈"),t("code",[s._v("$parent")]),s._v("或者"),t("code",[s._v("$root")]),s._v("搭建通信桥连")])]),s._v(" "),t("p",[s._v("兄弟组件")]),s._v(" "),t("p",[t("code",[s._v("this.$parent.on('add',this.add)")])]),s._v(" "),t("p",[s._v("另一个兄弟组件")]),s._v(" "),t("p",[t("code",[s._v("this.$parent.emit('add')")])]),s._v(" "),t("h3",{attrs:{id:"attrs-与-listeners"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attrs-与-listeners"}},[s._v("#")]),s._v(" $attrs  与$ listeners")]),s._v(" "),t("ul",[t("li",[s._v("适用场景：祖先传递数据给子孙")]),s._v(" "),t("li",[s._v("设置批量向下传属性"),t("code",[s._v("$attrs")]),s._v("和 "),t("code",[s._v("$listeners")])]),s._v(" "),t("li",[s._v("包含了父级作用域中不作为 "),t("code",[s._v("prop")]),s._v(" 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。")]),s._v(" "),t("li",[s._v("可以通过 "),t("code",[s._v('v-bind="$attrs"')]),s._v(" 传⼊内部组件")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// child：并未在props中声明foo  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$attrs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parent  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("HelloWorld foo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 给Grandson隔代传值，communication/index.vue  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Child2 msg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lalala"')]),s._v(" @some"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("event"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"onSomeEvent"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Child2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Child2做展开  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Grandson v"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bind"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$attrs"')]),s._v(" v"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("on"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$listeners"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Grandson"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Grandson使⽤  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div @click"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$emit('some-event', 'msg from grandson')\"")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"provide-与-inject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#provide-与-inject"}},[s._v("#")]),s._v(" provide 与 inject")]),s._v(" "),t("ul",[t("li",[s._v("在祖先组件定义"),t("code",[s._v("provide")]),s._v("属性，返回传递的值")]),s._v(" "),t("li",[s._v("在后代组件通过"),t("code",[s._v("inject")]),s._v("接收组件传递过来的值")])]),s._v(" "),t("p",[s._v("祖先组件")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("provide")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n        foo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("后代组件")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("inject")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取到祖先组件传递过来的值  ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"vuex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[s._v("#")]),s._v(" "),t("code",[s._v("vuex")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("适用场景: 复杂关系的组件数据传递")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Vuex")]),s._v("作用相当于一个用来存储共享变量的容器\n"),t("img",{attrs:{src:"https://static.vue-js.com/fa207cd0-3aca-11eb-ab90-d9ae814b240d.png",alt:""}})])]),s._v(" "),t("li",[t("p",[t("code",[s._v("state")]),s._v("用来存放共享变量的地方")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("getter")]),s._v("，可以增加一个"),t("code",[s._v("getter")]),s._v("派生状态，(相当于"),t("code",[s._v("store")]),s._v("中的计算属性），用来获得共享变量的值")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("mutations")]),s._v("用来存放修改"),t("code",[s._v("state")]),s._v("的方法。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("actions")]),s._v("也是用来存放修改state的方法，不过"),t("code",[s._v("action")]),s._v("是在"),t("code",[s._v("mutations")]),s._v("的基础上进行。常用来做一些异步操作")])])]),s._v(" "),t("h3",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("ul",[t("li",[s._v("父子关系的组件数据传递选择 "),t("code",[s._v("props")]),s._v("  与 "),t("code",[s._v("$emit")]),s._v("进行传递，也可选择"),t("code",[s._v("ref")])]),s._v(" "),t("li",[s._v("兄弟关系的组件数据传递可选择"),t("code",[s._v("$bus")]),s._v("，其次可以选择"),t("code",[s._v("$parent")]),s._v("进行传递")]),s._v(" "),t("li",[s._v("祖先与后代组件数据传递可选择"),t("code",[s._v("attrs")]),s._v("与"),t("code",[s._v("listeners")]),s._v("或者 "),t("code",[s._v("Provide")]),s._v("与 "),t("code",[s._v("Inject")])]),s._v(" "),t("li",[s._v("复杂关系的组件数据传递可以通过"),t("code",[s._v("vuex")]),s._v("存放共享的变量")])]),s._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("ul",[t("li",[s._v("https://juejin.cn/post/6844903990052782094#heading-0")]),s._v(" "),t("li",[s._v("https://zh.wikipedia.org/wiki/%E9%80%9A%E4%BF%A1")]),s._v(" "),t("li",[s._v("https://vue3js.cn/docs/zh")])]),s._v(" "),t("p",[s._v("面试官VUE系列总进度：5／33")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484101&idx=1&sn=83b0983f0fca7d7c556e4cb0bff8c9b8&chksm=fc10c093cb674985ef3bd2966f66fc28c5eb70b0037e4be1af4bf54fb6fa9571985abd31d52f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("面试官：说说你对vue的理解?"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484119&idx=1&sn=d171b28a00d42549d279498944a98519&chksm=fc10c081cb6749976814aaeda6a6433db418223cec57edda7e15b9e5a0ca69ad549655639c61&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("面试官：说说你对SPA（单页应用）的理解?"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484167&idx=1&sn=7b00b4333ab2722f25f12586b70667ca&chksm=fc10c151cb6748476008dab2f4e6c6264f5d19678305955c85cec1b619e56e8f7457b7357fb9&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("面试官：说说你对双向绑定的理解?"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484176&idx=1&sn=5623421ed2678046ed9e438aadf6e26f&chksm=fc10c146cb67485015f24f7e9f5862c4c685fc33485fe30e1b375a534b4031978439c554e0c0&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("面试官：说说你对Vue生命周期的理解?"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/821b87b0-3ac6-11eb-ab90-d9ae814b240d.png",alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);