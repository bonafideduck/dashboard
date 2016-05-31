function row3() {
    var data = {
        labels: [
            "Red",
            "Blue",
            "Yellow"
        ],
        datasets: [
            {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    };
    var ctx = document.getElementById("myPie");
    var myPieChart = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: {}
    });
}

row3();
