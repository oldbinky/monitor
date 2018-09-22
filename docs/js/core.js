// FUNCTIONS ///////////////////////////////////////////////////////////////////

function getLocal() {
    return JSON.parse(localStorage.getItem("pm_core"))
}

function setLocal(data) {
    localStorage.setItem("pm_core", JSON.stringify(data))
}

function createBackup(data) {
    localStorage.setItem("pm_core_backup", JSON.stringify(data))
}

function restoreBackup() {
    return JSON.parse(localStorage.getItem("pm_core_backup"))
}

// VARIABLES ///////////////////////////////////////////////////////////////////

emt = [
    { id: "xx", src: "img/xx.png",  name: "Empty", current: true },
    { id: "af", src: "img/af.png",  name: "Atrial Fibrillation", current: false },
    { id: "2-Asystole", src: "img/2-Asystole.gif",  name: "Asystole", current: false },
    { id: "1-Sinus", src: "img/1-Sinus.gif",  name: "Sinus", current: false },
    { id: "3-P-wave-Asystole", src: "img/3-P-wave-Asystole.gif",  name: "P wave Asystole", current: false },
     { id: "4-Venricular-fibrillation-coarse", src: "img/4-Venricular-fibrillation-coarse.gif",  name: "4-Venricular-fibrillation-coarse", current: false },
     { id: "5-Ventricular-fibrillation-Fine", src: "img/5-Ventricular-fibrillation-Fine.gif",  name: "5-Ventricular-fibrillation-Fine", current: false },
     { id: "6-Atrial Fibrillation", src: "img/6-Atrial Fibrillation.gif",  name: "6-Atrial Fibrillation", current: false },
     { id: "7-Premature ventricular beat", src: "img/7-Premature ventricular beat.gif",  name: "7-Premature ventricular beat", current: false },
     { id: "8-Junctional escape beat", src: "img/8-Junctional escape beat.gif",  name: "8-Junctional escape beat", current: false },
     { id: "9-Atrial flutter 2-1 Atriventic", src: "img/9-Atrial flutter 2-1 Atriventic.gif",  name: "9-Atrial flutter 2-1 Atriventic", current: false },
     { id: "10-Monomorphic ventricular tachycardia", src: "img/10-Monomorphic ventricular tachycardia.gif",  name: "10-Monomorphic ventricular tachycardia", current: false },
     { id: "11-Ventricular Tachycardia with fusion and capture beats", src: "img/11-Ventricular Tachycardia with fusion and capture beats.gif",  name: "11-Ventricular Tachycardia with fusion and capture beats", current: false },
     { id: "12-Polymorphic ventricular tachycardia", src: "img/12-Polymorphic ventricular tachycardia.gif",  name: "12-Polymorphic ventricular tachycardia", current: false },
     { id: "13-Sinus Bradycardia", src: "img/13-Sinus Bradycardia.gif",  name: "13-Sinus Bradycardia", current: false },
    
    // { id: "xxvid", src: "mp4/sinus-rhythm.mp4", name: "Sinus Rhythm (Video)", current: false, video: true }
]

input = [
    { id: "cr", name: "Cap Refill",  data: null, visible: false },
    { id: "bs", name: "Blood Sugar", data: null, visible: false },
    { id: "rs", name: "Respiration", data: null, visible: false },
    { id: "sp", name: "SpO2",        data: null, visible: false },
    { id: "pl", name: "Pulse",       data: null, visible: false },
    { id: "nb", name: "NIBP",        data: null, visible: false },
    { id: "bt", name: "Body Temp",   data: null, visible: false },
    { id: "yy", name: "Custom",      data: null, visible: false },
]

core = {
    emt: emt,
    emt_current: {
        src: "img/xx.png",
        type: "image"
    },
    input: input
}
