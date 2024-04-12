const REST_API_host = "https://cv-answerer-bpwjfipn5a-uc.a.run.app"

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
