document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#title");
    const para = document.querySelector("#para");
    const button = document.querySelector("#download");

    const title = `Hello, my name is Ragger.`;
    const desc = `And right now im working on this website so go away please.`;

    let pointer = document.createElement("span");
    pointer.textContent = "|";

    header.style.display = "none";
    para.style.display = "none";
    download.style.display = "none";

    setTimeout(() => {
        header.style.display = "";
        let index = 0;

        const addCharacter = () => {
            header.innerHTML = title.slice(0, index) + "<span id='cursor'>" + pointer.textContent + "</span>";
            index++;

            if (index <= title.length) {
                setTimeout(addCharacter, 100);
            }
            else{
                cursor.style.display = "none";
                setTimeout(() => {
                    para.style.display = "";
                    let index = 0;
            
                    const addCharacter = () => {
                        para.innerHTML = desc.slice(0, index) + "<span id='cursor'>" + pointer.textContent + "</span>";
                        index++;
            
                        if (index <= desc.length) {
                            setTimeout(addCharacter, 100);
                        }
                        else{
                            // button.classList.add("fade");
                            // button.style.display = "";
                        }
                    };
            
                    addCharacter();
                }, 1000);
            }
        };

        addCharacter();
    }, 1000);
});
