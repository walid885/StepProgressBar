const nextEL = document.getElementById("next")
const prevEL = document.getElementById("prev")
const setpsEL = document.querySelectorAll(".step")
const ProgrEl = document.querySelector(".prograssbarfront")
let cuurnetChecked = 1 
nextEL.addEventListener("click",()=>{
    if(cuurnetChecked > setpsEL.length){
        cuurnetChecked = setpsEL.length
        console.log(cuurnetChecked);
    }
    cuurnetChecked++
    updateStepProgress()     
       console.log(cuurnetChecked);

})
prevEL.addEventListener("click",()=>{
    if(cuurnetChecked < 1 ){
        cuurnetChecked = 1
    }
    cuurnetChecked--
    updateStepProgress()
    console.log(cuurnetChecked);

})

function updateStepProgress() {
    setpsEL.forEach((setpEL,indx) =>{
        if(indx < cuurnetChecked){
         setpEL.classList.add("ckd")
         setpEL.innerHTML = `
         <i class="fa-solid fa-check"></i>
         <small>${indx === 0 ? "start" : indx === (setpsEL.length-1) ? "Final" : "Step " + indx}</small>
         `   
        }else {
            
            setpEL.classList.remove("ckd");
            setpEL.innerHTML = `
                <i class="fas fa-times"></i>
                `;
              
        }
    })
    const ckdNum = document.querySelectorAll(".ckd")
    ProgrEl.style.width = ((ckdNum.length - 1 ) /(setpsEL.length -1)) * 100 + "%"

    if(cuurnetChecked === 1 ){
        prevEL.disabled = true; 
    }else if (cuurnetChecked === setpsEL.length){
        nextEL.disabled = true
    }else {
        prevEL.disabled = false; 
        nextEL.disabled = false;
    }


}