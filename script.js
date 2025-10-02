let user = {};
let cart = [];
let images = ["images/bracelet1.jpg", "images/bracelet2.jpg", "images/bracelet3.jpg"];
let current = 0;

function startApp() {
  user.name = document.getElementById("name").value;
  user.email = document.getElementById("email").value;
  user.phone = document.getElementById("phone").value;
  user.address = document.getElementById("address").value;

  document.getElementById("login").style.display = "none";
  document.getElementById("app").style.display = "block";
  showBracelet();
}

function showBracelet() {
  const container = document.getElementById("bracelet-container");
  container.innerHTML = "";

  if (current >= images.length) {
    container.innerHTML = "<p>No more bracelets</p>";
    return;
  }

  const img = document.createElement("img");
  img.src = images[current];

  const yesBtn = document.createElement("button");
  yesBtn.textContent = "Swipe Right (Add)";
  yesBtn.onclick = () => {
    cart.push(images[current]);
    current++;
    showBracelet();
  };

  const noBtn = document.createElement("button");
  noBtn.textContent = "Swipe Left (Skip)";
  noBtn.onclick = () => {
    current++;
    showBracelet();
  };

  container.appendChild(img);
  container.appendChild(yesBtn);
  container.appendChild(noBtn);
}

function checkout() {
  const message = `Order from ${user.name}\nPhone: ${user.phone}\nAddress: ${user.address}\nItems: ${cart.join(", ")}`;
  const whatsappLink = `https://wa.me/919677280124?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, "_blank");
}
