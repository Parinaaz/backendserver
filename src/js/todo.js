const list = [{title: 'Newsletter 1', post: 'loremLabore dolor duo erat ipsum diam amet eirmod stet eos sea, amet labore clita amet est at clita magna justo.'}, 
{title: 'some letter 2', post: 'some article'},
{title : 'some title 3', post: 'post 3'}
] 


localStorage.setItem("articles", JSON.stringify(list));
console.log(localStorage.getItem("articles"));
