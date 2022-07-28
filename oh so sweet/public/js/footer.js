const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/dark-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Chocolate</li>
                <li><a href="#" class="footer-link">cupcakes</a></li>
                <li><a href="#" class="footer-link">cakes</a></li>
                <li><a href="#" class="footer-link">fruit</a></li>
                <li><a href="#" class="footer-link">candy</a></li>
                <li><a href="#" class="footer-link">other sweets</a></li>
                <li><a href="#" class="footer-link">pastries</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Vanilla</li>
                <li><a href="#" class="footer-link">cupcakes</a></li>
                <li><a href="#" class="footer-link">cakes</a></li>
                <li><a href="#" class="footer-link">fruit</a></li>
                <li><a href="#" class="footer-link">candy</a></li>
                <li><a href="#" class="footer-link">other sweets</a></li>
                <li><a href="#" class="footer-link">pastries</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Describe the bakery </p>
    <p class="info">support emails - help@ohsosweet.com, customersupport@ohsosweet.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Oh So Sweet, Best cupcake online store</p>
    `;
}

createFooter();
