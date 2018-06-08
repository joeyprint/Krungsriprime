var owl = $('.owl-carousel');

owl.on('initialized.owl.carousel', function(property) {
    $('.owl-item .click-more').css({ "opacity" : "1" });
    $('.owl-prev').css({ "opacity" : "0" });
    console.log('get-start'); 
});

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

owl.on('translate.owl.carousel', function(property) {
    var current = property.item.index;

    $('.owl-item .click-more').css({ "opacity" : "0" });

    if(current == null) {
        $('.owl-item .click-more').css({ "opacity" : "1" });
    }
    console.log(current);
});

owl.on('translated.owl.carousel', function(property) {
    var current = property.item.index;

    $('.owl-item.active .click-more').css({ "opacity" : "1" });

    if(current === 6) {
        $('.owl-next').css({ "opacity" : "0" });
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
        quote: "ชัตเตอร์ครั้งที่ล้านสร้าง มาสเตอร์พีซ ให้ชีวิตการทำงาน",
        picture: asset_url + "/imgs/people1.png"
    },
    {
        name: "BAM PITIPATT",
        job: "RADIO DJ",
        description: "พิธีกรรายการทีวีมากความสามารถ และ DJ ฝีปากจัดจ้าน",
        quote: "นาทีที่ล้านของการฝึก เปลี่ยนมือสมัครเล่น เป็นมืออาชีพ",
        picture: asset_url + "/imgs/people2.png"
    },
    {
        name: "MAY SAMITADA",
        job: "RUNNER",
        description: "คุณหมอนักวิ่ง ที่วิ่งเคียงข้าง ตูน บอดี้สแลม โครงการก้าวคนละก้าว",
        quote: "ก้าวที่ล้าน คือก้าวที่เราข้ามขีดจำกัดของตัวเอง",
        picture: asset_url + "/imgs/people3.png"
    },
    {
        name: "FONGBEER",
        job: "SONG WRITER",
        description: "ผู้บริหารค่ายเพลง และนักเเต่งเพลงผู้อยู่เบื้องหลังเพลงฮิตมากมาย",
        quote: "โน๊ตตัวที่ล้าน คือโน๊ต ที่พาเรา ก้าวสู่การเริ่มต้นธุรกิจ",
        picture: asset_url + "/imgs/people4.png"
    },
    {
        name: "BOW CHOMPUNOOD",
        job: "BEAUVITA BRAND",
        description: "สาวหลากความสามารถ ทั้งพิธีกรเเละเจ้าของเเบรนด์ BEAUVITA",
        quote: "เงินทุนล้านแรก เปลี่ยนมนุษย์เงินเดือน สู่เจ้าของธุรกิจ",
        picture: asset_url + "/imgs/people5.png"
    },
    {
        name: "HAPPY NANCY",
        job: "BLOGER TRAVEL",
        description: "นักเดินทางและนักเขียน เจ้าของบล็อคท่องเที่ยว “HAPPY NANCY”",
        quote: "เมตรที่ล้าน ทำให้รู้จักโลกใบใหม่ดีกว่าเดิม",
        picture: asset_url + "/imgs/people6.png"
    },
    {
        name: "PANG ASCHA",
        job: "FIFTH SEASON BRAND",
        description: "นักธุรกิจสาวแห่งวงการเเฟชั่น เจ้าของร้าน fifth season",
        quote: "ล้านแรกของชีวิต สู่ร้านแรกของความฝัน",
        picture: asset_url + "/imgs/people7.png"
    }   
];

function peopleDetail (peopleNumber) {
    var index = peopleNumber-1;

    $("#name").text(people[index].name);
    $("#job").text(people[index].job);
    $("#description").text(people[index].description);
    $("#quote").text(people[index].quote);
    $("#picture").attr("src", people[index].picture);
}