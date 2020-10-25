(this["webpackJsonpcs50x-concept"]=this["webpackJsonpcs50x-concept"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"zoomList":[{"name":"Zoom Meetings","link":"https://cs50.harvard.edu/x/2020/zoom/"}],"certificateList":[{"name":"CS50 Certificate","link":"https://cs50.harvard.edu/x/2020/certificate/"}],"statusList":[{"name":"Changelog","link":"https://cs50.noticeable.io/"},{"name":"Status Page","link":"https://cs50.statuspage.io/"}],"channelsList":[{"name":"edX","link":"https://cs50.edx.org/"},{"name":"iTunes U","link":"https://cs50.harvard.edu/x/2020/#"},{"name":"YouTube","link":"https://www.youtube.com/playlist?list=PLhQjrBD2T381L3iZyDTxRwOBuUt6m1FnW"}],"toolsList":[{"name":"CS50 IDE","link":"https://ide.cs50.io/"},{"name":"Gradebook","link":"https://cs50.me/cs50x"},{"name":"Manual Pages","link":"https://man.cs50.io/"},{"name":"Python Documentation","link":"https://docs.python.org/3.7/search.html"},{"name":"Style Guide","link":"https://cs50.readthedocs.io/style/c/"}],"guideList":[{"name":"Academic Honesty","link":"https://cs50.harvard.edu/x/2020/honesty/"},{"name":"Ed Discussion","link":"https://cs50.harvard.edu/x/ed","additional":"for Q&A"},{"name":"Quick Start Guide","link":"https://us.edstem.org/quickstart/ed-discussion.pdf"},{"name":"FAQs","link":"https://cs50.harvard.edu/x/2020/faqs/"},{"name":"Staff","link":"https://cs50.harvard.edu/x/2020/staff/"},{"name":"Syllabus","link":"https://cs50.harvard.edu/x/2020/syllabus/"}],"communitiesList":[{"name":"Communities","link":"https://cs50.harvard.edu/x/2020/communities/"},{"name":"Discord","link":"https://discord.gg/cs50"},{"name":"Facebook Group","link":"https://www.facebook.com/groups/cs50/"},{"name":"Facebook Page","link":"https://www.facebook.com/cs50/"},{"name":"GitHub","link":"https://github.com/cs50"},{"name":"Gitter","link":"https://gitter.im/cs50/x"},{"name":"Instagram","link":"https://instagram.com/cs50"},{"name":"LinkedIn Group","link":"https://www.linkedin.com/groups/7437240/"},{"name":"LinkedIn Page","link":"https://www.linkedin.com/school/CS50/"},{"name":"Quora","link":"https://www.quora.com/topic/CS50"},{"name":"Slack","link":"https://cs50.edx.org/slack"},{"name":"Snapchat","link":"https://www.snapchat.com/add/cs50"},{"name":"Twitter","link":"https://twitter.com/cs50"},{"name":"YouTube","link":"http://www.youtube.com/subscription_center?add_user=cs50tv"}]}')},19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(17),c=a.n(l),s=(a(24),a(9)),r=a(1),u=a(3);var m=function(){return o.a.createElement("header",{className:"page-header"},o.a.createElement("div",null,o.a.createElement(s.b,{to:"/",className:"home-link"},"This is CS50x"),o.a.createElement("span",null,"OpenCourseWare")),o.a.createElement("div",{className:"auther"},o.a.createElement("h3",null,o.a.createElement("a",{href:"https://cs.harvard.edu/malan/"},"David J. Malan")),o.a.createElement("h3",null,o.a.createElement("a",{href:"malan@harvard.edu"},"malan@harvard.edu")),o.a.createElement("div",{class:"socialLinks"},o.a.createElement("a",{href:"https://www.facebook.com/dmalan"},o.a.createElement(u.a,null)),o.a.createElement("a",{href:"https://github.com/dmalan"},o.a.createElement(u.b,null)),o.a.createElement("a",{href:"https://www.instagram.com/davidjmalan/"},o.a.createElement(u.c,null)),o.a.createElement("a",{href:"https://www.linkedin.com/in/malan/"},o.a.createElement(u.d,null)),o.a.createElement("a",{href:"https://www.quora.com/profile/David-J-Malan"},o.a.createElement(u.e,null)),o.a.createElement("a",{href:"https://www.reddit.com/user/davidjmalan"},o.a.createElement(u.f,null)),o.a.createElement("a",{href:"https://twitter.com/davidjmalan"},o.a.createElement(u.g,null)))))},i=a(14);var h=function(){var e=Object.keys(i).map((function(e){return o.a.createElement("ul",{key:e,className:"footerGroup"},i[e].map((function(e){return o.a.createElement("li",null,o.a.createElement("a",{key:e.name,href:e.link},e.name))})))}));return o.a.createElement("footer",null,e)},d=a(6);var p=function(){document.title="CS50x";var e=Object.keys(d).map((function(e,t){return o.a.createElement(s.b,{to:"/week/".concat(t)},d[t].name)}));return o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"main"},o.a.createElement(m,null),o.a.createElement("ul",{className:"weeks-list"},e)),o.a.createElement(h,null))};var w=function(e){var t=e.youtube_video;return o.a.createElement("div",{className:"lecture-video"},o.a.createElement("iframe",{src:t,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))};var b=function(e){var t=e.weekNumber,a=d[t],n=d[t].Demo,l=n&&o.a.createElement("div",{className:"filesGroup"},o.a.createElement("h2",null,"Demos"),o.a.createElement("ul",null,Object.keys(n).map((function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:n[e]},e," "))})))),c=a.video.youtube.ThreeD?o.a.createElement("div",null,o.a.createElement("h3",null,"Youtube"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:a.video.youtube.twoD},"2D")),o.a.createElement("li",null,o.a.createElement("a",{href:a.video.youtube.ThreeD},"3D")))):o.a.createElement("li",null,o.a.createElement("a",{href:a.video.youtube.twoD},"Youtube"));return o.a.createElement("div",{className:"week-files"},o.a.createElement("div",{className:"files"},o.a.createElement("div",{className:"filesGroup"},o.a.createElement("h2",null,"Lecture"),o.a.createElement("li",null,o.a.createElement("a",{href:"https://cdn.cs50.net/2019/fall/lectures/".concat(t,"/lecture").concat(t,".mp3.download")},"Audio")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://cs50.harvard.edu/x/2020/notes/".concat(t,"/")},"Notes"))),l&&l,o.a.createElement("div",{className:"filesGroup"},o.a.createElement("h2",null,"Slides"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:a.slides.google_slides},"Google Slide")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://cdn.cs50.net/2019/fall/lectures/".concat(t,"/lecture").concat(t,".pdf")},"PDF")))),o.a.createElement("div",{className:"filesGroup"},o.a.createElement("h2",null,"Source Code"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://cdn.cs50.net/2019/fall/lectures/".concat(t,"/src").concat(t,"/")},"Index")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://cdn.cs50.net/2019/fall/lectures/".concat(t,"/src").concat(t,".pdf")},"PDF")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://cdn.cs50.net/2019/fall/lectures/".concat(t,"/src").concat(t,".zip")}," Zip")))),o.a.createElement("div",{className:"filesGroup"},o.a.createElement("h2",null,"Video"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:a.video.cs50_player},"CS50 Video player")),c,o.a.createElement("div",null,o.a.createElement("h3",null,"MP4"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://cdn.cs50.net/2019/fall/lectures/".concat(t,"/lecture").concat(t,"-360p.mp4.download")}," 360p")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://cdn.cs50.net/2019/fall/lectures/".concat(t,"/lecture").concat(t,"-720p.mp4.download")},"720p")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://cdn.cs50.net/2019/fall/lectures/".concat(t,"/lecture").concat(t,"-1080p.mp4.download")},"1080p")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://cdn.cs50.net/2019/fall/lectures/".concat(t,"/lecture").concat(t,"-4k.mp4.download")},"4K"))))))))};var E=function(e){var t=e.weekNumber,a=d[t].shorts,n=a&&o.a.createElement("ul",{className:"shorts-list"},Object.keys(a).map((function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:a[e]},e))})));return o.a.createElement("div",{className:"shorts"},o.a.createElement("h2",null,"Shorts"),n)};var y=function(e){var t=e.weekNumber,a=d[t],n=Object.keys(d).length-1==t;return console.log(t),o.a.createElement("div",{className:"week-content"},o.a.createElement("header",null,o.a.createElement("h1",null,"Week ",t," - ",o.a.createElement("span",null,a.name))),o.a.createElement(w,{youtube_video:a.youtube_video}),o.a.createElement(b,{weekNumber:t}),d[t].shorts&&o.a.createElement(E,{weekNumber:t}),o.a.createElement("div",null,o.a.createElement("a",{href:"https://cs50.harvard.edu/x/2020/psets/".concat(t,"/"),className:"week-content-header"},"Problem ",o.a.createElement("span",null,"Set ",t," ",n&&" (Choose your Track)"))))};var v=function(){var e=Object(r.f)().number;return document.title="Week ".concat(e," - CS50x"),o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement(y,{weekNumber:e}),o.a.createElement(h,null))};a(30);var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(s.a,null,o.a.createElement(r.c,null,o.a.createElement(r.a,{exact:!0,path:"/",component:p}),o.a.createElement(r.a,{path:"/week/:number",component:v}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e){e.exports=JSON.parse('{"0":{"name":"Scratch \ud83d\ude3a","youtube_video":"https://www.youtube.com/embed/jjqgP9dpD1k","slides":{"google_slides":"https://docs.google.com/presentation/d/17wRd8ksO6QkUq906SUgm17AqcI-Jan42jkY-EmufxnE/edit?usp=sharing"},"source_code":{"studio":"https://scratch.mit.edu/studios/25128634/"},"video":{"cs50_player":"https://video.cs50.io/jjqgP9dpD1k?screen=w3XNssqYBSU","youtube":{"twoD":"https://youtu.be/jjqgP9dpD1k","ThreeD":"https://youtu.be/2R4i4Dh5qYQ"}}},"1":{"name":"C","youtube_video":"https://www.youtube.com/embed/e9Eds2Rc_x8","slides":{"google_slides":"https://docs.google.com/presentation/d/191XW0DHWlW6WmAhYuFUYnZKUlDx0N4u4Fp81AeW-uNs/edit?usp=sharing"},"video":{"cs50_player":"https://video.cs50.io/e9Eds2Rc_x8?screen=ClQXfUurzgU","youtube":{"twoD":"https://youtu.be/e9Eds2Rc_x8"}},"shorts":{"Dara Types":"https://www.youtube.com/embed/q6K8KMqt8wQ","Operators":"https://www.youtube.com/embed/7apBtlEkJzk?rel=0","Conditional Statements":"https://www.youtube.com/embed/FqUeHzvci10?rel=0","Loops":"https://www.youtube.com/embed/QOvo-xFL9II?rel=0","Command Line":"https://www.youtube.com/embed/lnYKOnz9ln8?rel=0"}},"2":{"name":"Arrays","youtube_video":"https://www.youtube.com/embed/8PrOp9t0PyQ","slides":{"google_slides":"https://docs.google.com/presentation/d/1BPOm4VNOmlOLKzwOHPYR3FXEXLiJbOW3MSKdp1wMNnk/edit?usp=sharing"},"video":{"cs50_player":"https://video.cs50.io/8PrOp9t0PyQ?screen=gCTTN_sINNI","youtube":{"twoD":"https://youtu.be/8PrOp9t0PyQ"}},"shorts":{"Functions":"https://www.youtube.com/embed/b7-0sb-DV84","Variables and Scope":"https://www.youtube.com/embed/GiFbdVGjF9I","Arrays":"https://www.youtube.com/embed/mISkNAfWl8k","Command Line Arguments":"https://www.youtube.com/embed/AI6Ccfno6Pk"}},"3":{"name":"Algorithms","youtube_video":"https://www.youtube.com/embed/fykrlqbV9wM","Demo":{"Comparison Sorting Algorithms":"https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html","Visualiztion and Comparison of Sorting Algorithms":"https://www.youtube.com/watch?v=ZZuD6iUe3Pc"},"slides":{"google_slides":"https://docs.google.com/presentation/d/17eT9MaZBUByTTlpkliT8kTg7AW1820xMIQg0HDd5NCk/edit?usp=sharing"},"video":{"cs50_player":"https://video.cs50.io/fykrlqbV9wM?screen=sPRcgqR8CJw","youtube":{"twoD":"https://youtu.be/fykrlqbV9wM"}},"shorts":{"Linear Search":"https://www.youtube.com/watch?v=TwsgCHYmbbA","Binary Search":"https://www.youtube.com/watch?v=T98PIp4omUA","Bubble Sort":"https://www.youtube.com/watch?v=RT-hUXUWQ2I","Selection Sort":"https://www.youtube.com/watch?v=3hH8kTHFw2A","Insertion Sort":"https://www.youtube.com/watch?v=O0VbBkUvriI","Recursion":"https://www.youtube.com/watch?v=mz6tAJMVmfM","Merge Sort":"https://www.youtube.com/watch?v=Ns7tGNbtvV4","Algorithms Summary":"https://www.youtube.com/watch?v=ktWL3nN38ZA"}},"4":{"name":"Memory","youtube_video":"https://www.youtube.com/embed/cF6YkH-8vFk","slides":{"google_slides":"https://docs.google.com/presentation/d/15retFlVW_bH8MqEQHlcDQiFemMcRGUpHWn7VWQ4ftaE/edit?usp=sharing"},"video":{"cs50_player":"https://video.cs50.io/cF6YkH-8vFk?screen=61UgdI37tK0","youtube":{"twoD":"https://youtu.be/fykrlqbV9wM"}},"shorts":{"Hexadecimal":"https://www.youtube.com/watch?v=u_atXp-NF6w","Pointers":"https://www.youtube.com/watch?v=XISnO2YhnsY","Defining Cutom Types":"https://www.youtube.com/watch?v=crxfzK3Oc9M","Dynamic Memory Allocation":"https://www.youtube.com/watch?v=crxfzK3Oc9M","Call Stacks":"https://www.youtube.com/watch?v=aCPkszeKRa4","File Pointer":"https://www.youtube.com/watch?v=bOF-SpEAYgk"}},"5":{"name":"Data Structures","youtube_video":"https://www.youtube.com/embed/4IrUAqYKjIA","slides":{"google_slides":"https://docs.google.com/presentation/d/1KMzq3bLe7g_O4JVYZ0lxuxHjShnIk54beO84-chYTig/edit?usp=sharing"},"video":{"cs50_player":"https://video.cs50.io/4IrUAqYKjIA?screen=k5rlx6U0sJQ","youtube":{"twoD":"https://youtu.be/4IrUAqYKjIA"}},"shorts":{"Data Structures":"https://www.youtube.com/watch?v=3uGchQbk7g8","Singly-Linked Lists":"https://www.youtube.com/watch?v=zQI3FyWm144","Hash Tables":"https://www.youtube.com/watch?v=nvzVHwrrub0","Tries":"https://www.youtube.com/watch?v=MC-iQHFdEDI"}},"6":{"name":"Python","youtube_video":"https://www.youtube.com/embed/fL308_-Kbt0","slides":{"google_slides":"https://docs.google.com/presentation/d/1XXKDd6XSXjuAmAZKGAX-_PtYUmoHaJ25j1zsJ17lK2E/edit?usp=sharing"},"video":{"cs50_player":"https://video.cs50.io/fL308_-Kbt0?screen=ghsZqKLdKhw","youtube":{"twoD":"https://youtu.be/fL308_-Kbt0"}},"shorts":{"Python":"https://www.youtube.com/watch?v=mgBpcQRDtl0"}},"7":{"name":"SQL","youtube_video":"https://www.youtube.com/embed/u5pDdEKnbKA","slides":{"google_slides":"https://docs.google.com/presentation/d/1Ydz-FLPOBvmJv215WckMyjhlZVnNk66h5yHhZ-yDsc4/edit?usp=sharing"},"Google Spreadsheet":"https://docs.google.com/spreadsheets/d/1nOmVN24bG3PHP0e-A47D101-FcSh0VfpK1EnVKNz1ns/edit?usp=sharing","video":{"cs50_player":"https://video.cs50.io/u5pDdEKnbKA?screen=-nHi1mI60oI","youtube":{"twoD":"https://youtu.be/u5pDdEKnbKA"}},"shorts":{"SQL":"https://www.youtube.com/watch?v=AywtnUjQ6X4"}},"8":{"name":"Information","youtube_video":"https://www.youtube.com/embed/suzS0NWu8uQ","slides":{"google_slides":"https://docs.google.com/presentation/d/1tH5qsKb9Hc276JyUOg_6EgD-TTTMUEinvZJIuD2lA3s/edit?usp=sharing"},"video":{"cs50_player":"https://video.cs50.io/suzS0NWu8uQ?screen=pdwATvi0Sxw","youtube":{"twoD":"https://youtu.be/suzS0NWu8uQ"}}}}')}},[[19,1,2]]]);
//# sourceMappingURL=main.156be4d8.chunk.js.map