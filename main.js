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
$(function() {
  $('.js-header-show').addClass('show');
});

// リンクにクリックでスクロールする処理
$('header a').click(function() {
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html,body').animate({'scrollTop': position}, 1000);
});

// 下にスクロールすると画面表示される処理
$(function() {
  $('.js-effect').css("opacity", "0");
  $(window).scroll(function () {
    $('.js-effect').each(function() {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight * 1.2){
        $(this).css({
          'opacity'   :'1',
          'transition':'1.5s',
        });
      } else {
        $(this).css({
          'opacity'   :'0',
          'transition':'1.5s',
        });
      }
    });
  });
});

// レスポンシブ用メニューバーの開閉処理
$(function() {
  $('#menu-show').click(function() {
    $('#modal').fadeIn();
  });
   $('#close-btn, .link-btn').click(function() {
     $('#modal').fadeOut();
   });
});

// スマートホンのみ電話発信処理
var ua = navigator.userAgent;
if (!isMobile(ua)) {
  $('a[href^="tel:"]').on('click', function(e) {
    e.preventDefault();
  });
}

function isMobile(ua) {
    return /iphone/.test(ua.toLowerCase()) || /android(.+)?mobile/.test(ua.toLowerCase());
}

// 下にスクロールfadeout、上にスクロールfadein
var menuHeight = $("#navigation").height();
var startPos = 0;
$(window).scroll(function() {
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 200) {
      $("#navigation").css("top", "-" + menuHeight + "px");
    }
  } else {
    $("#navigation").css("top", 0 + "px");
  }
  startPos = currentPos;
});

// 画像スライド
$(function() {
  $('.slide-btn').click(function() {
    var $imageSlide = $('.active');

    $imageSlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $imageSlide.next().addClass('active');
    } else {
      $imageSlide.prev().addClass('active');
    }

    var fadeTime = 150;
    var slideIndex = $('.slide').index($('.active'));

    $('.slide-btn').fadeIn(fadeTime);
    if (slideIndex == 0) {
      $('.prev-btn').fadeOut(fadeTime);
        } else if (slideIndex == $('.slide').length - 1) {
      $('.next-btn').fadeOut(fadeTime);
    }
  });
});
