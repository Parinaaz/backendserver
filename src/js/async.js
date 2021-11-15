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

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post); 
           
            const error= false;
            if(!error){
                resolve();
            }else{
                reject('Error something went wrong');
            }
        }, 2000);
    });
  
}
 

async function init(){
    await createPost({title: 'Post 3', article: 'Post 3 hai yeh!!'});
    getPosts();
}

init();
