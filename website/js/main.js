let nav = document.querySelector(".navbar");
let submit = document.getElementById("sub");
let data = document.getElementById("data");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

let navBar = document.querySelectorAll(".nav-link");

let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function (element) {
  element.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

submit.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phoneNo = document.getElementById("phoneNo").value;
  let msg = document.getElementById("msg").value;

  sub.style.display = "none";
  document.getElementById("spinner").style.display = "inline-block";

  fetch("/contact", {
    headers: {
      Accept: "application/json",
      "Content-Type": "applicatijon/json",
    },

    method: "POST",

    body: JSON.stringify({
      name: name,
      email: email,
      phoneno: phoneNo,
      message: msg,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        document.getElementById("spinner").style.display = "none";
        sub.style.display = "inline-block";
        data.innerHTML = "Data Submitted Successfully";

        setTimeout(() => {
          data.innerHTML = "";
        }, 3000);
      }
    })
    .catch((error) => {
      alert("Error" + error);
    });
});
