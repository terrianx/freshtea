// ==================================
// ===== js file for index.hmtl =====
// ==================================

// call us button alert
let callBtn = function () {
    alert("Ring Ring Ring Ring");
}

// calls review posting functions
let postReview = function () {
    let nm = document.getElementById("review-name").value;
    let t = document.getElementById("review-text").value;
    // empty input error checking
    if (nm != "" && t != "") {
        document.getElementById("review-post").style.display = "block";
        document.getElementById("review-input").style.display = "none";
        document.getElementById("add").style.display = "none";
        getName();
        getCurrentDate();
        getRating();
        getReview();
    }
}

// gets name of reviewer
let getName = function () {
    let nm = document.getElementById("review-name").value;
    document.getElementById("name").textContent = nm;
    document.getElementById("review-name").value = "";
}

// gets current date in m / d / y
let getCurrentDate = function () {
    let date = new Date();
    y = date.getFullYear() - 2000;
    m = date.getMonth() + 1;
    d = date.getDate();
    document.getElementById("date").textContent = m + "/" + d + "/" + y;
}

// gets rating
let getRating = function () {
    let rating = Number(document.getElementById("rating").value);
    let img = new Image();
    img.width = 100;
    switch (rating) {
        case 1:
            img.src = "images/star-1.png";
            document.getElementById("review-rating").appendChild(img);
            break;
        case 2:
            img.src = "images/star-2.png";
            document.getElementById("review-rating").appendChild(img);
            break;
        case 3:
            img.src = "images/star-3.png";
            document.getElementById("review-rating").appendChild(img);
            break;
        case 4:
            img.src = "images/star-4.png";
            document.getElementById("review-rating").appendChild(img);
            break;
        case 5:
            img.src = "images/star-5.png";
            document.getElementById("review-rating").appendChild(img);
            break;
    }
}

// gets review text
let getReview = function () {
    let text = document.getElementById("review-text").value;
    document.getElementById("text").textContent = text;
    document.getElementById("review-text").value = "";
}