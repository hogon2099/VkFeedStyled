
function deleteEmptyPosts(){
    let posts = document.getElementsByClassName("feed_row");

    for(let i = 0; i < posts.length; i++) {
        let postHeight = getComputedStyle(posts[i]).height;
    
        if(postHeight == "0px") {
            posts[i].parentNode.removeChild(posts[i]);
        }
    }
	console.log("Тыгыдык");
    setTimeout(deleteEmptyPosts,1000);
}

deleteEmptyPosts();