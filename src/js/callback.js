const posts = [{
    title:'RCOE',
    article: 'RCOE is my college'
},
{
    title: 'Computers',
    article: 'Why I love Programming'
}];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index)=>
        {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML= output;

    },1000);
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post); 
        callback();
    }, 2000)
}

createPost({title: 'Post 3', article: 'Post 3 hai yeh!!'}, getPosts);

