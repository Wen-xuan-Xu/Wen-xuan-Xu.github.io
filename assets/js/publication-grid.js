// 确保出版物图片正确加载和显示
document.addEventListener('DOMContentLoaded', function() {
  // 初始化Lazy加载
  $('.lazy').Lazy({
    scrollDirection: 'vertical',
    effect: 'fadeIn',
    visibleOnly: true,
    onError: function(element) {
      console.log('Error loading ' + element.data('src'));
    }
  });

  // 图片加载完成后调整publications-grid布局
  imagesLoaded('.publications-grid', function() {
    // 给图片容器添加加载完成标记
    $('.publication-thumbnail').addClass('loaded');
  });
}); 