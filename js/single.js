    let caseList = [
    {
        image: "ran.jpg",
        title: "Bankran",
        date: "1. nov 2019",
        description: "Gjerningsmannen er fortsatt på frifot",
        type: "Tyveri",
        solved: true
    }
    ];

    const outputSingle= document.querySelector("#mainCase");
    let htmlTxt = "";

    caseList.forEach( cases => {
    htmlTxt += `
        <img src="img/${cases.image}" alt="Bilde av sak: ${cases.title}."/>
        <h2>${cases.title} i Oslo sentrum</h2>
        <h5>${cases.date} kl: 20:45</h4>
        <p>${cases.description}. det var<br> veldig dumt.
        Heldigvivs var gjerningsmennene det og.<br>
        De stoppet på en parkeringsplass.  <br>
        håper vi kan unngå at det skjer igjen!</p>
        <h5>${cases.type}</h5>
        <button id = "solved-btn"onclick="changeBtn()">${cases.solved}</button>
        <img src = "img/bil.jpg" id= "car">
    `;
    });

    const solvedBtn = document.getElementById("solved-btn");

        function changeBtn(solved){
        if (caseList.solved) {
            solvedBtn.IdName = "unsolved-btn";
        }else{(caseList.solved)
            solvedBtn.IdName = "solved-btn";
            }
        }

    outputSingle.innerHTML = htmlTxt;

    const toIndexPage = document.getElementById("indexPage");
    const toControlPage = document.getElementById("controlPage");
    const moveToIndex = ( e ) => {

    localStorage.removeItem("id", e.target.id);

    window.location = "index.html","oversikt.html";
    }

    toIndexPage.addEventListener("click", moveToIndex);
    toControlPage.addEventListener("click", moveToIndex);

    //didn't manage to make filtering work the way I wanted to ..