function postIt() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(com) {
            this.comments.push(com);
        }

        toString() {
            return super.toString() + `\nRating: ${this.likes - this.dislikes}\nComments:\n` + this.comments.map(e => ` * ` + e).join(`\n`);
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = Number(views);
        }

        view(){
            this.views += 1;
            return this;
        }

        toString(){
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {
        Post, BlogPost, SocialMediaPost
    }
}

let post = new Post("Post1", "Content1");
console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!