const deleteBtn = document.querySelector(".delete-btn"); // TODO => ღილაკი მომიშნული ელემენტების წასაშლელად
const checkedBtn = document.querySelector(".checked-btn"); // TODO => ყველა ელემენტების  მონიშნული
const addCarModalBtn = document.querySelector("#add-car-modal-btn"); // TODO => ღილაკი ელემენტის დამატება
const carsRow = document.querySelector("#cars-row"); // TODO => ბლოკის დინამიური კორტერტის შესატანა
const addCarForm = document.querySelector("#add-car-form"); // TODO => დამატების ფორმა
const addBtn = document.querySelector("#add-btn"); // TODO => ღილაკის მოდალის გამოსატანა
const errorList = document.getElementById("error-list");
const searchButton = document.getElementById("search-btn");
const brands = document.getElementById("brandsid");
const models = document.getElementById("modelsid");
const fromDate = document.getElementById("from-date");
const toDate = document.getElementById("to-date");
// fromDate.addEventListener("change", (e) => {
//   const start = e.target.value.split("-")[0]
// });

// const filteredBars = document.querySelectorAll(".filtered-bar"); // todo => 1
// const formSelectFilter = document.querySelector(".form-select-filter"); // todo => filter car
// const formSelectModel = document.querySelector(".form-select-model"); // todo => model car

// todo =>
brands.addEventListener("change", (e) => {
  const selected = e.target.value;

  // const filtered = databse.cars.filter(
  //   (item) => item.brand.toLocaleLowerCase() == selected.toLocaleLowerCase()
  // );
  // carsRow.innerHTML = filtered.map((item) => layout.card(item)).join("");

  const brand = databse.brands.find(
    (item) => item.title.toLocaleLowerCase() == selected.toLocaleLowerCase()
  );
  const arr = brand.models.map(
    (item) => `<option value="${item}">${item}</option>`
  );
  arr.unshift(`<option selected disabled value="none">აირჩიეთ მოდელი</option>`);
  models.innerHTML = arr.join("");
  models.disabled = false;
});

searchButton.addEventListener("click", () => {
  const start = fromDate.value ? fromDate.value.split("-")[0] : 1900;
  const end = toDate.value ? toDate.value.split("-")[0] : 2030;
  let filteredData = [];

  if (brands.value != "none") {
    console.log(brands.value);
    filteredData = databse.cars.filter((item) => {
      return item.brand.toLocaleLowerCase() == brands.value.toLocaleLowerCase();
    });
  }

  if (models.value != "none") {
    if (filteredData.length) {
      filteredData = filteredData.filter((item) => {
        return (
          item.model.toLocaleLowerCase() == models.value.toLocaleLowerCase()
        );
      });
    } else {
      filteredData = databse.cars.filter((item) => {
        return (
          item.model.toLocaleLowerCase() == models.value.toLocaleLowerCase()
        );
      });
    }
  }

  if (filteredData.length) {
    filteredData = filteredData.filter(
      (item) => item.year >= start && item.year <= end
    );
  } else {
    filteredData = databse.cars.filter(
      (item) => item.year >= start && item.year <= end
    );
  }

  carsRow.innerHTML = filteredData.map((item) => layout.card(item)).join("");
  // carsRow.innerHTML = filteredByModel.map((item) => layout.card(item)).join("");
});
// todo =>

let checkboxList = []; // TODO => მასივის მოზადება  checkbox არსაჩევად
// TODO => ობიექტის შექმნა ფოემის ველებისაგან
const addFields = {
  brand: document.querySelector("#brand"),
  model: document.querySelector("#model"),
  year: document.querySelector("#year"),
  poster: document.querySelector("#poster"),
};
// TODO  => error box
const errorBoxes = {
  brandError: document.querySelector("#brand-error"),
  modelError: document.querySelector("#model-error"),
  yearError: document.querySelector("#year-error"),
  posterError: document.querySelector("#poster-error"),
};

// TODO => Functions -> Dlete One Car
function deleteCar(e) {
  e.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...`;
  setTimeout(() => {
    e.parentElement.parentElement.remove();
    const checkedItems = document.querySelectorAll("input[name=list]:checked");

    if (checkedItems.length > 0) {
      deleteBtn.disabled = false;
      deleteBtn.classList.remove("hide");
    } else {
      deleteBtn.disabled = true;
      deleteBtn.classList.add("hide");
    }
  }, 800);
}
// TODO => Functions -> ყველა მონიშნული წაშლა
deleteBtn.addEventListener("click", () => {
  const checked = document.querySelectorAll("input[name=list]:checked");
  checked.forEach((checked) => {
    checked.parentElement.parentElement.remove();
  });
  const afterDelete = document.querySelectorAll("input[name=list]");
  if (afterDelete.length == 0) {
    checkedBtn.disabled = true;
    deleteBtn.classList.remove("hide");
    deleteBtn.disabled = true;
  } else {
    deleteBtn.classList.add("hide");
  }
});
// TODO => ყველა ელემენტების  მონიშნული
checkedBtn.addEventListener("click", (e) => {
  const action = e.target.getAttribute("data-action");
  const checkbox = document.querySelectorAll("input[name=list]");
  if (action == "select") {
    checkbox.forEach((item) => {
      item.checked = true;
    });
    e.target.setAttribute("data-action", "clear");
    deleteBtn.classList.remove("hide");
    deleteBtn.disabled = false;
  } else {
    checkbox.forEach((item) => {
      item.checked = false;
    });
    e.target.setAttribute("data-action", "select");
    deleteBtn.classList.add("hide");
    deleteBtn.disabled = true;
  }
});
// TODO => Functions ->
addFields.brand.addEventListener("input", (e) => {
  if (e.target.value.length > 2) {
    errorBoxes.brandError.classList.add("d-none");
  }
});

addFields.model.addEventListener("input", (e) => {
  if (e.target.value.length > 1) {
    errorBoxes.modelError.classList.add("d-none");
  }
});
addFields.year.addEventListener("change", (e) => {
  if (e.target.value != "") {
    errorBoxes.yearError.classList.add("d-none");
  }
});

addFields.poster.addEventListener("change", (e) => {
  if (e.target.value != "") {
    errorBoxes.posterError.classList.add("d-none");
  }
});

// TODO => Functions -> ახალი მანქანის გამოტანა
addBtn.addEventListener("click", (e) => {
  e.preventDefault(); // TODO => მოვლენის სტანდარტული მოქმედების დაბლოკვა
  const errors = [];
  if (addFields.brand.value.length < 2) {
    errors.push("მწარმოებლის ველი შესავსებია");
    errorBoxes.brandError.innerHTML = `მწარმოებლის ველი შესავსებია`;
    errorBoxes.brandError.classList.remove("d-none");
    // addFields.brand.classList.add("error-field");
  }
  if (addFields.model.value.length < 2) {
    errors.push("მოდელის ველი შესავსებია");
    errorBoxes.modelError.innerHTML = `მოდელის ველი შესავსებია`;
    // addFields.model.placeholder = "მოდელის ველი შესავსებია";
    errorBoxes.modelError.classList.remove("d-none");
    // addFields.model.classList.add("error-field");
  }
  if (addFields.year.value == "") {
    errors.push("წელის ველი შესავსებია");
    errorBoxes.yearError.innerHTML = `წელის ველი შესავსებია`;
    errorBoxes.yearError.classList.remove("d-none");
    // addFields.year.classList.add("error-field");
  }
  if (addFields.poster.value == "") {
    errors.push("სურათის ველი შესავსებია");
    errorBoxes.posterError.innerHTML = `სურათის ველი შესავსებია`;
    errorBoxes.posterError.classList.remove("d-none");
  }

  if (!errors.length) {
    const car = {
      id: _id(),
      brand: addFields.brand.value,
      model: addFields.model.value,
      year: addFields.year.value.split("-")[0],
      poster: addFields.poster.value,
    };
    databse.cars.unshift(car);
    carsRow.insertAdjacentHTML("afterbegin", layout.card(car));
    addCarForm.reset();
    addCarModalBtn.click();
  }
});
// TODO => Functions -> ყველა ელემენტის მონიშნა
function changeChackebox(e) {
  const currentCheckboxList = document.querySelectorAll(
    '[name="list"]:checked'
  );
  if (currentCheckboxList.length > 0) {
    deleteBtn.disabled = false;
    deleteBtn.classList.remove("hide");
  } else {
    deleteBtn.disabled = true;
    deleteBtn.classList.add("hide");
  }
}
// TODO => Functions -> კონტენტის შეტანა მას მერე რაც დოკუმენტი დაასრულებს ჩატვირთვას
window.addEventListener("DOMContentLoaded", () => {
  deleteBtn.disabled = true; // TODO => deleteAllBtn გათიშვა
  deleteBtn.classList.add("hide"); // TODO => deleteAllBtn გაქრობა
  carsRow.innerHTML = databse.cars.map((item) => layout.card(item)).join(""); // TODO => მიღებული ინფორმაციის რენდერი HTML დოკუმენტში
  checkboxList = document.querySelectorAll('[name="list"]'); // TODO => არჩევა checkbox ელემენტების

  checkboxList.forEach((item) => {
    item.addEventListener("change", changeChackebox);
    // TODO => არჩეულ ელემენტებზე მოვლენის მიბმა
  });
});

// todo => mas
// const brands = document.getElementById("brands");
// const models = document.getElementById("models");

// models.addEventListener("change", (e) => {
//   const selected = e.target.value;

//   const filteredByBrand = databse.cars.filter(
//     (item) => item.brand.toLocaleLowerCase() == brands.value.toLocaleLowerCase()
//   );

//   const filteredByModel = filteredByBrand.filter((item) => {
//     return item.model.toLocaleLowerCase() == selected.toLocaleLowerCase();
//   });

//   carsRow.innerHTML = filteredByModel.map((item) => layout.card(item)).join("");
// });
// todo => mas end
// todo => filter car
// formSelectFilter.addEventListener("change", (e) => {
//   const brand = e.target.value;
//   if (brand == "all") {
//     document.querySelectorAll(".vehicle").forEach((item) => {
//       item.classList.remove("hide");
//     });
//   } else {
//     document.querySelectorAll(".vehicle").forEach((item) => {
//       item.classList.remove("hide");
//     });
//     document.querySelectorAll(".vehicle").forEach((item) => {
//       if (item.dataset.brand.toLowerCase() != brand.toLowerCase())
//         item.classList.add("hide");
//     });
//   }
// });
// todo => model car
// formSelectModel.addEventListener("change", (e) => {
//   const model = e.target.value;
//   if (model == "all") {
//     document.querySelectorAll(".vehicle").forEach((item) => {
//       item.classList.remove("hide");
//     });
//   } else {
//     document.querySelectorAll(".vehicle").forEach((item) => {
//       item.classList.remove("hide");
//     });
//     document.querySelectorAll(".vehicle").forEach((item) => {
//       if (item.dataset.model.toLowerCase() != model.toLowerCase())
//         item.classList.add("hide");
//     });
//   }
// });

// todo => 1
// filteredBars.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     filteredBars.forEach((item) => {
//       item.disabled = false;
//     });
//     e.target.disabled = true;
//     const brand = e.target.dataset.brand;
//     if (brand == "all") {
//       document.querySelectorAll(".vehicle").forEach((item) => {
//         item.classList.remove("hide");
//       });
//     } else {
//       document.querySelectorAll(".vehicle").forEach((item) => {
//         item.classList.remove("hide");
//       });
//       document.querySelectorAll(".vehicle").forEach((item) => {
//         if (item.dataset.brand.toLowerCase() != brand.toLowerCase())
//           item.classList.add("hide");
//       });
//     }
//   });
// });
