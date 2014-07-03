var app = app || {};

document.onreadystatechange = function () {
    var state = document.readyState;

    if (state == "interactive") {
        console.log("Document ready to accept interactions");
    } else if (state == "complete") {
        new app.View();

        console.log("Document completely loaded");
    }
}
