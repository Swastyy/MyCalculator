
//const express = require("express");

function clrscr () {
    document.getElementById("screen").value="";
}

function clk (val) {
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function equal () {
    var text = document.getElementById("screen").value;
    var result = eval(text);
    document.getElementById("screen").value=result;
}