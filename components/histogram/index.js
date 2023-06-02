const maxColAmount = 30;
function createHistograms(colAmount) {
    const histArr = document.querySelectorAll(".histogram__cols");

    histArr.forEach((hist) => {
        let histogram = "";
        for (let i = 0; i < maxColAmount; i++) {
            let histCol = "<div class='histogram__col' ";
            histCol += `style="height: ${Math.round(Math.random() * 100)}%;"`;
            histogram += histCol + "></div>";
        }
        hist.innerHTML = histogram;
    });
}

createHistograms( maxColAmount);
