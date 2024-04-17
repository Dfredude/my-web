require(['../env'], function(env) {
    console.log("Loaded env.js");
    main(env)
})


// const REST_API_host = "localhost"

function main() {
    const REST_API_host = env.API_PRODUCTION_HOST;
    // const REST_API_host = env.API_PRODUCTION_HOST;
    document.getElementById("ask-btn").addEventListener("click", function() {
        // Set loading spinner
        document.getElementById("answer-loading-spinner").classList.remove("d-none");
        const question = document.getElementById("question");
        fetch(REST_API_host + "/about?" + new URLSearchParams({
            question: question.value
        }))
        .then(response => {
            return response.text()
        })
        .then(answer => {
            document.getElementById("answer").innerText = answer
            document.getElementById("answer-loading-spinner").classList.add("d-none");
        }
        )
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("answer").innerText = "Error: " + error;
        });
    });
}

