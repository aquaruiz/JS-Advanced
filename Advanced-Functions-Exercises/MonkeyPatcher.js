function rateIt(command) {
    let post = this;
    switch (command){
        case "upvote":
            post.upvotes++;
            break;
        case "downvote":
            post.downvotes++;
            break;
        case "score":
            return rating(post);
    }

    function rating(postObj) {
        let modifiedObj = JSON.parse(JSON.stringify(postObj)); // how to make a copy of a object????
        let upScore = modifiedObj.upvotes;
        let downScore = modifiedObj.downvotes;
        let totalVotes = upScore + downScore;

        if (totalVotes > 50){
            if (Math.abs(upScore) > Math.abs(downScore)) {
                modifiedObj.upvotes = Math.ceil(1.25 * upScore);
                modifiedObj.downvotes += Math.ceil(0.25 * upScore);
            } else {
                modifiedObj.upvotes += Math.ceil(0.25 * downScore);
                modifiedObj.downvotes= Math.ceil(1.25 * downScore);
            }
        }

        upScore = postObj.upvotes;
        downScore = postObj.downvotes;
        totalVotes = upScore + downScore;
        let rating = "";

        if(totalVotes < 10) {
            rating = "new";
        } else if (upScore / totalVotes * 100 > 66){
            rating = "hot";
        } else if(upScore / totalVotes * 100 >= 50 && (upScore > 100 || downScore > 100)){
            rating = "controversial";
        } else  if(upScore / totalVotes * 100 < 50){
            rating = "unpopular";
        } else {
            rating = "new";
        }

        postObj.rating = rating;
        return [modifiedObj.upvotes, modifiedObj.downvotes, modifiedObj.upvotes - modifiedObj.downvotes, rating];
    }
}

// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };
//
// rateIt.call(post, 'upvote');
// rateIt.call(post, 'downvote');
// let score = rateIt.call(post, 'score'); // [127, 127, 0, 'controversial']
// for (let i = 0; i < 50; i++) {
//     rateIt.call(post, 'downvote');        // (executed 50 times)
// }
//
// score = rateIt.call(post, 'score');

// let forumPost = {
//     id: '1',
//     author: 'pesho',
//     content: 'hi guys',
//     upvotes: 0,
//     downvotes: 0
// };
//
// rateIt.call(forumPost, 'upvote');
//
// let answer = rateIt.call(forumPost, 'score');
//
// let forumPost = {
//     id: '2',
//     author: 'gosho',
//     content: 'whats up?',
//     upvotes: 120,
//     downvotes: 30
// };
//
// let answer = rateIt.call(forumPost, 'score');

// let forumPost = {
//     id: '1234',
//     author: 'author name',
//     content: 'these fields are irrelevant',
//     upvotes: 4,
//     downvotes: 5
// };
//
// // Under border case
// let answer = rateIt.call(forumPost, 'score');
//
// answer = rateIt.call(forumPost, 'score');
//
// rateIt.call(forumPost, 'upvote');
// rateIt.call(forumPost, 'upvote');
// answer = rateIt.call(forumPost, 'score');
