{
    //method to submit the form for new post
    let createPost = function()
    {
        let newPostForm = $('#new-post-form');
        newPostForm.submit(function(e){
            e.preventDefault();
            $.ajax({
                type : 'post',
                url : '/posts/create',
                data : newPostForm.serialize(),
                success : function(data)
                {
                  let newPost = newPostDom(data.data.post);
                  $('#posts-container>ul').prepend(newPost);
                },error : function(error)
                {
                    console.log(error.responseText);
                }
            });
        });
    }
//method to create a post in DOM
let newPostDom = function(post){
    return $(`<li id="post-${post._id}">
    <p>
     
     <small>
        <a class="delete-post-button" href="/posts/destroy/${post.id }">
            Delete
        </a>
      </small>
     
      ${ post.content  }

 
  <br>
  <small>
  ${ post.user.name }
  </small>
</p>
<div class="post-comments">
 
      <form action="/comments/create" method="POST">
          <input type="text" name="content" placeholder="Type Here to add comment...">
          <input type="hidden" name="post" value="${ post._id }" >
          <input type="submit" value="Add Comment" id="comment-here">
      </form>

 
  <div class="post-comments-list">
    <ul id="post-comments-${ post._id }">
       
    </ul>
  </div>
</div>
</li>`)

} 

    createPost();
}