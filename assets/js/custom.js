/* Disable image draging */
var imgList = document.getElementsByTagName("img");
for (var i = 0; i < imgList.length; i++) {
    imgList[i].ondragstart = function() {
        return false;
    }
}