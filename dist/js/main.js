$(function () {
    $('.item')
        .tab();
    $('.accordion')
        .accordion()
    $('.come-up')
        .transition({
            animation:'pulse'
        })
    $('.dropdown')
        .dropdown()
  })
$(function () {
    $('a').click(function (arguments) {
        return false;
    })
    $(function () {
        var $images = $('img[name!="custom"]')
        $.each($images, function (i, data) {
            var ii = i % 7;
            var imgSrc = './dist/img/a' + ii + '.JPG'
            var count = Math.random() * 3
            count = Math.floor(count) + 1
            data.setAttribute('class', 'ui bordered')
            $images.eq(i).attr('src', imgSrc).css({
                height: 222
            })
        })
        var tt = ['习近平总书记', '中华人民共和国政府','实现民族和谐统一', '霍金时间简史', '特斯拉', '2faster'],
            $p = $('p.c')
            function addingChars(n) {
            $p.each(function () {
                var m = []
                for (var j = 0; j < n; j++) {
                    var mr = Math.random() * tt.length,
                        jj = Math.floor(mr)
                    // 最多总字符长度还差2个的地方截取2个字符
                    var substringMax = Math.floor((tt[jj].length - 2) * Math.random())
                    m.push(tt[jj].substring(substringMax, substringMax + 2))
                }
                $(this).html(m.join('').split('s') + '。')
            })
        }
        addingChars(99)
    })
})
//scroll
$(function () {
    var $winY, $objY
    var $winHeight = $(window).height()
    $.fn.onMeet = function (dr) {
        return this.each(function () {
            var $t = $(this)
            $objY = $t.offset().top
            if (!$t.hasClass('done-hide')) {
                if (dr == 'right') {
                    $t.css({
                        opacity: 0,
                        right: '-90px'
                    }).addClass('done-hide')
                }
                if (dr == 'left') {
                    $t.css({
                        opacity: 0,
                        left: '-90px'
                    }).addClass('done-hide')
                }
            }
            if (!$t.hasClass('fx-end')) {
                if (($winHeight + $winY) > $objY) {
                    if (dr == 'right') {
                        $t.animate({
                            opacity: 1,
                            right: 0
                        }, 2000)
                        $t.addClass('fx-end')
                    }
                    if (dr == 'left') {
                        $t.animate({
                            opacity: 1,
                            left: 0
                        }, 2000)
                        $t.addClass('fx-end')
                    }
                }
            }
        })
    }
    $(window).scroll(function () {
        $winY = $(window).scrollTop()
        $('.fx-right').onMeet('right')
        $('.fx-left').onMeet('left')
        // $('.fxx div').onMeet('right')
    })
})
$(function () {
    // -------------
    // tabs
    // --------------
    var $m = $(".icon-menu .icon-div"),
        $t = $(".tab-top").children().find('i'),
        $tp = $('.toper');
    $m.hide()
    $t.click(function (e) {
        var index = $t.index($(this));
        $t.removeClass("active");
        $(this).addClass("active");
        if ($(this).data("flag") != 1) {
            $m.hide().stop()
            $m.eq(index).fadeIn(200)
        }
        setTimeout(toperOn, 111)
        var topp = $(this).parent()

        function toperOn() {
            $(".tab-top div").children('span').remove()
            topp.append('<span class="toper"></span>')
        }
        $t.data("flag", 0);
        $(this).data("flag", 1);
    })
})
// ===============
// nav
// ===========
$(function () {
    var $navM = $('.nav-menu')
    // $navM.addClass('nav-open')
    $('.shop').hover(function () {
        $navM.toggleClass('nav-open')
    })
    $('.nav-menu li').hover(function () {
        $(this).children('a').toggleClass('a-hover')
        $(this).find('.cat').toggleClass('cat-hide')
    })
})
//=========scroll abc=========
//============================
$(function () {
    var $winY
    var $labels = $('.abc')
    var $di = $('.di').find('a')
    $.fn.viewIt = function (d) {
        this.click(function (e) {
            var dii = $(this).parent().children().index(this)
            console.log(dii)
            var hereTop = $labels.eq(dii).offset().top
            $('body').animate({
                scrollTop: hereTop
            })
        })
    }
    // ========================
    // anywhere at beginning
    // $.fn.elv = function () {
    //     var here = this.offset().top
    //     $('body').animate({
    //         scrollTop: here
    //     })
    // }
    // $('.elv-here').elv()
    $('.dii a').viewIt()
    $.fn.abcD = function (dig) {
        return this.each(function () {
            $abcTop = $(this).offset().top
            $winY = $(window).scrollTop()
            if ($winY > $abcTop - 22) {
                var abc = $(this).data('abc')
                $(dig).find('a').removeClass('active')
                $(dig).find('a').eq(abc).addClass('active')
            }
        })
    }
    $(window).scroll(function () {
        $labels.abcD('.di')
        $labels.abcD('.dii')
    })
    $(window).scroll(function () {
        var $tnav = $('#top-nav')
        if ($winY == 0) {
            $tnav.removeClass().addClass('ui grid').attr('style', '')
        } else {
            if (!$tnav.hasClass('sticky')) {
                $tnav.removeClass().addClass('ui container grid sticky').sticky({
                    context: '#note'
                })
            }
        }
    })
});
$(function () {
    // ===========
    // starting view
    $('.start-view').click(function () {
        var viewTop = $(this).offset().top
        $('body').animate({
            scrollTop: viewTop - 99
        })
    })
    $('.start-view').animate({
        top: 0
    }, {
        duration: 2000,
        complete: function () {
            $('.start-view')
                .addClass('looping')
                .transition({
                    animation: 'pulse'
                })
        }
    })
    setTimeout(function () {
        $('.start-view').addClass('disabled')
    }, 6000)
    // =========
    // likes click
    var likeVal = new Array()
    var $like = $('.like-this')
    var $belike = $('.be-like')
    $.fn.hit = function () {
        $('.tnk-devil').hide()
        this.each(function () {
            var initLike = 0
            $(this).click(function () {
                var liking = $('.like').index(this)
                $('.tnk-devil').eq(liking).hide()
                $belike.eq(liking).show()
                $('.dislike').eq(liking).html('支持')
                initLike++
                likeVal[liking] = initLike
                $like.eq(liking).hide()
                    .show()
                    .transition('stop')
                    .transition({
                        animation: 'tada'
                    })
                    .html(likeVal[liking])
                if (initLike > 4) {
                    $belike.eq(liking).hide()
                    $(this).html('😁thanks')
                }
                if (initLike > 5) {
                    initLike = (10 + Math.random() * 100).toFixed(1)
                    $('.like').eq(liking).html('赞')
                    $like.eq(liking).html('💖💖💖')
                    $belike.eq(liking).show()
                }
                if (initLike == 6) {
                    likeVal[liking] = 100
                    $('.like').eq(liking).html('💖💖💖💖')
                    $like.eq(liking).html(0)
                    $belike.eq(liking).show()
                }
            })
        })
    }
    $('.like').hit()
    $('.dislike').each(function () {
        var devils = new Array()
        var devilVal = 10
        $(this).click(function () {
            if (devilVal < 20) {
                devilVal += 3
                devils.push('👿😃')
            }
            var angry = devils.join(' ')
            $(this).parentsUntil('#note').find('.like')
                .html('赞')
            $(this).parentsUntil('#note').find('.tnk-devil .label')
                .html(angry)
            $(this).parentsUntil('#note').find('.be-like')
                .hide()
            $(this).parentsUntil('#note').find('.tnk-devil')
                .show()
                .css({
                    fontSize: devilVal
                })
                .transition('stop')
                .transition({
                    animation: 'shake'
                })
        })
    })
    // ====================
    // douban ajax
    $.ajax({
            method: 'GET',
            // url: 'https://api.douban.com/v2/movie/top250?count=10',
            dataType: 'jsonp',
            crossDomain: true
        })
        .done(function (d) {
            console.log(d)
            $.each(d.subjects, function (i, d) {
                i++
                $('#douban')
                    .append('<tr><td>' + i +
                        '</td><td>' + d.title + 
                        '</td><td>' + d.genres +
                        '</td><td><img class="ui tiny image" src="' + d.images.small +
                        '"></td></tr>')
            })
        })
})
