document.addEventListener('DOMContentLoaded', () => {
    // (a) Big Bird Yellow
    const header = document.getElementById('cookie-header');
    header.style.color = '#f7f16d';

    // (b) Count Chocula
    const cookieList = document.querySelectorAll('#cookie-jar .cookie');
    const cookieCount = document.getElementById('cookie-count');
    function updateCookieCount() {
        const cookies = document.querySelectorAll('#cookie-jar .cookie');
        cookieCount.textContent = `${cookies.length}! There are ${cookies.length} cookie(s) in the cookie jar!`;
    }
    updateCookieCount();

    // (c) Cookie Monster hungry
    setInterval(() => {
        const cookies = document.querySelectorAll('#cookie-jar .cookie');
        if (cookies.length > 0) {
            cookies[cookies.length - 1].remove();
            updateCookieCount();
        }
    }, 30000); // 30 seconds
});
