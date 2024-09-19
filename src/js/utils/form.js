import './forms';
import { formFieldsInit, formSubmit } from './forms';

const form = () => {
    // form fields
    formFieldsInit({ viewPass: true });

    // submit form
    formSubmit();

    const mail = document.querySelectorAll('.input--mail');

    mail.forEach((item) => {
        item.addEventListener('input', () => {
            const inputValue = item.value.trim();
            const parent = item.parentElement;
            const span = item.nextElementSibling;
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(inputValue) && inputValue != '') {
                parent.classList.add('_form-error');
                span.classList.add('active');
            } else {
                parent.classList.remove('_form-error');
                span.classList.remove('active');
            }
        });
    });
};

export default form;
