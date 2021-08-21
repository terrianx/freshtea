// calls review posting functions
function postReview() {
    var nm = document.getElementById("review-name").value;
    var t = document.getElementById("review-text").value;
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
function getName() {
    var nm = document.getElementById("review-name").value;
    document.getElementById("name").innerHTML = nm;
    document.getElementById("review-name").value = "";
}

// gets current date in m / d / y
function getCurrentDate() {
    var date = new Date();
    y = date.getFullYear() - 2000;
    m = date.getMonth() + 1;
    d = date.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
}

// gets rating
function getRating() {
    var rating = parseInt(document.getElementById("rating").value);
    var img = new Image();
    img.width = 100;
    switch (rating) {
        case 1:
            img.src = "images/star-1.png";
            console.log(img.width);
            document.getElementById("review-rating").appendChild(img);
            break;
        case 2:
            img.src = "images/star-2.png";
            console.log(img.width);
            document.getElementById("review-rating").appendChild(img);
            break;
        case 3:
            img.src = "images/star-3.png";
            console.log(img.width);
            document.getElementById("review-rating").appendChild(img);
            break;
        case 4:
            img.src = "images/star-4.png";
            console.log(img.width);
            document.getElementById("review-rating").appendChild(img);
            break;
        case 5:
            img.src = "images/star-5.png";
            console.log(img.width);
            document.getElementById("review-rating").appendChild(img);
            break;
    }
}

// gets review text
function getReview() {
    var t = document.getElementById("review-text").value;
    document.getElementById("text").innerHTML = t;
    document.getElementById("review-text").value = "";
}