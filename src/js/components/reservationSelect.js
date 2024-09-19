function reservationSelect(selected, selectItem) {

    const selectSelected = document.querySelector(`${selected}`);
    const selectItems = document.querySelector(`${selectItem}`);

    // Открываем/закрываем выпадающий список при клике на выбранный элемент
    selectSelected.addEventListener("click", function () {
        console.log(`123`)
        selectItems.classList.toggle("select-hide");
        selectSelected.classList.toggle("select-arrow-active");
        selectSelected.classList.toggle("select-arrow-inactive");
    });

    // Закрытие выпадающего списка и обновление выбранного значения
    selectItems.addEventListener("click", function (e) {
        if (e.target.tagName === "DIV") {
            selectSelected.textContent = e.target.textContent;
            selectItems.classList.add("select-hide");
            selectSelected.classList.remove("select-arrow-active");
            selectSelected.classList.add("select-arrow-inactive");
        }
    });

    // Закрываем выпадающий список, если клик был вне его
    document.addEventListener("click", function (e) {
        if (!selectSelected.contains(e.target) && !selectItems.contains(e.target)) {
            selectItems.classList.add("select-hide");
            selectSelected.classList.remove("select-arrow-active");
            selectSelected.classList.add("select-arrow-inactive");
        }
    });
}


export default reservationSelect