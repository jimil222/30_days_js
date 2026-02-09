const settings = {
    dmode : true,
    display : "oled",
    rrate : 120
}

const onlystring = JSON.stringify(settings,["display","rrate"])
console.log(onlystring);
console.log(settings);