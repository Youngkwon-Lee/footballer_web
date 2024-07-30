// scripts.js
$(document).ready(function(){
    // 동적 콘텐츠를 가져올 JSON 파일 경로
    var contentURL = 'data.json';
    var menuURL = 'menu.json';

    // AJAX 요청으로 JSON 데이터를 가져와서 삽입
    $.ajax({
        url: contentURL,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var content = '<section id="news"><h2>Latest News</h2><ul>';
            data.news.forEach(function(item) {
                content += '<li><a href="' + item.link + '"><h3>' + item.title + '</h3><p>' + item.description + '</p></a></li>';
            });
            content += '</ul></section>';
            $('#dynamic-content').append(content);
        },
        error: function() {
            alert('동적 콘텐츠를 가져오는 데 실패했습니다.');
        }
    });

    // AJAX 요청으로 네비게이션 메뉴를 가져와서 삽입
    $.ajax({
        url: menuURL,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var menu = '';
            data.menu.forEach(function(item) {
                menu += '<li><a href="' + item.link + '">' + item.name + '</a></li>';
            });
            $('#nav-menu').html(menu);
        },
        error: function() {
            alert('네비게이션 메뉴를 가져오는 데 실패했습니다.');
        }
    });
});
