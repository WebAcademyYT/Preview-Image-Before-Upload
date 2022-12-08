const uploadBtn = document.getElementById('fileBtn');
const uploadInput = document.getElementById('fileInput');
const removeBtn = document.querySelector('.btn-remove');
const preview = document.getElementById('preview');
const beforeElements = document.querySelector('.before-upload');
const afterElements = document.querySelector('.after-upload');

uploadBtn.addEventListener('click', () => {
    uploadInput.click();
})

uploadInput.addEventListener('change', (event) => {
    if(event.target.files.length > 0) {
        let src = URL.createObjectURL(event.target.files[0]);
        preview.src = src;
        beforeElements.classList.add('hide');
        afterElements.classList.add('active');
    }
})

removeBtn.addEventListener('click', () => {
    preview.src = '';
    beforeElements.classList.remove('hide');
    afterElements.classList.remove('active');
})