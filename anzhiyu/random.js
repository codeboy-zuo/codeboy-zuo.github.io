var posts=["2023/05/09/Butterfly主题优化/","2023/05/21/abbrlink/","2023/05/08/markdown/","2023/05/13/github-calendar/","2023/05/21/music/","2023/05/21/newPostIcon/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };