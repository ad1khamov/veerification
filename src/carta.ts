import * as yup from "yup";

const brand: HTMLInputElement = document.querySelector("#branis")!;
const description: HTMLInputElement = document.querySelector("#iban")!;
const website: HTMLInputElement = document.querySelector("#banck")!;
const country: HTMLSelectElement = document.querySelector(".category")!;
const category: HTMLSelectElement = document.querySelector("#category")!;
const form: HTMLFormElement = document.querySelector(".form2")!;
const errorbrand: HTMLInputElement = document.querySelector(".errorbrand3")!;
const errordescription: HTMLDivElement = document.querySelector(".errordescription3")!;
const errorurl: HTMLDivElement = document.querySelector(".errorurl3")!;
const swift1: HTMLInputElement = document.querySelector("#swift1")!;
const swift: HTMLDivElement = document.querySelector(".swift")!;

const container2: HTMLDivElement = document.querySelector(".container2")!;
const container1: HTMLDivElement = document.querySelector(".container1")!;
const container: HTMLDivElement = document.querySelector(".container")!;




const schema = yup.object().shape({
	brand: yup
		.string()
		.matches(/^[A-Za-z\s]+$/)
		.required("Brand is required"),
		iban: yup
		.string()
		.matches(/^[A-Za-z\s]+$/)
		.required("Name is required"),
	card: yup
		.string()
		.matches(/^[\d\s]{13,19}$/, "Invalid card number")
		.required("Card number is required"),


	category: yup.string().required("Category is required"),
});

const regexp = /^[A-Za-z\s]+$/;

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = {
		brand: brand.value,
		iban: description.value,
		card: website.value,
		// country: country.value,
		category: category.value,
		swift1: swift1.value,
	};

	console.log(formData);
	schema
		.validate(formData)
		.then(() => {
			errorbrand.innerText = "";

			errordescription.innerText = "";
			errorurl.innerText = "";
			swift.innerText = "";
   container1.style.display = "flex";
			container.style.display = "none";
			container2.style.display = "none";


		})
		.catch((error) => {
			if (error.path === "brand" || brand.value === "" || !regexp.test(brand.value)) {
				errorbrand.innerText = "Beneficiary is a required field";
			}
			if (error.path === "name" || description.value === "" || !regexp.test(description.value)) {
				errordescription.innerText = "IBAN is a required field";
			}
			if (error.path === "card" || website.value === "") {
				errorurl.innerText = "Bank name is a required field";
			}
			if (error.path === "swift1" || website.value === "") {
				swift.innerText = "Swift code is a required field";
			}
		});
});
