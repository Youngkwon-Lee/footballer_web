// scripts.js
$(document).ready(function(){
    // 동적 콘텐츠를 가져올 JSON 파일 경로
    var menuData = {
        "menu": [
            {
                "name": "About Us",
                "link": "#about"
            },
            {
                "name": "Technology",
                "link": "#technology"
            },
            {
                "name": "Product",
                "link": "#product"
            },
            {
                "name": "IR",
                "link": "#ir"
            },
            {
                "name": "Contact Us",
                "link": "#contact"
            },
            {
                "name": "Newsroom",
                "link": "#newsroom"
            },
            {
                "name": "Careers",
                "link": "#careers"
            }
        ]
    };

    var newsData = [
        {
            "title": "[2023 서울시립대학교 캠퍼스타운 스타트업 CEO] AI 축구 하이라이트 서비스하는 '사운보츠'",
            "description": "[2023 서울시립대학교 캠퍼스타운 스타트업 CEO] AI 축구 하이라이트 자동 편집 서비스를 제공하는 '사운보츠'",
            "image": "images/news_01.jpg",
            "tags": ["사운보츠", "축구", "AI"],
            "date": "2023.10.24",
            "link": "https://magazine.hankyung.com/job-joy/article/202310243405d"
        },
        {
            "title": "와이앤아처, '스타트업 엑스스피치' 본선 대회 성료",
            "description": "와이앤아처가 주최한 '스타트업 엑스스피치' 본선 대회를 성공적으로 마쳤습니다.",
            "image": "images/news_02.jpg",
            "tags": ["와이앤아처", "스타트업", "엑스스피치"],
            "date": "2023.10.28",
            "link": "https://www.sentv.co.kr/news/view/647683"
        }
    ];

    // 네비게이션 메뉴 삽입
    var desktopMenu = '';
    var mobileMenu = '';
    menuData.menu.forEach(function(item) {
        desktopMenu += '<li><a href="' + item.link + '">' + item.name + '</a></li>';
        mobileMenu += '<li><a href="' + item.link + '">' + item.name + '</a></li>';
    });
    $('#nav-menu').html(desktopMenu);
    $('#mobile-nav-menu').html(mobileMenu);

    // 네비게이션 메뉴 애니메이션
    gsap.from("#nav-menu li", {
        duration: 1,
        opacity: 0,
        y: -20,
        stagger: 0.2,
        ease: "power2.out"
    });

    gsap.from("#mobile-nav-menu li", {
        duration: 1,
        opacity: 0,
        y: -20,
        stagger: 0.2,
        ease: "power2.out"
    });

    // 뉴스룸 콘텐츠 삽입
    var newsContent = '';
    newsData.forEach(function(item) {
        var tags = item.tags.map(function(tag) {
            return '<span>' + tag + '</span>';
        }).join('');

        newsContent += `
            <div class="news-item">
                <a href="${item.link}" target="_blank">
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <div class="tags">${tags}</div>
                    <div class="date">${item.date}</div>
                </a>
            </div>
        `;
    });
    $('#news-grid').html(newsContent);

    // 뉴스 아이템 애니메이션
    gsap.from(".news-item", {
        scrollTrigger: {
            trigger: ".news-item",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reset"
        },
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // 모바일 메뉴 버튼 클릭 이벤트
    $('#mobile-menu-button').on('click', function() {
        $('#mobile-nav').toggleClass('open');
    });

    // ScrollTrigger 설정
    gsap.utils.toArray(".section").forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => gsap.to(section, {opacity: 1, y: 0}),
            onLeave: () => gsap.to(section, {opacity: 0, y: 50}),
            onEnterBack: () => gsap.to(section, {opacity: 1, y: 0}),
            onLeaveBack: () => gsap.to(section, {opacity: 0, y: 50})
        });
    });
});
