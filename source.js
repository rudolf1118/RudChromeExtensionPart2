const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
fetch("http://localhost:8080/data", requestOptions)
    .then(response => response.json())
    .then((result) => {
        let text = document.createElement("div");
        text.classList.add("text1");
        document.getElementsByClassName("sjgh65i0")[1].appendChild(text)
        text.innerText=result;
    })
    .catch(error => console.log('error', error));
