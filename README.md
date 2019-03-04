##这里介绍一下
##### name 
组件名称
##### style 
css文件地址，可以是数组，可以是字符串 
##### component 
html解构体
```
{
        type: "div",
        props: {
            className: "header",
             style: {
                width: '100%',
                height: '50px'
            }
        },
        children:"hello word"
    }
```

##### type
html标签类型
##### props
行内元素 
*** 这里暂时没有事件绑定和特殊自定义行内元素的支持***
##### children
子级标签，或者是标签内的文字节点。如果是多个例如ul
```
children:[
	{
		type:"li",
		props:{className:"aaa"},
		children:"hello word"
	},
	{
		type:"li",
		props:{className:"aaa"},
		children:"hello word"
	},
	{
		type:"li",
		props:{className:"aaa"},
		children:"hello word"
	}
]
```