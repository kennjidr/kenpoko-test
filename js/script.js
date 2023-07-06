
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 150, 'swing');
    return false;
  });
    // フッター手前でストップ
    $(".pagetop").hide();
    $(window).on("scroll", function () {
      scrollHeight = $(document).height();
      scrollPosition = $(window).height() + $(window).scrollTop();
      footHeight = $(".footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
   　　　// ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
        $(".pagetop").css({
          position: "absolute",
          bottom: footHeight,
        });
      } else {
        $(".pagetop").css({
          position: "fixed",
          bottom: "0",
        });
      }
    });



  
  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");
  });

  //ナビバートグル
  $('.js-hamburger').on('click', function () {//クラスjs-hamburgerをクリックしたときに
    // $('.js-drawer-menu').fadeOut();
    if ($('.js-hamburger').hasClass('is-open')) {//クラスjs-hamburgerがis-openを持っていた場合
      ($('.js-drawer-menu').removeClass('is-open'))//js-hamburgerからis-openを持っていた場合
      $(this).removeClass('is-open');//クラスjs-hamburgerからis-openを削除する。
      $('.js-header').removeClass('is-open');//クラスjs-headerからis-openを削除する。
    } else {
      ($('.js-drawer-menu').addClass('is-open'))//js-hamburgerがクラスis-openを持っていた場合
      $(this).addClass('is-open');//クラスis-openを付与する。
      $('.js-header').addClass('is-open');//クラスis-openを付与する。
    }
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  //inview
  //要素の取得とスピードの設定
  var box = $('.colorbox'),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="colorbox-image"></div>')
    var color = $(this).find($('.colorbox-image')),
      image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
      if (counter == 0) {
        $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
          image.css('opacity', '1');
          $(this).css({ 'left': '0', 'right': 'auto' });
          $(this).animate({ 'width': '0%' }, speed);
        })
        counter = 1;
      }
    });
  });
});


var mySwiper = new Swiper('.swiper-first-view', {

  loop: true,//画像ループの有無
  loopedSliders: 3,//スライド枚数
  speed: 1500,//切り替わるスピード
  effect: 'fade',//フェイドエフェクトの追加
  fadeEffect: {       //エフェクトの挙動を追加
  crossFade: true     //追加 (スライドの重なりを解消)
  },                  //
  autoplay: {
    delay: 2000,//自動切り替わり速度
  },
});

var mySwiper = new Swiper('.campaign__swiper-container', {
  navigation: {//スライド前後稼働のボタン
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    clickable: true,
  },
  loop: true,
  width: 280,
  spaceBetween: 20,
  loopedSliders: 8,

  breakpoints: {
    768: {
      width: 333,
      spaceBetween: 40,
    }
  },
});