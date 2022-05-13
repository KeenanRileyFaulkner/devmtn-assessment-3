console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form was successfully submitted");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector("img").addEventListener("mouseover", () => {
	alert("Nice hands! We don't have any, but we can fly :)-")
})