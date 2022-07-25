const API = "http://localhost:8000/posts";

let inpTitle = document.getElementById("inpTitle");
let inpDesc = document.getElementById("inpDesc");
let inpImg = document.getElementById("inpImg");
let btnAdd = document.getElementById("btnAdd");
let posts = document.getElementById("posts");
let searchValue = "";
let currentPage = 1;

function readPosts() {
  fetch(`${API}?q=${searchValue}&_page=${currentPage}&_limit=6`)
    .then((res) => res.json())
    .then((data) => {
      sectionPosts.innerHTML = "";
      data.forEach((item) => {
        sectionPosts.innerHTML += ` 
          <div class="card m-4 cardBook" style="width: 18rem">
          <img id="${item.id}" src="${item.inpImg}" class="card-img-top detailsCard" style="height: 280px" alt="${item.inpTitle}" />
        <div class="card-body">
          <h5 class="card-title">${item.inpTitle}</h5>
          <p class="card-text para">
            ${item.inpDesc}
          </p>
  
          <button class="btn btn-outline-danger btnDelete" id="${item.id}">
              Delete
            </button>
            <button type="button" class="btn btn-warning btnEdit" id="${item.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit
          </button>
          
        </div>
      </div>
          `;
      });
    });
}
readPosts();
