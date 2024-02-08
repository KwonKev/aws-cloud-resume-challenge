const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://vl4ktrnhy4kv2bvwxyst7ch2vm0kxbgq.lambda-url.us-east-1.on.aws/")
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();