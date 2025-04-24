import './style.css'
import '@expanding-textarea/lib'

const form = document.querySelector('#demo-form') as HTMLFormElement;
const output = document.querySelector('#demo-form-output') as HTMLElement;
const styleToggle = document.querySelector('#styled-checkbox') as HTMLInputElement;

const showFormValues = () => {
  const data = new FormData(form);
  const formattedData = Array.from(data).map(([name, value]) => `${name}: ${value}`).join("\n\n");
  output.textContent = formattedData;
}

showFormValues();
form.addEventListener('input', () => showFormValues());

styleToggle.addEventListener('change', () => {
  document.body.classList.toggle('styled-inputs')
});