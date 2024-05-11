var posts=["post/46969.html","post/30229.html","post/47479.html","post/19236.html","post/4333.html","post/21442.html","post/62556.html","post/57921.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };