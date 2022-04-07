const registerInputsValue = () => {
  const allInputValue = Array.from(
    document.querySelectorAll('#replaceformId input')
  ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
  console.log(allInputValue);
};

document.getElementById('btnSubmit').addEventListener('click', (event) => {
  event.preventDefault();
  registerInputsValue();
});
