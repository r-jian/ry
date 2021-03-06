! function() {
    function u(n, t, i) {
        return n.getAttribute(t) || i
    }

    function c(n) {
        return document.getElementsByTagName(n)
    }

    function v() {
        var t = c("script"),
            i = t.length,
            n = t[i - 1];
        return {
            l: i,
            z: u(n, "zIndex", -1),
            o: u(n, "opacity", .5),
            c: u(n, "color", "0,0,0"),
            n: u(n, "count", 99)
        }
    }

    function l() {
        f = t.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        e = t.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    function a() {
        n.clearRect(0, 0, f, e);
        var u = [i].concat(s),
            t, o, v, h, c, l;
        s.forEach(function(s) {
            for (s.x += s.xa, s.y += s.ya, s.xa *= s.x > f || s.x < 0 ? -1 : 1, s.ya *= s.y > e || s.y < 0 ? -1 : 1, n.fillRect(s.x - .5, s.y - .5, 1, 1), o = 0; o < u.length; o++) t = u[o], s !== t && null !== t.x && null !== t.y && (h = s.x - t.x, c = s.y - t.y, l = h * h + c * c, l < t.max && (t === i && l >= t.max / 2 && (s.x -= .03 * h, s.y -= .03 * c), v = (t.max - l) / t.max, n.beginPath(), n.lineWidth = v / 2, n.strokeStyle = "rgba(" + r.c + "," + (v + .2) + ")", n.moveTo(s.x, s.y), n.lineTo(t.x, t.y), n.stroke()));
            u.splice(u.indexOf(s), 1)
        });
        p(a)
    }
    var t = document.createElement("canvas"),
        r = v(),
        y = "c_n" + r.l,
        n = t.getContext("2d"),
        f, e, p = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n) {
            window.setTimeout(n, 1e3 / 45)
        },
        o = Math.random,
        i = {
            x: null,
            y: null,
            max: 2e4
        },
        s, h;
    for (t.id = y, t.style.cssText = "position:fixed;top:0;left:0;z-index:" + r.z + ";opacity:" + r.o, c("body")[0].appendChild(t), l(), window.onresize = l, window.onmousemove = function(n) {
            n = n || window.event;
            i.x = n.clientX;
            i.y = n.clientY
        }, window.onmouseout = function() {
            i.x = null;
            i.y = null
        }, s = [], h = 0; r.n > h; h++) {
        var w = o() * f,
            b = o() * e,
            k = 2 * o() - 1,
            d = 2 * o() - 1;
        s.push({
            x: w,
            y: b,
            xa: k,
            ya: d,
            max: 6e3
        })
    }
    if (window.innerWidth > 959) {
        if (localStorage.getItem("canvas")) return;
        (DeviceInfo.OS.Name == "Windows" || DeviceInfo.OS.Name == "Mac OS") && ($(".canvas-close").show(), setTimeout(function() {
            a()
        }, 100))
    }
    $(".canvas-close").on("click", function() {
        $("canvas").remove();
        $(this).remove();
        localStorage.setItem("canvas", 0)
    })
}();