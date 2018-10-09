var box = document.getElementById('input');

box.oninput = () => {
    document.title = box.value;
};