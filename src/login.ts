import * as yup from "yup";

const nameInput = document.querySelector("#name") as HTMLInputElement;
const errorBrand = document.querySelector(".errorbrand1") as HTMLSpanElement;
const nicknameInput = document.querySelector("#nickname") as HTMLInputElement;
const errorDescription = document.querySelector(".errordescription1") as HTMLSpanElement;

const form = document.querySelector(".form1") as HTMLFormElement;
const container1 = document.querySelector(".container1") as HTMLFormElement;
const container = document.querySelector(".container") as HTMLFormElement;
const container2: HTMLDivElement = document.querySelector(".container2")!;

const schema = yup.object().shape({
	name: yup
		.string()
		.matches(/^[A-Za-z\s]+$/, "Please enter only name ")
		.required("Name is required"),
	nickname: yup
		.string()
		.matches(/^[A-Za-z\s]+$/, "Please enter only name ")
		.required("Nickname is required"),
});

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = {
		name: nameInput.value,
		nickname: nicknameInput.value,
	};

	schema
		.validate(formData)
		.then(() => {
			errorBrand.innerText = "";
			errorDescription.innerText = "";
			container1.style.display = "none";
			container2.style.display = "none";

			container.style.display = "flex";

			console.log(formData);
		})
});
