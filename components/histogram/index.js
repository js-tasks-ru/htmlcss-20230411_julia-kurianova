const maxColAmount = 30;
function createHistogram(colAmount) {
    const hist = document.querySelector(".histogram__cols");
    let histogram = "";
    for (let i = 0; i < maxColAmount; i++) {
        let histCol = "<div class='histogram__col' ";
        histCol += `style="height: ${Math.round(Math.random() * 100)}%;"`;
        histogram += histCol + "></div>";
    }
    hist.innerHTML = histogram;
}
createHistogram( maxColAmount);
