function search() {
    let lis = $('#towns li').css("font-weight", "");
    let search = $('#searchText').val();
    let counter = 0;

    for (let index = 0; index < lis.length; index++) {
        if (lis[index].textContent.includes(search)){
            counter++;
            lis[index].style.fontWeight = "bold"
        }
    }

    $('#result').text(counter + " matches found.");
    $('#searchText').val("")
}