function bugTracker(){
    let id = -1;
    let bugs = [];
    let selector = "";

    function report(author, description, reproducible, severity) {
        let bug = {
            ID: ++id,
            author: author,
            description: description,
            reproducible: reproducible,
            severity: severity,
            status: "Open"
        };
        
        bugs.push(bug);
        updateHtml();
    }
    
    function setStatus(id, newStatus) {
        bugs.filter(x => x.ID === id)[0].status = newStatus;
        updateHtml();
    }

    function remove(id) {
        bugs = bugs.filter(x => x.ID !== id);
        updateHtml();
    }

    function sort(method) {
        if(method === "author") {
            bugs = bugs.sort((a, b) => a.author.localeCompare(b.author));
        } else if (method === "severity") {
            bugs = bugs.sort((a, b) => a.severity - b.severity);
        } else {
            bugs = bugs.sort((a, b) => a.ID - b.ID);
        }

        updateHtml();
    }
    
    function output(sel) {
        selector = sel;
    }

    function updateHtml() {
        console.log(bugs);
        if (selector) {
            let container = $(selector).html(''); // NB!

            for (let report of bugs) {
                let reportHTML =
                    $('<div>').attr('id', 'report_' + report.ID).addClass('report')
                        .append($('<div>').addClass('body')
                            .append($('<p>').text(report.description)))
                        .append($('<div>')
                            .addClass('title')
                            .append($('<span>').addClass('author').text('Submitted by: ' + report.author))
                            .append($('<span>').addClass('status').text(report.status + ' | ' + report.severity)));

                container.append(reportHTML);
            }
        }
    }

    return {report, setStatus, remove, sort, output};
}