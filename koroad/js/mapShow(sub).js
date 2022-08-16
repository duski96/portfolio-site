$(document).ready(function(){

    $(".sel_list li p").click(function(){
        var selIdx=$(this).parent().index()+1;

        $(".sel_list li").removeClass("current");
        $(".sel_list li p").removeClass("current");

        $(this).parent().addClass("current");
        $(this).addClass("current");

        $(".sel_area").css({"display":"none"});
        $("#sa_"+selIdx).css({"display":"inherit"});
    });

    $(".sel_list li:first-child p").trigger("click");

    var exLiIdx;
    var exUlIdx;
    var exDivClass;
    var exDivId;

    $.fn.extend({
        mapShow:function(){
            
            var liIdx=$(this).index();
            var ulIdx=$(this).parents().index()+1;
            var divClass=$(this).closest("div").attr("class");
            var divId=$(this).closest(".sel_area").attr("id");
            
            var selMap=$(".map_"+divId+" .map_"+divClass+" ul:nth-child("+ulIdx+") li:nth-child("+liIdx+")");

            $(selMap).css({"display":"inherit"});

            exLiIdx=liIdx;
            exUlIdx=ulIdx;
            exDivClass=divClass;
            exDivId=divId;

            if(divId=="sa_1"){
                if(divClass=="area_left"){
                    map1_1.relayout();
                    map1_1.setCenter(new daum.maps.LatLng(37.4658, 127.0443));

                    map1_2.relayout();
                    map1_2.setCenter(new daum.maps.LatLng(37.6582, 127.0587));

                    map1_3.relayout();
                    map1_3.setCenter(new daum.maps.LatLng(37.4180, 126.6528));

                    map1_4.relayout();
                    map1_4.setCenter(new daum.maps.LatLng(37.2725, 127.0815));

                    map1_5.relayout();
                    map1_5.setCenter(new daum.maps.LatLng(37.7560, 127.0307));

                    map1_6.relayout();
                    map1_6.setCenter(new daum.maps.LatLng(37.9040, 127.7272));

                    map1_7.relayout();
                    map1_7.setCenter(new daum.maps.LatLng(37.7630, 128.9419));

                    map1_8.relayout();
                    map1_8.setCenter(new daum.maps.LatLng(37.3384, 127.8984));

                    map1_9.relayout();
                    map1_9.setCenter(new daum.maps.LatLng(36.5825, 127.5114));

                    map1_10.relayout();
                    map1_10.setCenter(new daum.maps.LatLng(36.9391, 127.8978));

                    map1_11.relayout();
                    map1_11.setCenter(new daum.maps.LatLng(36.6932, 126.8309));

                    map1_12.relayout();
                    map1_12.setCenter(new daum.maps.LatLng(35.7982, 127.1717));

                    map1_13.relayout();
                    map1_13.setCenter(new daum.maps.LatLng(35.9658, 126.7112));

                    map1_14.relayout();
                    map1_14.setCenter(new daum.maps.LatLng(34.8073, 126.3659));

                    map1_15.relayout();
                    map1_15.setCenter(new daum.maps.LatLng(34.9615, 127.5718));

                    map1_16.relayout();
                    map1_16.setCenter(new daum.maps.LatLng(36.0962, 128.4320));

                    map1_17.relayout();
                    map1_17.setCenter(new daum.maps.LatLng(36.5494, 128.7043));

                    map1_18.relayout();
                    map1_18.setCenter(new daum.maps.LatLng(35.9424, 129.3928));

                    map1_19.relayout();
                    map1_19.setCenter(new daum.maps.LatLng(35.2353, 128.6428));

                    map1_20.relayout();
                    map1_20.setCenter(new daum.maps.LatLng(35.2320, 128.8705));
                }
                else{
                    map1_21.relayout();
                    map1_21.setCenter(new daum.maps.LatLng(35.1777, 128.9832));

                    map1_22.relayout();
                    map1_22.setCenter(new daum.maps.LatLng(35.8302, 128.5608));

                    map1_23.relayout();
                    map1_23.setCenter(new daum.maps.LatLng(36.3328, 127.3321));

                    map1_24.relayout();
                    map1_24.setCenter(new daum.maps.LatLng(35.1832, 126.9066));

                    map1_25.relayout();
                    map1_25.setCenter(new daum.maps.LatLng(35.5650, 129.3171));

                    map1_26.relayout();
                    map1_26.setCenter(new daum.maps.LatLng(33.4751, 126.4648));
                }
                
            }
            else if(divId=="sa_2"){
                if(divClass=="area_left"){
                    map2_1.relayout();
                    map2_1.setCenter(new daum.maps.LatLng(37.5084, 127.0673));

                    map2_2.relayout();
                    map2_2.setCenter(new daum.maps.LatLng(37.5503, 126.8218));

                    map2_3.relayout();
                    map2_3.setCenter(new daum.maps.LatLng(37.6584, 127.0587));

                    map2_4.relayout();
                    map2_4.setCenter(new daum.maps.LatLng(37.5794, 126.8799));

                    map2_5.relayout();
                    map2_5.setCenter(new daum.maps.LatLng(35.1278, 129.1058));

                    map2_6.relayout();
                    map2_6.setCenter(new daum.maps.LatLng(35.1775, 128.9832));

                    map2_7.relayout();
                    map2_7.setCenter(new daum.maps.LatLng(37.2896, 127.1079));

                    map2_8.relayout();
                    map2_8.setCenter(new daum.maps.LatLng(37.3456, 126.8284));

                    map2_9.relayout();
                    map2_9.setCenter(new daum.maps.LatLng(37.7595, 127.0779));

                    map2_10.relayout();
                    map2_10.setCenter(new daum.maps.LatLng(37.9473, 127.7506));

                    map2_11.relayout();
                    map2_11.setCenter(new daum.maps.LatLng(37.7955, 128.8188));

                    map2_12.relayout();
                    map2_12.setCenter(new daum.maps.LatLng(37.3385, 127.8985));

                    map2_13.relayout();
                    map2_13.setCenter(new daum.maps.LatLng(37.1811, 128.9704));

                    map2_14.relayout();
                    map2_14.setCenter(new daum.maps.LatLng(35.8624, 127.0706));

                    map2_15.relayout();
                    map2_15.setCenter(new daum.maps.LatLng(35.0086, 126.7052));

                    map2_16.relayout();
                    map2_16.setCenter(new daum.maps.LatLng(34.9613, 127.5719));

                    map2_17.relayout();
                    map2_17.setCenter(new daum.maps.LatLng(36.5770, 127.5675));

                    map2_18.relayout();
                    map2_18.setCenter(new daum.maps.LatLng(36.9391, 127.8978));

                    map2_19.relayout();
                    map2_19.setCenter(new daum.maps.LatLng(36.6732, 126.7892));

                    map2_20.relayout();
                    map2_20.setCenter(new daum.maps.LatLng(36.6371, 128.1735));

                    map2_21.relayout();
                    map2_21.setCenter(new daum.maps.LatLng(35.9424, 129.3928));

                    map2_22.relayout();
                    map2_22.setCenter(new daum.maps.LatLng(35.1247, 128.4875));
                }
                else{
                    map2_23.relayout();
                    map2_23.setCenter(new daum.maps.LatLng(37.3842, 126.7084));

                    map2_24.relayout();
                    map2_24.setCenter(new daum.maps.LatLng(35.9240, 128.5508));

                    map2_25.relayout();
                    map2_25.setCenter(new daum.maps.LatLng(36.2861, 127.4620));

                    map2_26.relayout();
                    map2_26.setCenter(new daum.maps.LatLng(35.5758, 129.0993));

                    map2_27.relayout();
                    map2_27.setCenter(new daum.maps.LatLng(33.4062, 126.3877));
                }
            }
            else{
                if(divClass=="area_left"){
                    map3_1.relayout();
                    map3_1.setCenter(new daum.maps.LatLng(37.5084, 127.0673));

                    map3_2.relayout();
                    map3_2.setCenter(new daum.maps.LatLng(37.5503, 126.8218));

                    map3_3.relayout();
                    map3_3.setCenter(new daum.maps.LatLng(37.6584, 127.0587));

                    map3_4.relayout();
                    map3_4.setCenter(new daum.maps.LatLng(37.5794, 126.8799));

                    map3_5.relayout();
                    map3_5.setCenter(new daum.maps.LatLng(35.1278, 129.1058));

                    map3_6.relayout();
                    map3_6.setCenter(new daum.maps.LatLng(35.1775, 128.9832));

                    map3_7.relayout();
                    map3_7.setCenter(new daum.maps.LatLng(37.2896, 127.1079));

                    map3_8.relayout();
                    map3_8.setCenter(new daum.maps.LatLng(37.3456, 126.8284));

                    map3_9.relayout();
                    map3_9.setCenter(new daum.maps.LatLng(37.7595, 127.0779));

                    map3_10.relayout();
                    map3_10.setCenter(new daum.maps.LatLng(37.3385, 127.8985));

                    map3_11.relayout();
                    map3_11.setCenter(new daum.maps.LatLng(35.8624, 127.0706));

                    map3_12.relayout();
                    map3_12.setCenter(new daum.maps.LatLng(35.0086, 126.7052));

                    map3_13.relayout();
                    map3_13.setCenter(new daum.maps.LatLng(36.5770, 127.5675));

                    map3_14.relayout();
                    map3_14.setCenter(new daum.maps.LatLng(36.6732, 126.7892));

                    map3_15.relayout();
                    map3_15.setCenter(new daum.maps.LatLng(35.1247, 128.4875));
                }
                else{
                    map3_16.relayout();
                    map3_16.setCenter(new daum.maps.LatLng(37.3842, 126.7084));

                    map3_17.relayout();
                    map3_17.setCenter(new daum.maps.LatLng(35.9240, 128.5508));

                    map3_18.relayout();
                    map3_18.setCenter(new daum.maps.LatLng(36.2861, 127.4620));

                    map3_19.relayout();
                    map3_19.setCenter(new daum.maps.LatLng(33.4062, 126.3877));
                }
            }
            
        }
    });

    $(".sel_area li:nth-child(n+2)").on("click",function(){    
        if(typeof exLiIdx == "undefined"){
            $(this).mapShow();
            $(this).addClass("current");
        }
        else{
            $(".map_"+exDivId+" .map_"+exDivClass+" ul:nth-child("+exUlIdx+") li:nth-child("+exLiIdx+")").css({"display":"none"});
            $(this).mapShow();
            $(".sel_area li").removeClass("current");
            $(this).addClass("current");      
        }
    });

    var wSize=$(window).width();
    
    if(wSize > 768){
        $("#sa_1 .area_left ul:first-child li:nth-child(2)").trigger("click");
    }
    

    
    $(window).on("resize",function(){
        var wReSize=$(window).width();

        if(wReSize > 768){
            $(".selection").css("height","470px");
            $(".sel_wrap").css("height","420px");
        }
        else{
            $(".selection").css("height","500px");
            $(".sel_wrap").css("height","450px");
        }
    });
     
});

