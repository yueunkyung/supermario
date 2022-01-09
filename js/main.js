// parsing
// json ===> html
// ajax asynchronous javascript and xml
//library (1.fetch 2.jQuery 3.axios)

const marioUL = $(".marioList");
let mySwiper = null;
function loadMario(_url) {
    marioUL.html("");
    $.ajax({
        url: _url,
        success: function (res) {
            //console.log(res);
            const marioList = res.mario;
            let output = "";

            // marioList.forEach(function (item, idx) {}); //javascript 반복문

            if (mySwiper !== null) {
                mySwiper.destroy();
            }
            $.each(marioList, function (idx, item) {
                //jQuery 반복문
                // console.log(item.img);
                output += `<li class="swiper-slide">
                    <div class="mario">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="txt">
                        <h2 class="title">${item.title}</h2>
                        <p>
                            ${item.desc}
                        </p>
                        <a href="${item.link}" target="_blank">MORE</a>
                    </div>
                    <div class="bg" style="background:${item.bg}"></div>
                </li>`;
            });

            // console.log("output", output);
            marioUL.append(output);

            setTimeout(function () {
                gsap.from("#main .mask li", {
                    opacity: 0,
                    y: -1000,
                    ease: "bounce",
                    duration: 1.5,
                    stagger: {
                        // each: 0.1,
                        // from: "edge",
                    },
                });
            }, 0);

            mySwiper = new Swiper("#main .mask", {
                slidesPerView: "auto",
                centeredSlides: true,
                loop: true,
                effect: "coverflow",
                coverflowEffect: {
                    rotate: 0,
                    depth: 1000,
                },
                mousewheel: true,
            });
        },
    });
}

loadMario("../data/mario.json");

let old = 0;

$("#gnb .list li").on("click", function () {
    if (old === $(this).index()) return;
    const path = "../data/";
    const suffix = ".json";
    const selected = $(this).data("url");

    //if (old === selected) return;

    const url = path + selected + suffix;
    old = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");
    loadMario(url);
});
