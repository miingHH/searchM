document.addEventListener("DOMContentLoaded", function() {
    
    function initChart() {
        console.log("initChart is called!");

    var oldCanvas = document.getElementById('myChart');
    if(!oldCanvas) {
        console.log("No canvas found with id 'myChart'");
        return;
    } else {
        console.log("Canvas found with id 'myChart'");
    }

    var parent = oldCanvas.parentElement;
    if(!parent) {
        console.log("No parent element found for the canvas");
        return;
    } else {
        console.log("Parent element found for the canvas");
    }
    
    parent.removeChild(oldCanvas);

    var newCanvas = document.createElement('canvas');
    newCanvas.id = 'myChart';

    newCanvas.style.width = '142.53px';
    newCanvas.style.height = '161px';
    newCanvas.style.left = '1207px';
    newCanvas.style.top = '59px';
    newCanvas.style.position = 'absolute';

    parent.appendChild(newCanvas);

    var ctx = newCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['115%', '77%'],
                datasets: [{
                    label:'ss',
                    data: [11.5, 7.7],
                    backgroundColor: ['#002D54', '#ED6E05']
                }]
            },
            options: {
                responsive: false,
                scales: {
                    y: {
                        display: false, 
                    },
                    x: {
                        grid: {
                            drawOnChartArea: false,
                        },
                    },
                },
                plugins:{
                    legend: {
                        display: false
                    },
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart'
                },
                barThickness: 21.73
            }
        });
    }
    initChart();

    // 첫 번째 페이지의 링크를 클릭했을 때의 이벤트
    // document.querySelector(".clickable-text").addEventListener("click", function(event) {
    //     event.preventDefault();
    //     document.getElementById("originalContent").style.display = "none";
    //     document.getElementById("secondContent").style.display = "block";
    //     history.pushState({ page: 2 }, "Second page", "#second");
    //     initChart(); 
    // });

    // // 두 번째 페이지의 링크를 클릭했을 때의 이벤트
    // document.querySelector(".clickable-text2").addEventListener("click", function(event) {
    //     event.preventDefault();
    //     document.getElementById("secondContent").style.display = "none";
    //     document.getElementById("thirdContent").style.display = "block";
    //     history.pushState({ page: 3 }, "Third page", "#third");
    //     initChart();
    // });

    // 현재 URL의 해시에 따라 페이지 상태를 설정하는 함수
    // function setPageByHash() {
    //     let hash = window.location.hash;
    //     switch(hash) {
    //         case "":
    //         case "#first":
    //             document.getElementById("originalContent").style.display = "block";
    //             document.getElementById("secondContent").style.display = "none";
    //             document.getElementById("thirdContent").style.display = "none";
    //             break;
    //         case "#second":
    //             document.getElementById("originalContent").style.display = "none";
    //             document.getElementById("secondContent").style.display = "block";
    //             document.getElementById("thirdContent").style.display = "none";
    //             break;
    //         case "#third":
    //             document.getElementById("originalContent").style.display = "none";
    //             document.getElementById("secondContent").style.display = "none";
    //             document.getElementById("thirdContent").style.display = "block";
    //             initChart();
    //             break;
    //     }
    //     initChart();
    // }

    // // 페이지 로딩시 현재 URL 해시에 따라 페이지 상태 설정
    // setPageByHash();

    // '뒤로 가기' 버튼을 클릭했을 때도 현재 URL 해시에 따라 페이지 상태 설정
    // window.onpopstate = function(event) {
    //     setPageByHash();
    // }

    const boxes = document.querySelectorAll('.box1, .box2, .box3, .box4, .box5');
    boxes.forEach(box => {
        box.addEventListener('animationend', function() {
            this.style.display = 'none';
        });
    });
});
window.embeddedChatbotConfig = {
    chatbotId: "Pg1QH-ORFlJADa8OIUvi5",
    domain: "www.chatbase.co"
};
