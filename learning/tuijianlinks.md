# <center> 推荐链接  <center>

<div class="post-body">
   <div id="links">
      <style>
         .links-content{
         margin-top:1rem;
         }
         .link-navigation::after {
         content: " ";
         display: block;
         clear: both;
         }
         .card {
         width: 45%;
         font-size: 1rem;
         padding: 10px 20px;
         border-radius: 4px;
         transition-duration: 0.15s;
         margin-bottom: 1rem;
         display:flex;
         }
         .card:nth-child(odd) {
         float: left;
         }
         .card:nth-child(even) {
         float: right;
         }
         .card:hover {
         transform: scale(1.1);
         box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
         }
         .card a {
         border:none;
         }
         .card .ava {
         width: 3rem!important;
         height: 3rem!important;
         margin:0!important;
         margin-right: 1em!important;
         border-radius:4px;
         }
         .card .card-header {
         font-style: italic;
         overflow: hidden;
         width: 100%;
         }
         .card .card-header a {
         font-style: normal;
         color: #2bbc8a;
         font-weight: bold;
         text-decoration: none;
         }
         .card .card-header a:hover {
         color: #d480aa;
         text-decoration: none;
         }
         .card .card-header .info {
         font-style:normal;
         color:#a3a3a3;
         font-size:14px;
         min-width: 0;
         overflow: hidden;
         white-space: nowrap;
         }
      </style>
      <div class="links-content">
         <div class="link-navigation">
                     <div class="card">
               <img class="ava" src="https://www.neu.edu.cn/images/favicon.ico" />
               <div class="card-header">
                  <div>
                     <a href="https://eone.neu.edu.cn/">东北大学一网通</a>
                  </div>
                  <div class="info">自强不息，知行合一</div>
               </div>
            </div>
            <div class="card">
               <img class="ava" src="https://xn--xhq44jb2fzpc.com/icons/favicon.ico" />
               <div class="card-header">
                  <div>
                     <a href="https://www.东北大学.com/">NEU小站</a>
                  </div>
                  <div class="info">助学业和生活中更加得心应手</div>
               </div>
            </div>
             <div class="card">
               <img class="ava" src="https://www.neu.edu.cn/images/favicon.ico" />
               <div class="card-header">
                  <div>
                     <a href="http://mathe.neu.edu.cn/">东北大学机考网站</a>
                  </div>
                  <div class="info">官方网站，主要用作考试与预约</div>
               </div>
            </div>
             <div class="card">
               <img class="ava" src="https://neumathe.cn/favicon.ico" />
               <div class="card-header">
                  <div>
                     <a href="https://www.neumathe.cn/">东北大学机考题库</a>
                  </div>
                  <div class="info">非官方网站，主要刷题用</div>
               </div>
            </div>
            <div class="card">
               <img class="ava" src="https://course.educg.net/images/cgicon.png" />
               <div class="card-header">
                  <div>
                     <a href="http://neucsecg.neu.edu.cn/">cg平台</a>
                  </div>
                  <div class="info">信息类课作业与考试平台</div>
               </div>
            </div>
             <div class="card">
               <img class="ava" src="https://ts4.cn.mm.bing.net/th?id=ODLS.625f3b20-705e-4a5b-948d-eac03f40229d&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2">
               <div class="card-header">
                  <div>
                     <a href="https://www.icourse163.org/">中国大学MOOC</a>
                  </div>
                  <div class="info">别忘做作业哦：）</div>
               </div>
            </div>
            </div>
             <div class="card">
               <img class="ava" src="https://www.neu.edu.cn/images/favicon.ico">
               <div class="card-header">
                  <div>
                     <a href="http://software.neu.edu.cn/">东北大学正版软件</a>
                  </div>
                  <div class="info">供师生免费使用正版软件</div>
               </div>
            </div>
            <div class="card">
               <img class="ava" src="https://neu.sugrsertraline.cn/poached-eggs-svgrepo-com.svg">
               <div class="card-header">
                  <div>
                     <a href="https://neu.sugrsertraline.cn/">NEU Survive Guide</a>
                  </div>
                  <div class="info">为NEUer们提供的生存攻略</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</section>
</body>


# 
> 你可以通过在这些html代码中重复使用以下内容，来达到添加网站的目的
```html
 <div class="card">
               <img class="ava" src="https://neu.sugrsertraline.cn/poached-eggs-svgrepo-com.svg">
               <!--这段链接需要填网站标识图所在的路径，一般通过F12浏览器工具-元素<head></head>之间的icon或favicon找到--->
               <div class="card-header">
                  <div>
                     <a href="https://neu.sugrsertraline.cn/">NEU Survive Guide</a>
                      <!--这段链接是网站的链接，后面的文本是标题-->
                  </div>
                  <div class="info">为NEUer们提供的生存攻略</div>
                  <!--这是对这个网站的描述-->
               </div>
            </div>
```

## 那么效果如下 

 

 <div class="card">
               <img class="ava" src="https://neu.sugrsertraline.cn/poached-eggs-svgrepo-com.svg">
               <div class="card-header">
                  <div>
                     <a href="https://neu.sugrsertraline.cn/">NEU Survive Guide</a> 
                  </div>
                  <div class="info">为NEUer们提供的生存攻略</div>
               </div>
            </div>



