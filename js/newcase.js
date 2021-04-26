
    const titleTxt = document.querySelector("#title-txt");
    const typeTxt = document.querySelector("#type-txt");
    const caseDate = document.querySelector("#case-date");
    const descTxt = document.querySelector("#desc-txt");

    const addCaseBtn = document.querySelector("#add-case-btn");

    const addCase = () => { 

        const  caseArray = localStorage.getItem("caseList2");

        if( caseArray === null) {  
        const caseArray = [];
        const newCase = { title: titleTxt.value,
                            type: typeTxt.value,
                            date: caseDate.value,
                            desc: descTxt.value};

        caseArray.push(newCase);
        localStorage.setItem( "caseList2", JSON.stringify( caseArray));
        
    }else{
        const caseArray = JSON.parse(localStorage.getItem("caseList2"));

        const newTitle = titleTxt.value;
        const newType = typeTxt.value;
        const newDate = caseDate.value;
        const newDesc = descTxt.value; 

        caseArray.push(newTitle, newType, newDate, newDesc);
        localStorage.setItem("caseList2", JSON.stringify(caseArray));
        }
    };

        
    addCaseBtn.addEventListener("click", addCase);
    const outputMain = document.querySelector("#output-main");
        outputMain.innerHTML = localStorage.length;

        if(localStorage.length > 0) {
            let caseList2 = JSON.parse(localStorage.getItem("caseList2"));
            let html = "";

            //can create a new article, 
            //but another one sends out undefined objects
            caseList2.forEach( cases => {
                html += `
                <article class="caseBox">
                <h2>${cases.title}</h2>
                <h3>${cases.type}</h3>
                <p>${cases.date}</p>
                <p>${cases.desc}</p>
                <button id="delete-btn" onclick="deleteCase();window.location.reload();">
                slett</button>
                </article>
                `;
            });

            //removeItem removes the key(ID), looking for a work-around.
            function deleteCase() {
                localStorage.removeItem("caseList2");

            }
            outputMain.innerHTML = html;
        }else{
            outputMain.innerHTML = "ingen nye saker";
        }

        

        //Tried to create a for-loop to the removeItem, but I couldn't succeed
        /*
        function deleteCase() {
            // for (i = 0; i > cases.length; i++) {
            localStorage.removeItem("caseList2");
        }
        //}
            outputMain.innerHTML = html;
    }else{
            outputMain.innerHTML = "ingen nye saker";
    }       
    */
