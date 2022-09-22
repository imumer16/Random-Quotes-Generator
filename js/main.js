let quote_of_the_day = {
  get_quote: function () {
    fetch(`https://api.quotable.io/random`)
      .then((response) => response.json())
      .then((data) => {
        // console.table(data);
        document.querySelector(".quote").innerText = data.content;
        document.querySelector(".author").innerText = "~" + data.author;
      })
      .catch((error) => {
        document.querySelector(".quote").innerText = "";
        document.querySelector(".author").innerText = "Error";
        document.getElementById("demo").style.color = "red";
        document.getElementById("demo").style.fontSize = "3em";
      });
  },
};

//Event "Click Search button"
document.querySelector(".btn").addEventListener("click", function () {
  quote_of_the_day.get_quote();
});
//Event "Enter key"
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    quote_of_the_day.get_quote();
  }
});
