// const xhr = new XMLHttpRequest();
// xhr.open("GET", url);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       let result = JSON.parse(xhr.response);
//       let box =  result.map((f) => f.phone)
//       console.log(box);

//     } else {
//       console.log("Server response: ", xhr.statusText);
//     }
//   }
// };

// xhr.send();

// const xmr = new XMLHttpRequest();
// xmr.open("get", "https://jsonplaceholder.typicode.com/users", true);

// xmr.onreadystatechange = function () {
//   if (xmr.readyState == 4) {
//     if (xmr.status == 200) {
//       let result = JSON.parse(xmr.response);
//       let userWebsite = result.map((f) => f.website);
//       console.log(userWebsite);
//       for (let i of userWebsite) {
//         let box = "www." + i
//         console.log(box)
//       }
//     }
//   }
// };
// xmr.send();

// const xlr = new XMLHttpRequest();
// xlr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
// xlr.onreadystatechange = function () {
//   if (xlr.readyState == 4) {
//     if (xlr.status == 200) {
//       let pars = JSON.parse(xlr.response);
//       console.log(pars);
//       let Data = (lnglat) => {
//         return lnglat.map((f) => {
//           return {
//             lng: f.address.geo.lng,
//             lat: f.address.geo.lat,
//           };
//         });
//       };
//       console.log(Data(pars));
//       for (let i of Data(pars)) {
//         let box = Object.values(i);
//         let dragon = box.toString();
//         console.log(dragon);
//       }
//     }
//   }
// };

// xlr.send();

//  let data = pars.map((f)=> f.address.geo.lat  )
//  for (let i of data){
//    let x = i
//    console.log(parseFloat(x))
//  }

// const xlr = new XMLHttpRequest();
// xlr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
// xlr.onreadystatechange = function () {
//   if (xlr.readyState == 4) {
//     if (xlr.status == 200){
//       let pars = JSON.parse(xlr.response);
//       console.log(pars);
//       let phoneInfo = pars.map((f)=>f.phone)
//       console.log(phoneInfo)
//       for( let i of phoneInfo){
//         let phoneEdit = i.replace("x","                                        ")
//         let box = phoneEdit.slice(0,20)
//       console.log(box)
//       }

//     }}}

// xlr.send()

// const xlr = new XMLHttpRequest();
// xlr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

// xlr.onreadystatechange = function () {
//   if (xlr.readyState == 4) {
//     if (xlr.status == 200) {
//       let jsn = JSON.parse(xlr.response);
//       console.log(jsn);

//       let Cc = (data) => {
//         return data.map((f) => {
//           return {
//             city: f.address.city,
//             street: f.address.street,
//           };
//         });
//       };
//       console.log(Cc(jsn))

//       for(let i of Cc(jsn)){

//         let box = Object.values(i);
//         let dragon = box.toUpperCase();
//         console.log(dragon);
//       }
//     }
//   }
// };
// xlr.send();

// const xlr = new XMLHttpRequest();
// xlr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

// xlr.onreadystatechange = function () {
//   if (xlr.readyState == 4) {
//     if (xlr.status == 200) {
//       let jsn = JSON.parse(xlr.response);
//       console.log(jsn);

//       const getId = (jsn) => {
//        return  jsn.map((f) => f.id);
//       };
//       console.log(getId(jsn))
//      let result = getId(jsn)
//      let box = result.toString()
//      console.log(box)
//     }

//   }

// };

// xlr.send();

const xlr = new XMLHttpRequest();
xlr.open("GET", "https://jsonplaceholder.typicode.com/users");

xlr.onreadystatechange = function () {
  if (xlr.readyState == 4) {
    if (xlr.status == 200) {
      let jsn = JSON.parse(xlr.response);
      console.log(jsn);
      const userContact = (data) => {
        return data.map((f) => {
          let result = {
            name: f.name,
            username: f.username,
            email: f.email,
          };
          return result;
        });
      };
      let boxes = userContact(jsn)
     
    
     
      
    }
  }
};
xlr.send();
