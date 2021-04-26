    let caseList = [
        {
            image: "ran.jpg",
            title: "Bankran",
            date: "1. nov 2019",
            description: "Gjerningsmannen er fortsatt på frifot",
            type: "Tyveri",
            status: true
        },
        {
            image: "drugs.jpg",
            title: "Mindre rusbruk i omstridt område" ,
            date: "5. nov 2019",
            description: "Nå håper vi i PST at miljøet ikke bare endrer lokasjon",
            type: "Rusmissbruk",
            status: true
        },

        {
            image: "spy.jpg",
            title: "Spion spionerer",
            date: "1. jan. 2019",
            description: "et eller annet spionasje",
            type: "spionasje",
            status: false
        }
    ];

    const outputCase1 = document.querySelector(".grid-container");
    const outputCase2 = document.querySelector(".grid-container2");
    let caseList2 = JSON.parse( localStorage.getItem("caseList2"));
    let htmlTxt = "";
    let htmlTxt2 = "";

    //function to add objects from array
    caseList.forEach( cases => {
        htmlTxt += `
        <article>
            <img src="img/${cases.image}" alt="Bilde av sak: ${cases.title}."/>
            <h3>${cases.title}</h3>
            <h4>${cases.date}</h4>
            <p>${cases.description}</p>
            <h5>${cases.type}</h5>
            <h4 id="caseStatus">${cases.status}</h4>
            <input id="to-single-case" type="button" value="les mer">
        </article>
    `;
    });

    //if a new case is created, htmlTxt2 will be created
    if(localStorage.length > 0) {
        caseList2.forEach( cases2 => {
            htmlTxt2 += `
            <article class="caseBox">
            <h2>${cases2.title}</h2>
            <h3>${cases2.type}</h3>
            <p>${cases2.date}</p>
            <p>${cases2.desc}</p>
        <button id="delete-btn" onclick="deleteCase();window.location.reload();">
        slett</button>
        </article>
            `;
        });
    }

    //output to frontpage
    outputCase1.innerHTML = htmlTxt;
    //output to frontpage with localStorage
    outputCase2.innerHTML = htmlTxt2;


    function deleteCase() {
        localStorage.removeItem("caseList2");
    }


    //button to single case with more info. only first "les mer"-button works
    const toSingleCase = document.querySelector("#to-single-case");

    const moveToCase = ( e ) => {
        localStorage.setItem("id", e.target.id);

        window.location = "single.html";
    }

    toSingleCase.addEventListener("click",moveToCase);
