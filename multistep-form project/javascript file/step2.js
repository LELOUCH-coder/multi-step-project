let isSubscriptionSelected = false;
let selectedSubscription = null; // Variable to store the selected subscription option

// for subscription part 1
const arcade = document.querySelectorAll(".arcade");

arcade.forEach(function (sec) {
    sec.addEventListener("click", function () {
        arcade.forEach(function (secs) {
            if (secs !== sec) {
                secs.classList.remove("change-arcade");
            }
        });
        sec.classList.toggle("change-arcade");

        isSubscriptionSelected = true;
        selectedSubscription = "Arcade"; // Update the selected subscription
    });
});

// for part2 of subs
const arcade1 = document.querySelectorAll(".arcade1");

arcade1.forEach(function (sec1) {
    sec1.addEventListener("click", function () {
        arcade1.forEach(function (secs1) {
            if (secs1 !== sec1) {
                secs1.classList.remove("change-arcade1");
            }
        });
        sec1.classList.toggle("change-arcade1");

        isSubscriptionSelected = true;
        selectedSubscription = "Advanced"; // Update the selected subscription
    });
});

// for monthy yearly
const ball = document.querySelector(".ball");
const year = document.querySelector(".year");
const month = document.querySelector(".mon");

ball.addEventListener("click", function () {
    year.classList.toggle("change-year");
    month.classList.toggle("change-mon");
});

// switch between subs
arcade.forEach(function (hide) {
    ball.addEventListener("click", function () {
        hide.classList.toggle("hide-arcade");
    });
});

arcade1.forEach(function (show) {
    ball.addEventListener("click", function () {
        show.classList.toggle("show-arcade1");
    });
});

function redirectToNextPage() {
    if (!isSubscriptionSelected) {
        alert("Please select a subscription before proceeding.");
    } else {
        // Add any logic for redirecting to the next page if needed
        // For now, let's assume you want to redirect to step3mon.html or step3yr.html based on the selected billing type
        const billingType = year.classList.contains("change-year") ? "yr" : "mon";
        const redirectUrl = "step3" + billingType + ".html?plan=" + selectedSubscription;
        window.location.href = redirectUrl;
    }
}
