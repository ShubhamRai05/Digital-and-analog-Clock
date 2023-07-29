let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")


setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hh + (mm / 12)}deg)`
    minute.style.transform = `rotateZ(${mm}deg)`
    second.style.transform = `rotateZ(${ss}deg)`
})

// digital clock
let digHour = document.querySelector("#dhour")
let digMinute = document.querySelector("#dminutes")
let digSecond = document.querySelector("#dseconds")
let amPm = document.querySelector("#ampm")

setInterval(() => {

    let dh = new Date().getHours();
    let dm = new Date().getMinutes();
    let ds = new Date().getSeconds();

    let am = dh >= 12 ? "PM" : "AM";


    // convert 24 hour clock to 12hr

    if(dh>12){
        dh = dh-12;
    }

    dh = (dh < 10) ? "0" + dh : dh;
    dm = (dm < 10) ? "0" + dm : dm;
    ds = (ds < 10) ? "0" + ds : ds;

    digHour.textContent = `${dh}`;
    digMinute.textContent = dm;
    digSecond.textContent = `${ds}`;
    amPm.innerHTML = am;


});
