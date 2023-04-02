const inputField = document.querySelector(".searchBox"); 
const soupsName = document.querySelectorAll(".each-recipe");
inputField.addEventListener("keyup", function(event){
	const word = event.target.value.toLowerCase();

	soupsName.forEach(function(item){
		item.querySelector("p").textContent.toLowerCase().includes(word)
      ? (item.style.display = "block")
      : (item.style.display = "none");
	});
});