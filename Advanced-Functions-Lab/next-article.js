function getArticleGenerator(articles) {
    let texts = articles;
    return function () {
        if (texts.length > 0){
            $("#content").append($("<article>").append($("<p>").text(texts.shift())));
        }
    };
}