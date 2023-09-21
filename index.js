let massageVar;


let massages = "";
function redyMassage(){
    massages = [
        {
            q: "what is your name?",
            done: false,
            a: `ooooh! ${massageVar == "chitra" ? "Love you Baby": `Good ${massageVar}! but i was Expecting somting else`}`,
        },
        {
            q: "what is my girlfriend real name? (not surname)",
            done: false,
            a: `${massageVar == "soma" ? `Good you are right!`: "wrong!"}`,
        },
        {
            q: "what is my girlfriend date of birth date not mounth not year only date?",
            done: false,
            a: `${massageVar == "12" ? "hmm! \nyou are my soma.": "wrong!"}`,
        },

        //------------------------------------------------------

        {
            q: "How much Do you like me? (in persentage %)",
            done: false,
            a: `I love you ${Number(massageVar) * Math.ceil(Math.random() * 10 + 2)}% that is more then you!`,
        },

        {
            q: "Give PassWord \nHit: Promis Date (dd-mm-yy) eg. 02-01-1998",
            done: false,
            a: `${massageVar == "25-07-2023" ? "right!" : "wrong!"}`,
        },

    ]
}

redyMassage()

const massageBox = document.querySelector("#massage")
const sendBtn = document.querySelector("#send")

const holdingBox = document.querySelector(".show")
const lastWindow = document.querySelector(".last-window")

let massageNo = 0

holdingBox.innerHTML += `<div class="me">${massages[massageNo].q}</div>`


sendBtn.addEventListener("click", (e)=>{
    if(massageBox.value == "") {
        massageBox.placeholder = "Write the answer here ..."
        return
    }
    massageVar = massageBox.value.toLowerCase()
    redyMassage()

    massageBox.value = ""

    holdingBox.innerHTML += `<div class="you">${massageVar}</div>`
    holdingBox.scrollTo(0, holdingBox.scrollHeight)

    setTimeout(()=>{
        holdingBox.innerHTML += `<div class="me">${massages[massageNo].a}</div>`
        if (massages[massageNo].a != "wrong!"){
            massages[massageNo].done = true
        }
        holdingBox.scrollTo(0, holdingBox.scrollHeight)
    }, 500)


    setTimeout(()=>{
        if(massages[massageNo].done){
            massageNo ++
        }
        if(massageNo < massages.length){
            holdingBox.innerHTML += `<div class="me">${massages[massageNo].q}</div>`
        }
        holdingBox.scrollTo(0, holdingBox.scrollHeight)

        if(massageNo == massages.length){
            setTimeout(()=>{
                lastWindow.classList.remove("hidden")
            }, 500)
        }
    }, 1500)


})