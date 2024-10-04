fetch("http://127.0.0.1:8000/api", {
    method: "POST",
    body: JSON.stringify({
        question: "What is the capital of France?"
    })
}).then(res => res.json()).then(console.log);