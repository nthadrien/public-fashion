import { produits, users } from "./data";
import { createResource } from "solid-js";
// Example POST method implementation:
// export async function fetchUser (url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// };

export async function fetchUser(data) {
  const resp = users.filter(user => user.name === data.name)[0];
  return new Promise((resolve, reject) => {
    if (resp) {
      setTimeout(() => {
        localStorage.setItem('userInfo', JSON.stringify(resp))
        resolve(resp);
      }, 4000);
    } else {
      reject("Mot de passe ou Nom d'utilisateurs incorrrecte")
    }
  });
};

export async function fetchProducts() {
  const resp = produits;
  return new Promise((resolve, reject) => {
    if (resp) {
      setTimeout(() => {
        localStorage.setItem('userInfo', JSON.stringify(resp))
        resolve(resp);
      }, 4000);
    } else {
      reject("Mot de passe ou Nom d'utilisateurs incorrrecte")
    }
  })
};


// Mock Api datta fetcher;

export function fetchProfileData() {
  const [user] = createResource(fetchUser);
  return { user };
}


export function fetchProductsData() {
  const [products] = createResource(fetchProducts);
  return { products };
};

let ringoPosts = [
  {
    id: 0,
    text: "I get by with a little help from my friends"
  },
  {
    id: 1,
    text: "I'd like to be under the sea in an octupus's garden"
  },
  {
    id: 2,
    text: "You got that sand all over your feet"
  }
];

function fetchPosts() {
  let ringoPostsAtTheTime = ringoPosts;
  console.log("fetch posts...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetched posts");
      resolve(ringoPostsAtTheTime);
    }, 3000 * Math.random());
  });
}