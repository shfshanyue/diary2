# diary

## Introduction
原帖：[「集体日记」是不是只有在人群中才会觉得温暖](http://tieba.baidu.com/p/2674337275)
使用requests+bs4做爬虫收集帖子，在leancloud上使用cron设置定时任务，每天凌晨两点进行更新。爬虫在[tiankui](https://github.com/shfshanyue/tiankui)项目。

## API
`id`返回第id页的帖子，每页有50条帖子
> curl -X GET -d {id:1} http://tiankui.avosapps.com/tian/api

`username`返回指定user_id的所有帖子
> curl -X GET -d {user_id:383533325} http://tiankui.avosapps.com/tian/api

请求返回的响应示例如下，code为200表示成功返回，results表示返回的帖子集合。

``` json
{
    "code": 200,
    "results": [
        {
            "content": "<div> <img changedsize=\"false\" class=\"BDE_Smiley\" height=\"30\" pic_ext=\"png\" src=\"http://static.tieba.baidu.com/tb/editor/images/client/image_emoticon34.png\" width=\"30\"> 你好 大坑的每个人<br> 这里甜甜 一个大二女 希望做一个治愈的女孩<br> 我们一起写日记吧 让我们互相温暖好嘛</br></br></img></div>",
            "date": {
                "__type": "Date",
                "iso": "2013-10-28T06:29:00.000Z"
            },
            "img": [
                "http://imgsrc.baidu.com/forum/w%3D580/sign=9bc302d4a586c91708035231f93d70c6/410094ef76c6a7efc0124e0afffaaf51f3de66f3.jpg"
            ],
            "post_index": 0,
            "post_no": 1,
            "props": null,
            "user_id": 383533325,
            "user_name": "添添·甜甜",
            "user_sex": 2,
            "vote_crypt": ""
        },
        {
            "content": "<div>            在别的贴吧看到这种帖子，觉得真的很温暖，，希望自己也可以试一下</div>",
            "date": {
                "__type": "Date",
                "iso": "2013-10-28T06:30:00.000Z"
            },
            "img": [],
            "post_index": 1,
            "post_no": 2,
            "props": null,
            "user_id": 383533325,
            "user_name": "添添·甜甜",
            "user_sex": 2,
            "vote_crypt": ""
        }
    ]
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
