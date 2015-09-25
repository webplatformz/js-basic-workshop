"use strict";

function exercise51() {
    $.get("/rest/exercise51", callback51);
}

function exercise52(array) {
    if (Array.isArray(array)) {
        console.log(array.join(","));
    }
}