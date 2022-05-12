// finding the options

const selectfontsize = document.getElementById("selectfontsize");
const selectBGcolor = document.getElementById("selectBGcolor");
const button = document.getElementById("button");
const main = document.querySelector("main");





// changeFontSize
const changeFontSize = (event) => {
    // console.log(event.target.value);
    let SELECTEDFONTSIZE = event.target.value;
    main.style.fontSize = SELECTEDFONTSIZE;
    localStorage.setItem("fontSize", SELECTEDFONTSIZE)
};



// changeBGcolor
const changeBGcolor = (event) => {
    // console.log(event.target.value);
    let CHANGEBGCOLOR = event.target.value;
    main.style.background = CHANGEBGCOLOR;
    localStorage.setItem("bgcolor", CHANGEBGCOLOR);
}

// clickLocalStorages
const clickLocalStorages = () => {
    localStorage.removeItem("bgcolor");
    localStorage.removeItem("fontSize");
}





let setValue = (color, font) => {
    selectfontsize.value = font;
    selectBGcolor.value = color;
    main.style.fontSize = font;
    main.style.background = color;
}


//load_localStorages_value
let initialSetup = () => {
    let color = localStorage.getItem("bgcolor");
    let font = localStorage.getItem("fontSize");

    if (color && font) {
        setValue(font, color)

    }

    if (!color && !font) {
        // selectfontsize.value = "16px";
        // selectBGcolor.value = "aqua";
        // main.style.fontSize = "16px";
        // main.style.background = "aqua";

        setValue("16px", "aqua")
    }

    if (!color && font) {
        setValue("aqua", font)
    }

    if (color && !font) {
        setValue(color, "16px")
    }
}


// add event listiner

selectfontsize.addEventListener("change", changeFontSize);
selectBGcolor.addEventListener("change", changeBGcolor);
button.addEventListener("click", clickLocalStorages);

initialSetup()