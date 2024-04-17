require(['../env'], function(env) {
    console.log("Loaded env.js");
    main(env)
})


// const REST_API_host = "localhost"

function main() {
    const REST_API_host = env.API_PRODUCTION_HOST;
    // const REST_API_host = env.API_PRODUCTION_HOST;
    document.getElementById("ask-btn").addEventListener("click", function() {
        const question = document.getElementById("question");
        console.log(question);
        fetch(REST_API_host + "/about?" + new URLSearchParams({
            question: question.value
        }))
        .then(response => {
            return response.text()
        })
        .then(answer => {
            console.log(answer);
            document.getElementById("answer").innerText = answer
        }
        )
        .catch(error => {
            console.error("Error:", error);
        });
    });
}

