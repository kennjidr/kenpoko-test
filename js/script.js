
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
      $('body').removeClass('is-open');//クラスjs-headerからis-openを削除する。
    } else {
      ($('.js-drawer-menu').addClass('is-open'))//js-hamburgerがクラスis-openを持っていた場合
      $(this).addClass('is-open');//クラスis-openを付与する。
      $('.js-header').addClass('is-open');//クラスis-openを付与する。
      $('body').addClass('is-open');//クラスis-openを付与する。
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
  //要素の取得とアニメーションスピードの設定
  var box = $('.colorbox'),
    speed = 700;

  //.colorboxクラスに下記処理を行う
  box.each(function () {
    $(this).append('<div class="colorbox-image"></div>')//.colorboxに<div class="colorbox-image"></div>を付与
    var color = $(this).find($('.colorbox-image')),
      image = $(this).find('img');//追加した<div class="colorbox-image"></div>と<img>要素を取得します
    var counter = 0;//counterがゼロのときに動き出す。ここで稼働回数を変更できる。

    image.css('opacity', '0');//画層を透明にする。
    color.css('width', '0%');//color要素の幅を0%に設定します。
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
      if (counter == 0) {
        $(this).delay(200).animate({ 'width': '100%' }, speed, function () {//color要素の幅がアニメーションとして100%に拡大
          image.css('opacity', '1');//画像が出てくる
          $(this).css({ 'left': '0', 'right': 'auto' });//color要素の位置が左端に移動します
          $(this).animate({ 'width': '0%' }, speed);///color要素の幅が0になる
        })
        counter = 1;//counterが1に更新される、これでアニメーションは終わる
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
