(function(w){
	function imgToBase64(imgUrl, cb) {
        var buffer_img = document.createElement('img');
        buffer_img.src = imgUrl;
        buffer_img.crossOrigin = 'Anonymous';
        document.body.appendChild(buffer_img);

        buffer_img.onload = function(){
            var computedStyle = window.getComputedStyle(buffer_img,null);
            var canvas = document.createElement('canvas');

            canvas.width = computedStyle.getPropertyValue('width').split('px')[0];
            canvas.height = computedStyle.getPropertyValue('height').split('px')[0];

            var context = canvas.getContext('2d');
            context.drawImage(buffer_img, 0, 0);

            var imgDataUrl = canvas.toDataURL("image/png", 1.0);
            document.body.removeChild(buffer_img);

            cb(imgDataUrl);
        }
        buffer_img.src = imgUrl;
        if ( buffer_img.complete || buffer_img.complete === undefined ) {
            buffer_img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            buffer_img.src = imgUrl;
        }
    }

    w.imgToBase64 = imgToBase64;
})(window);