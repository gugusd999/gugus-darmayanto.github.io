
timeshow(){
    var d = this.helper.tanggal().normal;
    var c = this.helper.tanggal(d);
    document.getElementById('timer').innerHTML = c.sekarang2 + ' ' + this.helper.times();
}

formCall(){
    alert('ok')
}

goDemo(){
    alert('demo port')
}

galery(){

    for (let ax = 0; ax < 6; ax++) {
        this.getid('galery').innerHTML += `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h4>Title</h4>
                        <img class="img-fluid mb-3" src="./asset/cover/cover1.png" alt="">
                        <button type="button" onclick="cf.fn('goDemo', this); return false;" class="btn btn-primary">Lihat Demo</button>
                    </div>
                </div>
            </div>
        `;
    }

}

scroll(eve){
    var id = eve.getAttribute('href').replace('#', '');
    var element = document.getElementById(id);
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top + window.scrollY;
    var offsetPosition = elementPosition - headerOffset;

    console.log(elementPosition);

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

keahlian(){

    var path = './asset/portofolio/01/';

    var data = [
        {
            title: 'Web Design',
            cover: path + 'web.svg',
            describe: 'Sebagai web designer saya menguasai html5, css3, javascript ES6'
        },
        {
            title: 'App Development',
            cover: path + 'app.svg',
            describe: 'Sebagai App Development saya menguasai PHP dan PHP Framework khususnya Codigniter 3 dan Codigniter 4, Laravel, dan Node JS.'
        },
        {
            title: 'CMS Development',
            cover: path + 'web.svg',
            describe: 'Sebagai CMS development saya menguasai wordpress.'
        }
    ]

    for (let ax = 0; ax < data.length; ax++) {
        this.getid('keahlian').innerHTML += `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body text-center">
                        <img height="100px" class="mb-3" src="${data[ax].cover}" alt="">
                        <h4>${data[ax].title}</h4>
                        <p>${data[ax].describe}</p>
                    </div>
                </div>
            </div>
        `;
    }

}


project(){

    var path = './asset/project-pernah-dibuat/';

    var datagambar = [
        "bpkbmotorku.png",
        "ekonseling.png",
        "manusantara.png",
        "sinarmutiarapalem.png",
        "glearn-2.png",
        "sipintar.png",
        "yuk-design.png"
    ];

    var datanama = [
        "BPKB Motorku",
        "Ekonseling",
        "Manusantara",
        "Sinarmutiarapalem",
        "Glearn",
        "Sipintar",
        "Yuk-design"
    ];


    var link = [
        "http://bpkbmotorku.com/",
        "http://ekonseling.yuk-design.com/ekonseling/",
        "http://manusantara.com/",
        "http://sinarmutiarapalem.com/",
        "https://gugusd999.github.io/glearn.github.io/#/",
        "http://sipintar.yuk-design.com/",
        "http://yuk-design.com/"
    ]

    for (let ax = 0; ax < datagambar.length; ax++) {
        this.getid('galery').innerHTML += `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body text-center">
                        <div class="thumb" style="--background: url('${path + datagambar[ax]}')"></div>
                        <div class="text-center mt-3">
                            <span>${datanama[ax]}<span><br>
                            <a class="btn btn-primary" href="${link[ax]}">Buka Website</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }


}

kontak(){
    var icon = [
        'fab fa-telegram',
        'fab fa-whatsapp',
        'fab fa-facebook'
    ];

    var nama = [
        "Telegram",
        "Whatsapp",
        "Facebook"
    ];

    var link = [
        "https://t.me/gugusdarmayanto",
        "https://wa.me/+6285800455338",
        "https://web.facebook.com/gugus.darmayanto.9"
    ];

    for (let ax = 0; ax < icon.length; ax++) {
        this.getid('kontak-data').innerHTML += `
            <a href="${link[ax]}" style="cursor:pointer;" class="col-12 mb-4 fbase">
                <div class="card">
                    <div class="card-body text-center">
                        <i style="font-size: 20px;" class="${icon[ax]}"></i> ${nama[ax]}
                    </div>
                </div>
            </a>
        `;
    }
}

run(){
    this.timeshow();
    setInterval(() => {
        this.timeshow();
    }, 1000);
    $("section").css('min-height', 'calc(100vh - 50px)');
    $('.jumbotron .container').css({
        'display': 'flex',
        'align-item': 'center'
    })
    $("#me").css({ "max-width": "320px", "width": "100%" });
    $(".bg-blue-light").css({
        'background-color': '#f6f7fb'
    })
    $(".jumbotron").css({
        'background-image': "url('./asset/portofolio/01/g3795.png')",
        'background-size': 'cover',
        'min-height': '100vh',
        'color': 'black',
        'display': 'flex',
        'padding': '40px'
    })
    $("#timer").css('display', 'block');
    $(".jumbotron .row").css({
        'width': '100%'
    })
    $(".border-1").css({
        'color': 'black',
        'border': '1px solid black'
    })
    $('#title-mark').css({
        'font-size': 'calc(20px + 1.5vw)'
    })
    this.keahlian();
    this.project();
    this.kontak();
}