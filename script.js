
/* =====================================
   ShareNexa - JavaScript
===================================== */

/* 1. SHOW MESSAGE */
function showMessage(message) {
    alert(message);
}

/* 2. MOBILE NAVIGATION */
document.addEventListener("DOMContentLoaded", function () {

    // Smooth navigation for page links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Welcome message in console
    console.log("Welcome to ShareNexa!");
});

/* 3. PRODUCT SEARCH */
function searchProducts() {
    const searchInput = document.querySelector("#search");
    
    if (!searchInput) {
        showMessage("Search box nahi mila.");
        return;
    }

    const searchValue = searchInput.value.toLowerCase().trim();
    const products = document.querySelectorAll(
        "#explore .product-card, #explore > div"
    );

    let found = 0;

    products.forEach(function (product) {
        const productText = product.textContent.toLowerCase();

        if (productText.includes(searchValue)) {
            product.style.display = "";
            found++;
        } else {
            product.style.display = "none";
        }
    });

    if (found === 0) {
        showMessage("Koi matching product nahi mila.");
    }
}

/* 4. PRODUCT CATEGORY FILTER */
function filterProducts(category) {
    const products = document.querySelectorAll(
        "#explore .product-card, #explore > div"
    );

    products.forEach(function (product) {
        const productText = product.textContent.toLowerCase();

        if (
            category === "all" ||
            productText.includes(category.toLowerCase())
        ) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}

/* 5. ADD PRODUCT FORM */
function addProduct(event) {
    event.preventDefault();

    const form = event.target;

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    showMessage(
        "Product details submit ho gayi hain! Demo version mein data save nahi hota."
    );

    form.reset();
}

/* 6. LOGIN DEMO */
function loginUser(event) {
    event.preventDefault();

    const form = event.target;

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    showMessage(
        "Login demo successful! Real login ke liye backend zaroori hai."
    );
}

/* 7. SIGNUP DEMO */
function signupUser(event) {
    event.preventDefault();

    const form = event.target;

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    showMessage(
        "Signup demo successful! Account abhi database mein create nahi hua hai."
    );

    form.reset();
}

/* 8. BOOKING DEMO */
function bookProduct(event) {
    event.preventDefault();

    const form = event.target;

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    showMessage(
        "Booking request submit ho gayi! Yeh abhi demo feature hai."
    );

    form.reset();
}

/* 9. CONTACT OWNER */
function contactOwner() {
    showMessage(
        "Owner se contact karne ke liye messaging feature future mein connect hoga."
    );
}

/* 10. BUY PRODUCT */
function buyProduct() {
    showMessage(
        "Buy request demo hai. Real purchase ke liye backend integration chahiye."
    );
}

/* 11. LOGOUT DEMO */
function logoutUser() {
    showMessage("Aap demo account se logout ho gaye.");
}

/* 12. BACK TO TOP */
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
