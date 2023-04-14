const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage")

function fetchImage(){
  const inputValue = document.getElementById("input").value;

  if(inputValue > 10 ||inputValue < 1){
    errorMessageEl.style.display = "block";
    errorMessageEl.innerText = "Number should be between 0 and 16";
    return
  }
  fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=1&client_id=MnrRm_LHPC6axV7uhJJmpvGsy6R8qkV3z-EhM9LkFcY`)
    .then((res) => 
    res.json().then((data) => {
      console.log(data);
   })
  );
  errorMessageEl.style.display = "none";
}

btnEl.addEventListener("click", fetchImage)
