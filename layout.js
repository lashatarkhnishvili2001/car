const layout = {
  card(e) {
    return `<div class="card vehicle m-2" style="width: 18rem;" data-brand="${e.brand}" data-model="${e.model}">
        <img src="${e.poster}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="car-title text-center">${e.brand}</h5>
          <p class="carmodel">${e.model}</p>
          <p class="carmodel">${e.year}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <button type="button" class="btn btn-danger my-3" onclick="deleteCar(this)">
            <i class="fas fa-trash-alt"></i>
          </button>
          <input class="form-check-input" card-checkbox align-self-center" type="checkbox" onchange="changeChackebox()" value="" name="list" />
        </div>
      </div>`;
  },
};
