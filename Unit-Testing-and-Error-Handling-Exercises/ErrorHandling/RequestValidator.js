function validateRequest(input){
    let met = input.method;
    let validMeths = ['GET', 'POST', 'DELETE', 'CONNECT'];

    if (!validMeths.includes(met)){
        throw new Error("Invalid request header: Invalid Method");
    }

    let uri = input.uri;
    let uriRegex = /^[.0-9a-zA-Z]+$/;

    if ((!uriRegex.test(uri) && uri !== "*") || !uri){
        throw new Error("Invalid request header: Invalid URI")
    }

    let ver = input.version;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!validVersions.includes(ver)){
        throw new Error("Invalid request header: Invalid Version");
    }

    let mess = input.message;
    let messRegex = /^[^<>\\&'"]+$/;

    if ((!messRegex.test(mess) && mess !== "") || mess === undefined){
        throw new Error("Invalid request header: Invalid Message");
    }

    return input;
}

// validateRequest({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// });
validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
// validateRequest({       // Invalid request header: Invalid Method
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });
// validateRequest({       // Invalid request header: Invalid Version
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// });