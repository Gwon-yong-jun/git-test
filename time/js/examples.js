document.getElementById('demosMenu').addEventListener('change', function(e){
    var dropdown = document.getElementById('demosMenu');
    window.location.href = dropdown.options[dropdown.selectedIndex].getAttribute('id') + '.html';
});

function searchGoogle() {
    // 사용자가 입력한 검색어 가져오기
    var query = document.getElementById("search-input").value;

    // 구글 검색 URL 형식에 맞게 검색어 추가
    if (query) {
        var url = "https://www.google.com/search?q=" + encodeURIComponent(query);

        // 구글 검색 페이지로 이동
        window.location.href = url;
    } else {
        alert("검색어를 입력해주세요.");
    }
}