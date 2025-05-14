document.addEventListener('DOMContentLoaded', function() {
  // 创建鼠标跟随元素
  const follower = document.createElement('div');
  follower.className = 'mouse-follower';
  document.body.appendChild(follower);

  // 添加鼠标移动事件监听
  document.addEventListener('mousemove', function(e) {
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
  });

  // 添加鼠标进入/离开事件
  document.addEventListener('mouseenter', function() {
    follower.style.opacity = '1';
  });

  document.addEventListener('mouseleave', function() {
    follower.style.opacity = '0';
  });
}); 