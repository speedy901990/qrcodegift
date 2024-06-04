function toggleAnswer1() {
    var x = document.getElementById("answer1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleAnswer2() {
    var x = document.getElementById("answer2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleAnswer3() {
    var x = document.getElementById("answer3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//---------------------------------------------------

function toggleError1() {
    var x = document.getElementById("error1");
    if (x.style.display === "none") {
        x.style.display = "block";
        setTimeout(function () { document.getElementById("error1").style.display = "none"; }, 3000);
    } else {
        x.style.display = "none";
    }
}

function toggleError2() {
    var x = document.getElementById("error2");
    if (x.style.display === "none") {
        x.style.display = "block";
        setTimeout(function () { document.getElementById("error2").style.display = "none"; }, 3000);
    } else {
        x.style.display = "none";
    }
}

function toggleError3() {
    var x = document.getElementById("error3");
    if (x.style.display === "none") {
        x.style.display = "block";
        setTimeout(function () { document.getElementById("error3").style.display = "none"; }, 3000);
    } else {
        x.style.display = "none";
    }
}

//---------------------------------------------------

function validate1() {
    var x = document.getElementById("question1").value.trim().toLowerCase();
    var e = document.getElementById("error1");
    if (x == "filip") {
        e.style.display = "none";
        toggleAnswer1();
    }
    else {
        toggleError1();
    }
}

function validate2() {
    var x = document.getElementById("question2").value.trim().toLowerCase();
    var e = document.getElementById("error2");
    if (x == "4") {
        e.style.display = "none";
        toggleAnswer2();
    }
    else {
        toggleError2();
    }
}

function validate3() {
    var x = document.getElementById("question3").value.trim().toLowerCase();
    var e = document.getElementById("error3");
    if (x == "bialka" || x == "białka" || x == "bialka tatrzanska" || x == "białka tatrzańska" || x == "bialka tatrzańska" || x == "białka tatrzanska") {
        e.style.display = "none";
        toggleAnswer3();
    }
    else {
        toggleError3();
    }
}