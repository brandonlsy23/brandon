$(function () {
    createLineGraph();
    $("#getWeatherBtn").click(function () {
        var latitude = $("#latitude").val();
        var longitude = $("#longitude").val();
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=11984783a43a9c90c692c3697acd91a4&units=Metric',
            type: 'POST',
            timeout: 10000,
            dataType: 'text',
            contentType: 'application/x-www-form-urlencoded',
            data: $('#theForm').serialize()
        }).done(function (response) {
            populateTableWithJSON(response);

        }).fail(function () {
            alert('an error has occurred');
        });
        return false;
    });

    function required() 
        {
            var empt = $("#latitude").value;
            if (empt == "") {
                alert("Please input a Value");
                return false;
            }
            else {
                alert('Code has accepted : you can try another');
                return true;
            }
        }

    function createLineGraph() {
        var myCanvas = document.getElementById("canvas");
        var context = myCanvas.getContext("2d");
        context.font = "10px Arial";
        //Y axis
        context.strokeText("1 AM", 50, 15);
        context.strokeText("2 AM", 100, 15);
        context.strokeText("3 AM", 150, 15);
        context.strokeText("4 AM", 200, 15);
        context.strokeText("5 AM", 250, 15);
        context.strokeText("6 AM", 300, 15);
        context.strokeText("7 AM", 350, 15);
        context.strokeText("8 AM", 400, 15);
        context.strokeText("9 AM", 450, 15);
        context.strokeText("10 AM", 500, 15);
        context.strokeText("11 AM", 550, 15);
        context.strokeText("12 PM", 600, 15);
        context.strokeText("13 PM", 650, 15);
        context.strokeText("14 PM", 700, 15);
        context.strokeText("15 PM", 750, 15);
        context.strokeText("16 PM", 800, 15);
        context.strokeText("17 PM", 850, 15);
        context.strokeText("18 PM", 900, 15);
        context.strokeText("19 PM", 950, 15);
        context.strokeText("20 PM", 1000, 15);
        context.strokeText("21 PM", 1050, 15);
        context.strokeText("22 PM", 1100, 15);
        context.strokeText("23 PM", 1150, 15);
        context.strokeText("00 AM", 1200, 15);

        //X axis
        context.strokeText("10", 15, 100);
        context.strokeText("20", 15, 200);
        context.strokeText("30", 15, 300);
        context.strokeText("40", 15, 400);
        context.strokeText("50", 15, 500);
    }
   
    function drawline(xValue,yValue,chosenColor) {
        var myCanvas = document.getElementById("canvas");
        var context = myCanvas.getContext("2d");
        var xArr = xValue;
        var yArr = yValue;
        //xArr.push(950);
        //xArr.push(1100);
        //yArr.push(200);
        //yArr.push(230);

        context.fillStyle = 'none';
        context.strokeStyle = chosenColor;
       
        context.lineWidth = 1;
        context.beginPath();
        for (var i = 0; i < xArr.length; i++) {
            console.log(i + " " + xArr[i]);
            console.log(i + " " + yArr[i]);
            context.lineTo(xArr[i],yArr[i]);
        }
        context.stroke();
        context.closePath();
       
    }

   

    function populateTableWithJSON(response) {
        //deserialise
        var json = JSON.parse(response);
        var xArray2 = [];
        var yArray2 = [];
        
        var dayColor = ["black", "blue", "green", "red", "purple"];
        var chosenColor="black" ;
        var currentDate = new Date();
        var currentDay = currentDate.getDay();
        var k = 0;

        for (var i = 0; i < json.list.length; i++) {
            var date = new Date((json.list[i].dt) * 1000).toLocaleDateString("en-AU");
            var date2 = new Date((json.list[i].dt) * 1000);
            var time = new Date((json.list[i].dt) * 1000).toLocaleTimeString();
            var temperature = Math.round(json.list[i].main.temp) + "\u00B0";
            var temperature2 = Math.round(json.list[i].main.temp);
            var description = json.list[i].weather[0].description;
            
            
            var dayOfDate = date2.getDay();
            if (currentDay != dayOfDate) {
                drawline(xArray2, yArray2, chosenColor);
                k++;
                chosenColor = dayColor[k];
                console.log(k)
                currentDay=dayOfDate;
                xArray2 = [];
                yArray2 = [];
            }
            console.log("start");
            assignDate(date, time, temperature, description, temperature2,xArray2,yArray2);
            console.log("end");
        }
        //drawline(xArray2, yArray2,chosenColor);
    }

    function getImg(description, status) {
        var img;
        if (status == "day") {
            if (description == "light rain") {
                img = "<img src='light_rain_day.png' style='width: 35px; height: 30px;'>";
            }
            else if (description == "few clouds") {
                img = "<img src='few_clouds_day.jpg' style='width: 35px; height: 30px;'>";
            }
            else if (description == "scattered clouds") {
                img = "<img src='scattered_clouds.png' style='width: 35px; height: 30px;'>";
            }
            else if (description == "broken clouds") {
                img = "<img src='broken_clouds.png' style='width: 35px; height: 30px;'>";
            }
            else {
                img = "<img src='clearSky.png' style='width: 35px; height: 30px;'>";
            }
        }
        if (status == "night") {
            if (description == "light rain") {
                img = "<img src='light_rain_night.jpg' style='width: 35px; height: 30px;'>";
            }
            else if (description == "few clouds") {
                img = "<img src='few_clouds_night.jpg' style='width: 35px; height: 30px;'>";
            }
            else if (description == "scattered clouds") {
                img = "<img src='scattered_clouds.png' style='width: 35px; height: 30px;'>";
            }
            else if (description == "broken clouds") {
                img = "<img src='broken_clouds.png' style='width: 35px; height: 30px;'>";
            }
            else {
                img = "<img src='clearSky_night.png' style='width: 35px; height: 30px;'>";
            }
        }

        return img;
    }

    function assignDate(date, time, temperature, description,temperature2,xArray2,yArray2) {
        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var today = new Date();
        var day = weekday[today.getDay()];
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var currentDate = dd + '/' + mm + '/' + yyyy;
        

        var secondDay = new Date(today);
        secondDay.setDate(today.getDate() + 1);
        secondDay.toLocaleDateString("en-AU");
        day2 = weekday[secondDay.getDay()];
        dd = String(secondDay.getDate()).padStart(2, '0');
        mm = String(secondDay.getMonth() + 1).padStart(2, '0'); //January is 0!
        yyyy = secondDay.getFullYear();
        secondDay = dd + '/' + mm + '/' + yyyy;
            
        var thirdDay = new Date(today);
        thirdDay.setDate(today.getDate() + 2);
        thirdDay.toLocaleDateString("en-AU");
        day3 = weekday[thirdDay.getDay()];
        dd = String(thirdDay.getDate()).padStart(2, '0');
        mm = String(thirdDay.getMonth() + 1).padStart(2, '0'); //January is 0!
        yyyy = thirdDay.getFullYear();
        thirdDay = dd + '/' + mm + '/' + yyyy;

        var fourthDay = new Date(today);
        fourthDay.setDate(today.getDate() + 3);
        fourthDay.toLocaleDateString("en-AU");
        day4 = weekday[fourthDay.getDay()];
        dd = String(fourthDay.getDate()).padStart(2, '0');
        mm = String(fourthDay.getMonth() + 1).padStart(2, '0'); //January is 0!
        yyyy = fourthDay.getFullYear();
        fourthDay = dd + '/' + mm + '/' + yyyy;

        var fifthDay = new Date(today);
        fifthDay.setDate(today.getDate() + 4);
        fifthDay.toLocaleDateString("en-AU");
        day5 = weekday[fifthDay.getDay()];
        dd = String(fifthDay.getDate()).padStart(2, '0');
        mm = String(fifthDay.getMonth() + 1).padStart(2, '0'); //January is 0!
        yyyy = fifthDay.getFullYear();
        fifthDay = dd + '/' + mm + '/' + yyyy;

       
        //day1
        if (currentDate == date) {
            $("#firstDay").html(day + '<br>' + date);
            if (time == "1:00:00 AM") {
                xArray2.push(50);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#firstDayOneAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "4:00:00 AM") {
                xArray2.push(200);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#firstDayFourAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "7:00:00 AM") {
                xArray2.push(350);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#firstDaySevenAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "10:00:00 AM") {
                xArray2.push(500);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#firstDayTenAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "1:00:00 PM") {
                xArray2.push(650);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#firstDayOnePM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "4:00:00 PM") {
                xArray2.push(800);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#firstDayFourPM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "7:00:00 PM") {
                xArray2.push(950);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#firstDaySevenPM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "10:00:00 PM") {
                xArray2.push(1100);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#firstDayTenPM").html(temperature + '<br>' + img + '<br>' + description);
            }
            

        }
        if (secondDay == date) {
            dayColor = "black";
            $("#secondDay").html(day2 + '<br>' + date);
            if (time == "1:00:00 AM") {
                xArray2.push(50);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#secondDayOneAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "4:00:00 AM") {
                xArray2.push(200);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#secondDayFourAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "7:00:00 AM") {
                xArray2.push(350);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#secondDaySevenAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "10:00:00 AM") {
                xArray2.push(500);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#secondDayTenAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "1:00:00 PM") {
                xArray2.push(650);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#secondDayOnePM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "4:00:00 PM") {
                xArray2.push(800);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#secondDayFourPM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "7:00:00 PM") {
                xArray2.push(950);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#secondDaySevenPM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "10:00:00 PM") {
                xArray2.push(1100);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#secondDayTenPM").html(temperature + '<br>' + img + '<br>' + description);
            }
            
        }
        if (thirdDay == date) {
            console.log()
            $("#thirdDay").html(day3 + '<br>' + date);
            if (time == "1:00:00 AM") {
                xArray2.push(50);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#thirdDayOneAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "4:00:00 AM") {
                xArray2.push(200);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#thirdDayFourAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "7:00:00 AM") {
                xArray2.push(350);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#thirdDaySevenAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "10:00:00 AM") {
                xArray2.push(500);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#thirdDayTenAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "1:00:00 PM") {
                xArray2.push(650);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#thirdDayOnePM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "4:00:00 PM") {
                xArray2.push(800);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#thirdDayFourPM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "7:00:00 PM") {
                xArray2.push(950);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#thirdDaySevenPM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "10:00:00 PM") {
                xArray2.push(1100);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#thirdDayTenPM").html(temperature + '<br>' + img + '<br>' + description);
            }
        }
        if (fourthDay == date) {
            $("#fourthDay").html(day4 + '<br>' + date);
            if (time == "1:00:00 AM") {
                xArray2.push(50);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#fourthDayOneAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "4:00:00 AM") {
                xArray2.push(200);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#fourthDayFourAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "7:00:00 AM") {
                xArray2.push(350);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#fourthDaySevenAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "10:00:00 AM") {
                xArray2.push(500);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#fourthDayTenAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "1:00:00 PM") {
                xArray2.push(650);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#fourthDayOnePM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "4:00:00 PM") {
                xArray2.push(800);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#fourthDayFourPM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "7:00:00 PM") {
                xArray2.push(950);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#fourthDaySevenPM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "10:00:00 PM") {
                xArray2.push(1100);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#fourthDayTenPM").html(temperature + '<br>' + img + '<br>' + description);
            }
        }
        if (fifthDay == date) {
            $("#lastDay").html(day5 + '<br>' + date);
            if (time == "1:00:00 AM") {
                xArray2.push(50);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#lastDayOneAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "4:00:00 AM") {
                xArray2.push(200);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#lastDayFourAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "7:00:00 AM") {
                xArray2.push(350);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#lastDaySevenAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "10:00:00 AM") {
                xArray2.push(500);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#lastDayTenAM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "1:00:00 PM") {
                xArray2.push(650);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#lastDayOnePM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "4:00:00 PM") {
                xArray2.push(800);
                yArray2.push((temperature2 *= 10));
                var status = "day";
                var img = getImg(description, status);
                $("#lastDayFourPM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "7:00:00 PM") {
                xArray2.push(950);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#lastDaySevenPM").html(temperature + '<br>' + img + '<br>' + description);
            }
            if (time == "10:00:00 PM") {
                xArray2.push(1100);
                yArray2.push((temperature2 *= 10));
                var status = "night";
                var img = getImg(description, status);
                $("#lastDayTenPM").html(temperature + '<br>' + img + '<br>' + description);
            }
        }
    }
});
