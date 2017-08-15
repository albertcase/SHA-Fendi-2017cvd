/*For join page
 * Inclue two function, one is load new qr for each person, another is show rule popup
 * */
;(function(){
    var controller = function(){

    };
    //init
    controller.prototype.init = function(){
        var self = this;

        var timeStart = 0,
            step= 1,
            isTrueNext = false,
            isFalseNext = false;
        var loadingAni = setInterval(function(){
            if(timeStart>100){
                isFalseNext = true;
                if(isTrueNext){
                    self.startUp();
                }
                clearInterval(loadingAni);
                return;
            };
            if(timeStart==step){
                $('.animate-flower').addClass('fadenow');
            }
            $('.loading-num .num').html(timeStart);
            timeStart += step;
        },50);

        var baseurl = ''+'/src/dist/images/';
        var imagesArray = [
            baseurl + 'logo.png',
            baseurl + 'tag_0001_Group-1.png',
            baseurl + 'tag_0002_Group-2.png',
            baseurl + 'tag_0003_Group-3.png',
            baseurl + 'tag_0004_Group-4.png',
            baseurl + 'tag_0005_Group-5.png',
            baseurl + 'tag-tips.png',
            baseurl + 'text_1.png',
            baseurl + 'text_2.png',
            baseurl + 'text_3.png',
        ];

        var i = 0,j= 0;
        new preLoader(imagesArray, {
            onProgress: function(){
                i++;
                //var progress = parseInt(i/imagesArray.length*100);
                //console.log(progress);
                //$('.preload .v-content').html(''+progress+'%');
                //console.log(i+'i');
            },
            onComplete: function(){
                isTrueNext  = true;
                if(isFalseNext){
                    self.startUp();
                }

            }
        });


    };

    controller.prototype.startUp = function(){
        var self = this;
        Common.gotoPin(0);
        self.bindEvent();
    };

    //bind Events
    controller.prototype.bindEvent = function(){

    };


    $(document).ready(function(){
//    show form
        var newFollow = new controller();
        newFollow.init();

    });

})();