const posts = JSON.parse(localStorage.getItem("articles"));

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

function createPost(post1){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post1); 
           
            const error= false;
            if(!error){
                resolve();
                localStorage.setItem("articles", JSON.stringify(posts));
console.log(localStorage.getItem("articles"));
                
            }else{
                reject('Error something went wrong');
            }
        }, 2000);
    });
  
}

createPost({title: 'Post 3', post: 'Post 3 hai yeh!!'}).then(getPosts).catch(err=>console.log(err));

