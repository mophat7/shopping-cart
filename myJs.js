var cartItems = document.getElementsByClassName("cart-items")[0];
var total = 0;

let btnPrimary = document.getElementsByClassName("btn-primary");
for (i = 0; i < btnPrimary.length; i++) {
  btnPrimary[i].addEventListener("click", (e) => {
    var btn = e.target.parentElement.parentElement;
    var title = btn.getElementsByClassName("card-title")[0].innerText;
    var price = btn.getElementsByClassName("price")[0].innerText;
    var imageSrc = btn.getElementsByClassName("img-fluid")[0].src;
    var newDiv = document.createElement("div");

    newDiv.innerHTML = `
    <div class="row mb-2">
          <div class="col-4">
            <div class="cart-image">
              <img
                src="${imageSrc}"
                width="40px"
                height="20px"
                alt="Laptop"
                title="Laptop"
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-2">
            <div class="cart-title">
              <span>${title}</span>
            </div>
          </div>
          <div class="col-2">
            <div class="cart-quantity">
              <input type="number" value="4" class="form-control" />
            </div>
          </div>
          <div class="col-2">
            <span class="price">${price}</span>
          </div>
          <div class="col-2">
            <div>
              <button class="btn btn-danger">Remove</button>
            </div>
          </div>
          <br><br>
          <hr>
          
        </div>

      

        
    `;
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var titleNames = cartItems.getElementsByClassName("cart-title");
    for (i = 0; i < titleNames.length; i++) {
      if (titleNames[i].innerText == title) {
        alert(`You have already added ${titleNames[i].innerText} to the cart`);
        return;
      }
    }

    cartItems.append(newDiv);
  });
}

cartItems.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    var removeElement = e.target.parentElement.parentElement.parentElement;
    if (confirm("Are you sure you want to remove this item from the cart?")) {
      removeElement.remove();
    }
  }
});
