// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour-btn").on("click", function (event) {

        //see button in partials - grab data-id and data-dev
        const id = $(this).data("id");
        //const state = $(this).data("dev");

        const eatenState = {
            devoured: true
        }

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenState
        }).then(
            function () {
                console.log("changed devoured to true");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".remake-btn").on("click", function (event) {

        //see button in partials - grab data-id and data-dev
        const id = $(this).data("id");
        //const state = $(this).data("dev");

        const remakeState = {
            devoured: false
        }

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: remakeState
        }).then(
            function () {
                console.log("changed devoured to false");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-btn").on("click", function (event) {
        //see button in partials - grab data-ids
        const id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function () {
                console.log("deleted");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            burger_name: $("#newbg-input").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log(`added new burger: ${newBurger}`);
            // Reload the page to get the updated list
            location.reload();
        });
    });
})
