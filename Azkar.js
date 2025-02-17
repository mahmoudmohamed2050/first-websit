function openTab(tabName) {
    // إخفاء جميع المحتويات
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // إزالة الفئة "active" من جميع الأزرار
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // عرض المحتوى المحدد وإضافة الفئة "active" للزر المحدد
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}