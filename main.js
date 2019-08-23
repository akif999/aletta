// スクロールバーのフェードイン・アウト処理
$(function() {
    var topBtn = $('.scroll-icon');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// ヘッダーの画像とナビゲーションのフェードイン
var setTimer = 2500;
$(function() {
  $('#navigation').fadeIn(setTimer);
  $('.top-banner').addClass('show');
});

// リンクにクリックでスクロールする処理
$('header a').click(function() {
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html,body').animate({'scrollTop':position},1000);
});

// 下にスクロールすると画面表示される処理
$(function() {
  $('.js-effect').css("opacity","0");
  $(window).scroll(function () {
    $('.js-effect').each(function() {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).css({
        'opacity'   :'1',
        'transition':'1.5s',
        });
      } else {
        $(this).css({
        'opacity':'0',
        'transition':'1.5s',
        });
      }
    });
  });
});

// レスポンシブ用メニューバーの開閉処理
$(function() {
  $('#menu-show').click(function(){
    $('#modal').fadeIn();
  });
   $('#close-btn, .link-btn').click(function(){
     $('#modal').fadeOut();
   });
});

// スマートホンのみ電話発信処理
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);
if (!isMobile) {
    $('a[href^="tel:"]').on('click', function(e) {
        e.preventDefault();
    });
}
