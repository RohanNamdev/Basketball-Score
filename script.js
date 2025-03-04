let plusOne = document.getElementById("plus-one");
let plusTwo = document.getElementById("plus-two");
let plusThree = document.getElementById("plus-three");

let guestPlusOne = document.getElementById("guest-plus-one");
let guestPlusTwo = document.getElementById("guest-plus-two");
let guestPlusThree = document.getElementById("guest-plus-three");

let reset = document.getElementById("reset");

let home = document.getElementById("home-counter");
let guest = document.getElementById("guest-counter");

let homeCount = { count: 0 };
let guestCount = { count: 0 };

function increment(countObjVar, btn, incrementVal, heading) {
  btn.addEventListener("click", function () {
    countObjVar.count += incrementVal;
    heading.textContent = countObjVar.count;
  });
}

increment(homeCount, plusOne, 1, home);
increment(homeCount, plusTwo, 2, home);
increment(homeCount, plusThree, 3, home);

increment(guestCount, guestPlusOne, 1, guest);
increment(guestCount, guestPlusTwo, 2, guest);
increment(guestCount, guestPlusThree, 3, guest);

reset.addEventListener("dblclick", function () {
  guestCount.count = 0;
  homeCount.count = 0;
  guest.textContent = 0;
  home.textContent = 0;
});

// plusOne.addEventListener("click", function () {
//   homeCount += 1;
//   home.textContent = homeCount;
// });

// plusTwo.addEventListener("click", function () {
//   homeCount += 2;
//   home.textContent = homeCount;
// });

// plusThree.addEventListener("click", function () {
//   homeCount += 3;
//   home.textContent = homeCount;
// });

// guestPlusOne.addEventListener("click", function () {
//   guestCount += 1;
//   guest.textContent = guestCount;
// });

// guestPlusTwo.addEventListener("click", function () {
//   guestCount += 2;
//   guest.textContent = guestCount;
// });

// guestPlusThree.addEventListener("click", function () {
//   guestCount += 3;
//   guest.textContent = guestCount;
// });
