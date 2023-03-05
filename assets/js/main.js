const showHiddenPass = (inputPassId, inputIconId) => {
    const input = document.getElementById(inputPassId);
    const iconEye = document.getElementById(inputIconId);

    iconEye.addEventListener('click', () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        iconEye.classList.toggle('ri-eye-line');
        iconEye.classList.toggle('ri-eye-off-line');
    });
};

showHiddenPass('input-pass', 'input-icon');
