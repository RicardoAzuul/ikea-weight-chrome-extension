// const shoppingBag = document.getElementById("one-checkout");

// let selector = '[class^="product_name"]';
// var listitems = document.querySelectorAll(selector);

var listitems = document.getElementsByTagName('li');
if (listitems) {
  console.log("Found listitems");
  console.log("Length", listitems.length);
  console.log(listitems[0]);
  console.log(listitems);
  console.log(typeof listitems);
  for (let listitem of listitems){
    console.log("List item");
    console.log(listitem);
  }
}
else {
  console.log("Links not found");
}

// `document.querySelector` may return null if the selector doesn't match anything.
// if (shoppingBag) {
//   const links = shoppingBag.querySelectorAll("a");
//   if (links) {
//     console.log("Found links");
//     for (const link of links){
//       console.log(link);
//     }
//   }
//   else {
//     console.log("Links not found");
//   }

// }
