(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{401:function(t,a,v){"use strict";v.r(a);var _=v(14),e=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-说说微信小程序的生命周期函数有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说微信小程序的生命周期函数有哪些"}},[t._v("#")]),t._v(" 面试官：说说微信小程序的生命周期函数有哪些？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/1df64890-30e0-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),a("p",[t._v("跟"),a("code",[t._v("vue")]),t._v("、"),a("code",[t._v("react")]),t._v("框架一样，微信小程序框架也存在生命周期，实质也是一堆会在特定时期执行的函数")]),t._v(" "),a("p",[t._v("小程序中，生命周期主要分成了三部分：")]),t._v(" "),a("ul",[a("li",[t._v("应用的生命周期")]),t._v(" "),a("li",[t._v("页面的生命周期")]),t._v(" "),a("li",[t._v("组件的生命周期")])]),t._v(" "),a("h3",{attrs:{id:"应用的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用的生命周期"}},[t._v("#")]),t._v(" 应用的生命周期")]),t._v(" "),a("p",[t._v("小程序的生命周期函数是在"),a("code",[t._v("app.js")]),t._v("里面调用的，通过"),a("code",[t._v("App(Object)")]),t._v("函数用来注册一个小程序，指定其小程序的生命周期回调")]),t._v(" "),a("h3",{attrs:{id:"页面的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面的生命周期"}},[t._v("#")]),t._v(" 页面的生命周期")]),t._v(" "),a("p",[t._v("页面生命周期函数就是当你每进入/切换到一个新的页面的时候，就会调用的生命周期函数，同样通过"),a("code",[t._v("App(Object)")]),t._v("函数用来注册一个页面")]),t._v(" "),a("h3",{attrs:{id:"组件的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的生命周期"}},[t._v("#")]),t._v(" 组件的生命周期")]),t._v(" "),a("p",[t._v("组件的生命周期，指的是组件自身的一些函数，这些函数在特殊的时间点或遇到一些特殊的框架事件时被自动触发，通过"),a("code",[t._v("Component(Object)")]),t._v("进行注册组件")]),t._v(" "),a("h2",{attrs:{id:"二、有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、有哪些"}},[t._v("#")]),t._v(" 二、有哪些")]),t._v(" "),a("h3",{attrs:{id:"应用的生命周期-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用的生命周期-2"}},[t._v("#")]),t._v(" 应用的生命周期")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("生命周期")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("onLaunch")]),t._v(" "),a("td",[t._v("小程序初始化完成时触发，全局只触发一次")])]),t._v(" "),a("tr",[a("td",[t._v("onShow")]),t._v(" "),a("td",[t._v("小程序启动，或从后台进入前台显示时触发")])]),t._v(" "),a("tr",[a("td",[t._v("onHide")]),t._v(" "),a("td",[t._v("小程序从前台进入后台时触发")])]),t._v(" "),a("tr",[a("td",[t._v("onError")]),t._v(" "),a("td",[t._v("小程序发生脚本错误或 API 调用报错时触发")])]),t._v(" "),a("tr",[a("td",[t._v("onPageNotFound")]),t._v(" "),a("td",[t._v("小程序要打开的页面不存在时触发")])]),t._v(" "),a("tr",[a("td",[t._v("onUnhandledRejection()")]),t._v(" "),a("td",[t._v("小程序有未处理的 Promise 拒绝时触发")])]),t._v(" "),a("tr",[a("td",[t._v("onThemeChange")]),t._v(" "),a("td",[t._v("系统切换主题时触发")])])])]),t._v(" "),a("h3",{attrs:{id:"页面的生命周期-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面的生命周期-2"}},[t._v("#")]),t._v(" 页面的生命周期")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("生命周期")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("onLoad")]),t._v(" "),a("td",[t._v("生命周期回调—监听页面加载")]),t._v(" "),a("td",[t._v("发送请求获取数据")])]),t._v(" "),a("tr",[a("td",[t._v("onShow")]),t._v(" "),a("td",[t._v("生命周期回调—监听页面显示")]),t._v(" "),a("td",[t._v("请求数据")])]),t._v(" "),a("tr",[a("td",[t._v("onReady")]),t._v(" "),a("td",[t._v("生命周期回调—监听页面初次渲染完成")]),t._v(" "),a("td",[t._v("获取页面元素（少用）")])]),t._v(" "),a("tr",[a("td",[t._v("onHide")]),t._v(" "),a("td",[t._v("生命周期回调—监听页面隐藏")]),t._v(" "),a("td",[t._v("终止任务，如定时器或者播放音乐")])]),t._v(" "),a("tr",[a("td",[t._v("onUnload")]),t._v(" "),a("td",[t._v("生命周期回调—监听页面卸载")]),t._v(" "),a("td",[t._v("终止任务")])])])]),t._v(" "),a("h3",{attrs:{id:"组件的生命周期-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的生命周期-2"}},[t._v("#")]),t._v(" 组件的生命周期")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("生命周期")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("created")]),t._v(" "),a("td",[t._v("生命周期回调—监听页面加载")])]),t._v(" "),a("tr",[a("td",[t._v("attached")]),t._v(" "),a("td",[t._v("生命周期回调—监听页面显示")])]),t._v(" "),a("tr",[a("td",[t._v("ready")]),t._v(" "),a("td",[t._v("生命周期回调—监听页面初次渲染完成")])]),t._v(" "),a("tr",[a("td",[t._v("moved")]),t._v(" "),a("td",[t._v("生命周期回调—监听页面隐藏")])]),t._v(" "),a("tr",[a("td",[t._v("detached")]),t._v(" "),a("td",[t._v("生命周期回调—监听页面卸载")])]),t._v(" "),a("tr",[a("td",[t._v("error")]),t._v(" "),a("td",[t._v("每当组件方法抛出错误时执行")])])])]),t._v(" "),a("p",[t._v("注意的是：")]),t._v(" "),a("ul",[a("li",[t._v("组件实例刚刚被创建好时， created 生命周期被触发，此时，组件数据 this.data 就是在 Component  构造器中定义的数据 data ， 此时不能调用 setData")]),t._v(" "),a("li",[t._v("在组件完全初始化完毕、进入页面节点树后， attached 生命周期被触发。此时， this.data 已被初始化为组件的当前值。这个生命周期很有用，绝大多数初始化工作可以在这个时机进行")]),t._v(" "),a("li",[t._v("在组件离开页面节点树后， detached 生命周期被触发。退出一个页面时，如果组件还在页面节点树中，则  detached 会被触发")])]),t._v(" "),a("p",[t._v("还有一些特殊的生命周期，它们并非与组件有很强的关联，但有时组件需要获知，以便组件内部处理，这样的生命周期称为“组件所在页面的生命周期”，在 "),a("code",[t._v("pageLifetimes")]),t._v(" 定义段中定义，如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("生命周期")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("组件所在的页面被展示时执行")])]),t._v(" "),a("tr",[a("td",[t._v("hide")]),t._v(" "),a("td",[t._v("组件所在的页面被隐藏时执行")])])])]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pageLifetimes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面被展示")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hide")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面被隐藏")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"三、执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、执行过程"}},[t._v("#")]),t._v(" 三、执行过程")]),t._v(" "),a("h3",{attrs:{id:"应用的生命周期执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用的生命周期执行过程"}},[t._v("#")]),t._v(" 应⽤的⽣命周期执行过程：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("⽤户⾸次打开⼩程序，触发 onLaunch（全局只触发⼀次）")])]),t._v(" "),a("li",[a("p",[t._v("⼩程序初始化完成后，触发onShow⽅法，监听⼩程序显示")])]),t._v(" "),a("li",[a("p",[t._v("⼩程序从前台进⼊后台，触发 onHide⽅法")])]),t._v(" "),a("li",[a("p",[t._v("⼩程序从后台进⼊前台显示，触发 onShow⽅法")])]),t._v(" "),a("li",[a("p",[t._v("⼩程序后台运⾏⼀定时间，或系统资源占⽤过⾼，会被销毁")])])]),t._v(" "),a("h3",{attrs:{id:"⻚面生命周期的执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⻚面生命周期的执行过程"}},[t._v("#")]),t._v(" ⻚⾯⽣命周期的执行过程：")]),t._v(" "),a("ul",[a("li",[t._v("⼩程序注册完成后，加载⻚⾯，触发onLoad⽅法")]),t._v(" "),a("li",[t._v("⻚⾯载⼊后触发onShow⽅法，显示⻚⾯")]),t._v(" "),a("li",[t._v("⾸次显示⻚⾯，会触发onReady⽅法，渲染⻚⾯元素和样式，⼀个⻚⾯只会调⽤⼀次")]),t._v(" "),a("li",[t._v("当⼩程序后台运⾏或跳转到其他⻚⾯时，触发onHide⽅法")]),t._v(" "),a("li",[t._v("当⼩程序有后台进⼊到前台运⾏或重新进⼊⻚⾯时，触发onShow⽅法")]),t._v(" "),a("li",[t._v("当使⽤重定向⽅法 wx.redirectTo() 或关闭当前⻚返回上⼀⻚wx.navigateBack()，触发onUnload")])]),t._v(" "),a("p",[t._v("当存在也应用生命周期和页面周期的时候，相关的执行顺序如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("打开小程序：(App)onLaunch --\x3e (App)onShow --\x3e (Pages)onLoad --\x3e (Pages)onShow --\x3e (pages)onRead")])]),t._v(" "),a("li",[a("p",[t._v("进入下一个页面：(Pages)onHide --\x3e (Next)onLoad --\x3e (Next)onShow --\x3e (Next)onReady")])]),t._v(" "),a("li",[a("p",[t._v("返回上一个页面：(curr)onUnload --\x3e (pre)onShow")])]),t._v(" "),a("li",[a("p",[t._v("离开小程序：(App)onHide")])]),t._v(" "),a("li",[a("p",[t._v("再次进入：小程序未销毁 --\x3e (App)onShow(执行上面的顺序），小程序被销毁，（App)onLaunch重新开始执行.")])])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onLaunch-Object-object")]),t._v(" "),a("li",[t._v("https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onLoad-Object-query")]),t._v(" "),a("li",[t._v("https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onLaunch-Object-object")])])])}),[],!1,null,null,null);a.default=e.exports}}]);