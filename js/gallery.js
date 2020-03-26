document.addEventListener('DOMContentLoaded', function () {
    if (typeof ($.fn.lightGallery) === 'function') {
        $('.article').lightGallery({ selector: '.gallery-item' });
    }
    if (typeof ($.fn.justifiedGallery) === 'function') {
        if ($('.justified-gallery > p > .gallery-item').length) {
            $('.justified-gallery > p > .gallery-item').unwrap();
        }
        // $('.justified-gallery').justifiedGallery();
        //修改部分
        $('.justified-gallery').justifiedGallery({rowHeight:400, margins:4});
		//修改部分
    }
});