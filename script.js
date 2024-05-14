//promises with then and catch

const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber >= 5) {
            resolve(randomNumber);
        }
        else if (randomNumber < 5) {
            reject(" The random no is lesser than 5 : ");
        }


    }, 2000);

});
prom1.then((resolvedValue) => {
    console.log("Random no is greater than or equal to 5 : ", resolvedValue);
}).catch((error) => {
    console.log("Error: ", error);
});


//Promises Chaining
let promise1 = new Promise((resolve, reject) => {
    setTimeout((userId) => {
        const userData = [
            {
                id: 1,
                name: "Shaistha",
                age: 25
            },
            {
                id: 2,
                name: "Sumaiya",
                age: 30
            },
            {
                id: 3,
                name: "Jameel",
                age: 56
            },
            {
                id: 4,
                name: "Juveria",
                age: 50
            }
        ]
        resolve(userData);
    }, 2000);

});

let promise2 = new Promise((resolve, reject) => {
    setTimeout((userId) => {
        const userPosts = [
            {
                name: "Shaistha",
                postNo: 11
            }, {
                name: "Sumaiya",
                postNo: 15
            }, {
                name: "Jameel",
                postNo: 18
            },
            {
                name: "Juveria",
                postNo: 20
            }
        ]
        resolve(userPosts);
    }, 1000);
   
});


let promise3 = new Promise((resolve, reject) => {
    setTimeout((userId) => {
        const userComments = [
            { id: 1, postId: 1, comment: "Comment 1 for Post 1" },
            { id: 2, postId: 1, comment: "Comment 2 for Post 1" },
            { id: 3, postId: 2, comment: "Comment 1 for Post 2" }
        ];
        resolve(userComments);
    }, 1500);
    
});



promise1.then((userData) => {
    console.log("User Details: ", userData);
    return promise2;
})
.then((userPosts) => {
    console.log("User Posts Count", userPosts[0].name, userPosts[0].postNo);
    return promise3;
})
.then((userComments) => {
    console.log("User comments count", userComments[0].comment);
})






