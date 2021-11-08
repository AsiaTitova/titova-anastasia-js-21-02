'use strict';


//Разработать страницу, подобную разработанной в ходе урока.
// Страница должна содержать инпут для ввода файла и дальнейшей отправки на сервер по API https://api.imgbb.com/.

  const fileInput = document.getElementById('file');
  const uploadButton = document.getElementById('upload')
  const galleryList = document.querySelector('.gallery');
  const loaderContainer =  document.querySelector('.task__loader');

  uploadButton.addEventListener('click', () => {
    uploadBase64(fileInput.files[0])
  })


// Отправляемый файл должен быть закодирован в base64. Отправленные изображения должны выводиться на страницу.
  function uploadBase64 (file) {
    addClassElement(loaderContainer, 'loader__show');
    moveLeftAnimation();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const formData = new FormData();
      formData.set('key', '088d58f291c75261ffb031dc80ebaa5b')
      formData.set('image', reader.result.replace(/^.*,/, ''))
      fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData
      }).then(response => response.json())
        .then((response) => {
          imgArray.push(response.data.display_url);
          // Приходящие в ответе от сервера ссылки на изображения должны сохраняться в localStorage.
          localStorage.setItem('imgArray', JSON.stringify(imgArray))
          addImgToGallery(response.data.display_url);
        })
        .catch(console.error)
    }}

  function addImgToGallery(url) {
    const img = document.createElement('img');
    img.src = url
    galleryList.append(img);
    removeClassElement(loaderContainer, 'loader__show');
  }

// Если при загрузке страницы в localStorage уже есть сохранённые ссылки на изображения, эти изображения должны выводиться на страницу.
  const imgArray = localStorage.getItem('imgArray') ? JSON.parse(localStorage.getItem('imgArray')) : [];
  imgArray.forEach(addImgToGallery)


// При загрузке очередного изображения на сервер необходимо отображать над инпутом лоадер, анимированный на js.
  function moveLeftAnimation() {
    const loaderBox = document.getElementById('loader-box')
    let pos = Number.parseInt(getComputedStyle(loaderBox).left)
    let interval = moveRight()

    function moveRight() {
      return requestAnimationFrame(() => {
        if (pos < Number.parseInt(getComputedStyle(loaderBox.parentElement).width) - Number.parseInt(getComputedStyle(loaderBox).width)) {
          pos++;
          loaderBox.style.left = `${pos}px`
          requestAnimationFrame(moveRight)

        } else {
          requestAnimationFrame(moveLeft)
        }
      }, 20)
    }

    function moveLeft() {
      return requestAnimationFrame(() => {
        if (pos >= 0) {
          pos--;
          loaderBox.style.left = `${pos}px`
          requestAnimationFrame(moveLeft)
        } else {
          requestAnimationFrame(moveRight)
        }
      })
    }
  }

  moveLeftAnimation()


// вспомогательные функции //

function addClassElement(element, className) {
  element.classList.add(className);
}

function removeClassElement(element, className) {
  element.classList.remove(className);
}
