document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-btn");
    const resultElement = document.getElementById("result");

    submitButton.addEventListener("click", function () {
        const response1 = document.querySelector("input[name='q1']:checked").value.toLowerCase();
        const response2 = document.querySelector("input[name='q2']:checked").value.toLowerCase();
        const response3 = document.querySelector("input[name='q3']:checked").value.toLowerCase();

        let customResponse = "";

        if (response1 === "a" && response2 === "a" && response3 === "a") {
            customResponse = "The Best Agent for you is: Brimstone";
        } else if (response1 === "a" && response2 === "b" && response3 === "b") {
            customResponse = "The Best Agent for you is: Viper";
        } else if (response1 === "a" && response2 === "a" && response3 === "c") {
            customResponse = "The Best Agent for you is: Omen";
        } else if (response1 === "a" && response2 === "b" && response3 === "d") {
            customResponse = "The Best Agent for you is: Astra";
        } else if (response1 === "a" && response2 === "a" && response3 === "e") {
            customResponse = "The Best Agent for you is: Harbor";
        } else if (response1 === "b" && response2 === "a" && response3 === "a") {
            customResponse = "The Best Agent for you is: Yoru";
        } else if (response1 === "b" && response2 === "b" && response3 === "b") {
            customResponse = "The Best Agent for you is: Neon";
        } else if (response1 === "b" && response2 === "a" && response3 === "e") {
            customResponse = "The Best Agent for you is: Phoenix";
        } else if (response1 === "b" && response2 === "b" && response3 === "d") {
            customResponse = "The Best Agent for you is: Raze";
        } else if (response1 === "b" && response2 === "b" && response3 === "c") {
            customResponse = "The Best Agent for you is: Reyna";
        } else if (response1 === "b" && response2 === "b" && response3 === "e") {
            customResponse = "The Best Agent for you is: Jett";
        } else if (response1 === "c" && response2 === "b" && response3 === "a") {
            customResponse = "The Best Agent for you is: Killjoy ";
        } else if (response1 === "c" && response2 === "a" && response3 === "b") {
            customResponse = "The Best Agent for you is: Cypher";
        } else if (response1 === "c" && response2 === "b" && response3 === "c") {
            customResponse = "The Best Agent for you is: Deadlock";
        } else if (response1 === "c" && response2 === "b" && response3 === "d") {
            customResponse = "The Best Agent for you is: Sage";
        } else if (response1 === "c" && response2 === "a" && response3 === "e") {
            customResponse = "The Best Agent for you is: Chamber";
        } else if (response1 === "d" && response2 === "a" && response3 === "a") {
            customResponse = "The Best Agent for you is: Kayo";
        } else if (response1 === "d" && response2 === "b" && response3 === "a") {
            customResponse = "The Best Agent for you is: Fade";
        } else if (response1 === "d" && response2 === "a" && response3 === "b") {
            customResponse = "The Best Agent for you is: Breach";
        } else if (response1 === "d" && response2 === "a" && response3 === "c") {
            customResponse = "The Best Agent for you is: Gekko";
        } else if (response1 === "d" && response2 === "b" && response3 === "d") {
            customResponse = "The Best Agent for you is: Skye";
        } else if (response1 === "d" && response2 === "a" && response3 === "e") {
            customResponse = "The Best Agent for you is: Sova";
        }else {
            customResponse = "Idk what to tell you g"
        }

        resultElement.textContent = customResponse;
    });
});