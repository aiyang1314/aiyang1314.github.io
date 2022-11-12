(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{517:function(e,t,p){"use strict";p.r(t);var v=p(5),s=Object(v.a)({},(function(){var e=this,t=e.$createElement,p=e._self._c||t;return p("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[p("p",[p("strong",[e._v("1.用户输入网址，浏览器发起DNS查询请求")])]),e._v(" "),p("p",[e._v("用户访问网页，DNS服务器（域名解析系统）会根据用户提供的域名查找对应的IP地址。")]),e._v(" "),p("p",[e._v("域名解析服务器是基于UDP协议实现的一个应用程序，通常通过监听53端口来获取客户端的域名解析请求。DNS查找过程如下：")]),e._v(" "),p("p",[e._v("浏览器缓存 – 浏览器会缓存DNS记录一段时间。 有趣的是，操作系统没有告诉浏览器储存DNS记录的时间，这样不同浏览器会储存个自固定的一个时间（2分钟到30分钟不等）。")]),e._v(" "),p("p",[e._v("系统缓存 – 如果在浏览器缓存里没有找到需要的记录，浏览器会做一个系统调用（windows里是gethostbyname）。这样便可获得系统缓存中的记录。")]),e._v(" "),p("p",[e._v("路由器缓存 – 接着，前面的查询请求发向路由器，它一般会有自己的DNS缓存。")]),e._v(" "),p("p",[e._v("ISP DNS 缓存 – 接下来要check的就是ISP缓存DNS的服务器。在这一般都能找到相应的缓存记录。")]),e._v(" "),p("p",[e._v("递归搜索 – 你的ISP的DNS服务器从跟域名服务器开始进行递归搜索，从.com顶级域名服务器到Facebook的域名服务器。一般DNS服务器的缓存中会有.com域名服务器中的域名，所以到顶级服务器的匹配过程不是那么必要了。")]),e._v(" "),p("p",[p("strong",[e._v("2、建立TCP连接")])]),e._v(" "),p("p",[e._v("浏览器通过DNS获取到web服务器真的IP地址后，便向web服务器发起tcp连接请求，通过TCP三次握手建立好连接后，浏览器便可以将HTTP请求数据通过发送给服务器了。")]),e._v(" "),p("p",[p("strong",[e._v("3、浏览器向 web 服务器发送一个 HTTP 请求")])]),e._v(" "),p("p",[e._v("HTTP请求是一个基于TCP协议之上的应用层协议——超文本传输协议。一个http事务由一条(从客户端发往服务器的)请求命令和一个(从服务器发回客户端的)响应结果组成。")]),e._v(" "),p("p",[p("img",{attrs:{src:"C:%5CUsers%5C19147%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20221106232010395.png",alt:"image-20221106232010395"}})]),e._v(" "),p("p",[p("strong",[e._v("4、发送响应数据给客户端")])]),e._v(" "),p("p",[e._v("Web服务器通常通过监听80端口，来获取客户端的HTTP请求。与客户端建立好TCP连接后，web服务器开始接受客户端发来的数据，并通过HTTP解码，从接受到的网络数据中解析出请求的url信息以前其他诸如Accept-Encoding、Accept-Language等信息。Web服务器根据HTTP请求头的信息，得到响应数据返回给客户端。一个典型的HTTP响应头数据报如下：")]),e._v(" "),p("p",[p("img",{attrs:{src:"C:%5CUsers%5C19147%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20221106232037774.png",alt:"image-20221106232037774"}})]),e._v(" "),p("p"),e._v(" "),p("p",[e._v("至此，一个HTTP通信过程完成。web服务器会根据HTTP请求头中的Connection字段值决定是否关闭TCP链接通道，当Connection字段值为keep-alive时，web服务器不会立即关闭此连接。（这一步一开始也许还会有重定向及浏览器跟踪重定向地址等）。")]),e._v(" "),p("p",[p("strong",[e._v("5、浏览器解析http response")])]),e._v(" "),p("p",[e._v("（1）html文档解析（DOM Tree）")]),e._v(" "),p("p",[e._v("在浏览器没有完整接受全部HTML文档时，它就已经开始显示这个页面了。生成解析树即dom树，是由dom元素及属性节点组成，树的根是document对象。")]),e._v(" "),p("p",[e._v("（2）浏览器发送获取嵌入在HTML中的对象")]),e._v(" "),p("p",[e._v("加载过程中遇到外部css文件，浏览器另外发出一个请求，来获取css文件。遇到图片资源，浏览器也会另外发出一个请求，来获取图片资源。这是异步请求，并不会影响html文档进行加载。")]),e._v(" "),p("p",[e._v("但是当文档加载过程中遇到js文件，html文档会挂起渲染（加载解析渲染同步）的线程，不仅要等待文档中js文件加载完毕，还要等待解析执行完毕，才可以恢复html文档的渲染线程。")]),e._v(" "),p("p",[e._v("（3）css解析（parser Render Tree）")]),e._v(" "),p("p",[e._v("浏览器下载css文件，将css文件解析为样式表对象，并用来渲染dom tree。该对象包含css规则，该规则包含选择器和声明对象。")]),e._v(" "),p("p",[e._v("css元素遍历的顺序，是从树的低端向上遍历。")]),e._v(" "),p("p",[e._v("（4）js解析")]),e._v(" "),p("p",[e._v("浏览器UI线程：单线程，大多数浏览器（比如chrome）让一个单线程共用于执行javascrip和更新用户界面。")]),e._v(" "),p("p",[e._v("js阻塞页面：浏览器里的http请求被阻塞一般都是由js所引起，具体原因是js文件在下载完毕之后会立即执行，而js执行时候会阻塞浏览器的其他行为，有一段时间是没有网络请求被处理的，这段时间过后http请求才会接着执行，这段空闲时间就是所谓的http请求被阻塞。")]),e._v(" "),p("p",[e._v("js阻塞原因：之所以会阻塞UI线程的执行，是因为js能控制UI的展示，而页面加载的规则是要顺序执行，所以在碰到js代码时候UI线程会首先执行它")]),e._v(" "),p("p",[e._v("参考："),p("a",{attrs:{href:"https://www.cnblogs.com/wpshan/p/6282061.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("天然呆"),p("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);