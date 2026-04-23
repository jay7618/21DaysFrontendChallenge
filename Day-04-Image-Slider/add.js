
let imageList = document.getElementById('imageList');
let images = JSON.parse(localStorage.getItem('sliderImages')) || [];

function renderList() {
  imageList.innerHTML = '';
  images.forEach((src, index) => {
    let li = document.createElement('li');
    li.className = 'd-flex align-items-center justify-content-between mb-2 p-2 bg-white rounded shadow-sm';
    li.innerHTML = `
      <div class="d-flex align-items-center flex-grow-1 me-2">
        <img src="${src}" alt="img">
        <span class="text-truncate" style="max-width: 300px; display: inline-block; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
          ${src}
        </span>
      </div>
      <button class="btn btn-danger btn-sm" onclick="removeImage(${index})">Remove</button>
    `;
    imageList.appendChild(li);
  });
}

function addImage() {
  let url = document.getElementById('imageUrl').value.trim();
  if (url) {
    images.push(url);
    localStorage.setItem('sliderImages', JSON.stringify(images));
    renderList();
    document.getElementById('imageUrl').value = '';
  }
}

function removeImage(index) {
  images.splice(index, 1);
  localStorage.setItem('sliderImages', JSON.stringify(images));
  renderList();
}

document.getElementById('addImage').addEventListener('click', addImage);

renderList();
