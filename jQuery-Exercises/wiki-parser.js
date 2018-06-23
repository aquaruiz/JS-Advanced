function wikiParser(selector) {
    let text = $(selector).text();

    let italicRegex = /''(.+?)''/g;
    let boldRegex = /'''(.+?)'''/g;
    let heading1Regex = /=(.+?)=/gm;
    let heading2Regex = /==(.+?)==/g;
    let heading3Regex = /===(.+?)===/g;
    let linkRegex  = /\[\[([^\[\]\\|]+?)]]/g;
    let anchorLinkRegex = /\[\[([^\]\[]+?)\|([^\[\]]+?)]]/g;

    let output = text;

    // replace bold text
    let foundBold = boldRegex.exec(output);

    while(foundBold){
        output = output.replace(foundBold[0], `<b>${foundBold[1]}</b>`);
        foundBold = boldRegex.exec(output);
    }

    // replace italic text
    let foundItalic = italicRegex.exec(output);

    while(foundItalic){
        output = output.replace(foundItalic[0], `<i>${foundItalic[1]}</i>`);
        foundItalic = italicRegex.exec(output);
    }

    // replace h3
    let foundH3 = heading3Regex.exec(output);

    while(foundH3){
        output = output.replace(foundH3[0], `<h3>${foundH3[1]}</h3>`);
        foundH3 = heading3Regex.exec(output);
    }

    // replace h2
    let foundH2 = heading2Regex.exec(output);

    while(foundH2){
        output = output.replace(foundH2[0], `<h2>${foundH2[1]}</h2>`);
        foundH2 = heading2Regex.exec(output);
    }

    // replace h1
    let foundH1 = heading1Regex.exec(output);

    while(foundH1){
        output = output.replace(foundH1[0], `<h1>${foundH1[1]}</h1>`);
        foundH1 = heading1Regex.exec(output);
    }

    // replace anchors
    let foundAnchors = anchorLinkRegex.exec(output);

    while(foundAnchors){
        output = output.replace(foundAnchors[0], `<a href="/wiki/${foundAnchors[1]}">${foundAnchors[2]}</a>`);
        foundAnchors = anchorLinkRegex.exec(output);
    }

    // replace links
    let foundLinks = linkRegex.exec(output);

    while(foundLinks){
        output = output.replace(foundLinks[0], `<a href="/wiki/${foundLinks[1]}">${foundLinks[1]}</a>`);
        foundLinks = linkRegex.exec(output);
    }

    $(selector).html(output);
}