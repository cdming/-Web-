// 定义大图部分的变量
var DETAIL_IMAGE_SELECTOR = '[data-image-role=\"target\"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role=\"title\"]';
// 缩略图的图像
var THUMBNAIL_LINK_SELECTOR = '[data-image-role=\"trigger\"]';


// TODO: 改变大图和大图标题

/**
 * 设置大图的内容
 * 
 */
function setDetails(imageUrl, titleText) {
    'use strict';
    // 改变大图
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    // 改变大图的标题
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
    // 下一步通过函数的形参接收实参

}
/**
 * 从缩略图中获取图片和标题
 * 
 * @param {any} thumbnail 
 */
function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}
/**
 * 接收一个缩略图的引用 然后返回标题文本
 * 
 * @param {any} thumbnail 
 */
function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}
/**
 * 接收一个缩略图元素的引用 为之前的3个函数服务
 * 
 * @param {any} thumbnail 
 */
function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}
/**
 * 接收缩略图 并添加事件监听器
 * 
 * @param {any} thumb 
 */
function addThumbClickHander(thumb) {
    'use strict';
    thumb.addEventListener('click', function (event) {
        // 该方法可以阻止链接让浏览器跳到另一个页面
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}
/**
 * 获取所有的缩略图 并转化成数组
 * 
 * @returns 
 */
function getThumbnaisArray() {
    'use strict';
    // 注意 获取并返回的是一个节点列表 而不是数组
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    // 将节点列表转化成数组 并向后兼容的方式
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnaisArray();
    // 为数组中的每一个添加一个监听器
    thumbnails.forEach(addThumbClickHander);
}
// 触发上述所有的操作
initializeEvents();