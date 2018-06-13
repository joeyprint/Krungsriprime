var owl = $('.owl-carousel');


// Intitial Carousel Event Function
owl.on('initialized.owl.carousel', function(property) {
    $('.owl-item .click-more').css({ "animation" : "fadeInDown 0.2s" , "opacity" : 1});
    $('.owl-prev').css({ "opacity" : "0" });
    console.log('get-start'); 
});

// Format of carousel
owl.owlCarousel({
    center: true,    
    items: 1,
    loop: false,
    margin: 20,
    nav: true,
    navClass: ['.owl-prev', 'owl-next'],
    autoWidth: true,
    responsive: {
        0 :{
            items: 2
        }
    }
});


// Control carousel 
owl.on('translate.owl.carousel', function(property) {

    // Find Index
    var current = property.item.index;

    $('.owl-item .click-more').css({ "animation" : "fadeOutUp 0.2s" , "opacity" : 0 });

    console.log(current);
});

owl.on('translated.owl.carousel', function(property) {
    var current = property.item.index;

    $('.owl-item.active .click-more').css({ "animation" : "fadeInDown 0.2s" , "opacity" : 1});

    if (current === 6) {
        $('.owl-next').css({ "opacity" : "0" });
    } else if (current === 0) {
        $('.owl-prev').css({ "opacity" : "0" });
    } else {
        $('.owl-prev').css({ "opacity" : "1" });
        $('.owl-next').css({ "opacity" : "1" });
    }

    console.log(current);
});

$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

var people = [
    {
        name: "TAVEPONG Pratoomwong",
        job: "PHOTOGRAPHER",
        description: "1 ใน 20 ช่างภาพสตรีทที่ทรงอิทธิพลที่สุดในปี 2015 จัดอันดับโดยเว็บไซต์ Streethunter.net",
        quote: 'ชัตเตอร์ครั้งที่ล้าน<br>สร้างมาสเตอร์พีซ<br class="d-none d-md-block"> ให้ชีวิตการทำงาน',
        picture: asset_url + "/imgs/people1.png"
    },
    {
        name: "BAM PITIPATT",
        job: "RADIO DJ",
        description: "พิธีกรรายการทีวีมากความสามารถ และ DJ ฝีปากจัดจ้าน",
        quote: 'นาทีที่ล้านของการฝึก<br>เปลี่ยนมือสมัครเล่น<br class="d-none d-md-block"> เป็นมืออาชีพ',
        picture: asset_url + "/imgs/people2.png"
    },
    {
        name: "MAY SAMITADA",
        job: "RUNNER",
        description: "คุณหมอนักวิ่ง ที่วิ่งเคียงข้าง ตูน บอดี้สแลม โครงการก้าวคนละก้าว",
        quote: 'ก้าวที่ล้าน คือก้าว<br>ที่เราข้ามขีดจำกัด<br class="d-none d-md-block">ของตัวเอง',
        picture: asset_url + "/imgs/people3.png"
    },
    {
        name: "FONGBEER",
        job: "SONG WRITER",
        description: "ผู้บริหารค่ายเพลง และนักเเต่งเพลงผู้อยู่เบื้องหลังเพลงฮิตมากมาย",
        quote: 'โน๊ตตัวที่ล้าน คือโน๊ต<br>ที่พาเรา ก้าวสู่การ<br class="d-none d-md-block">เริ่มต้นธุรกิจ',
        picture: asset_url + "/imgs/people4.png"
    },
    {
        name: "BOW CHOMPUNOOD",
        job: "BEAUVITA BRAND",
        description: "สาวหลากความสามารถ ทั้งพิธีกรเเละเจ้าของเเบรนด์ BEAUVITA",
        quote: 'เงินทุนล้านแรก<br> เปลี่ยนมนุษย์เงินเดือน<br class="d-none d-md-block"> สู่เจ้าของธุรกิจ',
        picture: asset_url + "/imgs/people5.png"
    },
    {
        name: "HAPPY NANCY",
        job: "BLOGER TRAVEL",
        description: "นักเดินทางและนักเขียน เจ้าของบล็อคท่องเที่ยว “HAPPY NANCY”",
        quote: 'เมตรที่ล้าน<br class="d-none d-md-block"> ทำให้รู้จัก<br>โลกใบใหม่ดีกว่าเดิม',
        picture: asset_url + "/imgs/people6.png"
    },
    {
        name: "PANG ASCHA",
        job: "FIFTH SEASON BRAND",
        description: "นักธุรกิจสาวแห่งวงการแฟชั่น เจ้าของร้าน fifth season",
        quote: 'ล้านแรกของชีวิต<br>สู่ร้านแรก<br class="d-none d-md-block">ของความฝัน',
        picture: asset_url + "/imgs/people7.png"
    }   
];

function peopleDetail (peopleNumber) {
    var index = peopleNumber-1;

    $("#name").html(people[index].name);
    $("#job").html(people[index].job);
    $("#description").html(people[index].description);
    $("#quote").html(people[index].quote);
    $("#picture").attr("src", people[index].picture);
}