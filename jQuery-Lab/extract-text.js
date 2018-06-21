function extractText() {
    let lis = $('#items li')
    let output = []
    for (let li of lis) {
        output.push(li.textContent);
    }

    $('#result').text(output.join(", "))
}