let admin = () => {
    window.location.href = "admin.html"

}
let buyer = () => {

    window.location.href = 'buyer.html'
}
let seller = () => {
    window.location.href = 'seller.html'
}

let back = () => {
    window.location.href = 'index.html'
}
let dish  = () =>{

    window.location.href = 'dish.html'
}

let Loginadmin = () => {
    var email = document.getElementById('email');
    var password = document.getElementById('pass');

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            alert("Already registered")
            var user = userCredential.user;
            //    window.location
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });

}

var a = Math.random() * 10;
a = Math.floor(a)

let sellersignup = () => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;
    var resName = document.getElementById('resName').value;

    if (email == "") {
        var alert = document.getElementById('alert')
        alert.innerHTML = "Fill it ALL"
    }
    else if (password == "") {
        var alert = document.getElementById('alert')
        alert.innerHTML = "Fill it ALL"

    }
    else if (city == "") {
        var alert = document.getElementById('alert')
        alert.innerHTML = "Fill it ALL"

    }
    else if (country == "") {
        var alert = document.getElementById('alert')
        alert.innerHTML = "Fill it ALL"

    }
    else if (resName == "") {
        var alert = document.getElementById('alert')
        alert.innerHTML = "Fill it ALL"

    }



    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {

            var user = userCredential.user;
            firebase.database().ref(`RESTURENT /${a}`).set({
                email,
                password,
                city,
                country,
                resName
            })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

        });



}
let transfer = () => {
    var sellersignup = document.getElementById('sellersignUP')
    sellersignup.style.display = 'none'
    var sellerlogin = document.getElementById('sellerlogIN')
    sellerlogin.style.display = 'block'



}
let sellersignin = () => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {

            var user = userCredential.user;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });

}

let addDish = () => {
    var dishName = document.getElementById('dishName').value;
    var price = document.getElementById('price').value;
}

firebase.database().ref("orders").on('child_added', function (data) {
    a = data.val()
    console.log(a)
    document.getElementById("card").innerHTML += `
    <div class="card" style="width: 18rem; float:left ; margin:4px">
    <img src="${data.val().image}" class="card-img-top" alt="..." width="300px" height="150px
    <div class="card-body">
    <h5 class="card-title">Category : ${data.val().category}</h5>
    <h5 class="card-title">Name : ${data.val().Name}</h5>
    <h2 class="card-title">price: ${data.val().category}</h2>

    <a href="#" class="btn btn-primary" onclick="addticard(${data.key})"
    </div>
    </div>`
    })

    function addtocard(a){
        console.log(a)
    }
move = () =>{
    window.location.href = 'buyer.html'
}
    // async function addDish() {
        // let restaurantname = document.getElementById("resname").value
        // let productname = document.getElementById("dishName").value
        // let productprice = document.getElementById("price").value
        // let producttype = document.getElementById("img").value
        // let productimage = document.getElementById("prodimage").files[0]
    
    
        // x=firebase.storage().ref().child("images/0" + productimage)
        // await x.put(productimage)
        // let url = await x.getDownloadURL()
        
        // //database
        // let obj = {
        //     // restaurantname,
        //     // productname,
        //     productprice,
        //     producttype,
        //     url
        // }
    
        // console.log(obj)
        // var key = (Math.random() * 92476829).toFixed()
        // firebase.database().ref("orders/" + "id" + key).set(obj)
    
    
    
    
        
        
    
    // }
    // firebase.storage().ref("images").child(productname).getDownloadURL().then(url =>{
    //     console.log("success=>",succ)
    //     firebase.storage().ref(`itms/${res.uid}`).push({
    //         dishname,
    //         price,
    //         url,
    //     })
    //     .then(succ=>{
    //         console.log("success=>",succ)
    //     })
    //     .catch("err=>",err)



    // })
      // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCy5WyLy26N2ct6jPYZT9BZQgHyDLDqclM",
//     authDomain: "one-more-56ea9.firebaseapp.com",
//     projectId: "one-more-56ea9",
//     storageBucket: "one-more-56ea9.appspot.com",
//     messagingSenderId: "929158024527",
//     appId: "1:929158024527:web:2d3624ad0ef3b70314093a"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);


// //   reference message collation
// let messageRef = firebase.database().ref('Messages');
// // let messageRef = firebase.database().ref('user');

// // listen for submit button
// document.getElementById('contact-form').addEventListener('submit',(e)=>{
//   e.preventDefault();
//   const name = getId('name');
//   const email = getId('email');
//   const selected = getId('select');
//   const message = getId('message');
//   // call  save message
//   saveMessage(name,email,selected,message)
//   // reset
//   clear();
// })

// function clear(){
//   document.getElementById('contact-form').reset();
// }

// function getId(element){
//     if(element){
//       return  document.getElementById(element).value;
//     }else{
//         console.log("selected element is is incorrect!");
//     }
// }


// // save message to firebase
// function saveMessage(name,email,selected,message){
//     let  newMessageRef = messageRef.push();
//     newMessageRef.set({
//         name,
//         email,
//         selected,
//         message,
//     })
// }