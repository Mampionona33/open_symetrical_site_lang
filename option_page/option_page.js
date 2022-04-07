const registerInputsValue = async () => {
  // get all value and id of inputs in form
  const allInputValue = Array.from(
    document.querySelectorAll('#replaceformId input')
  ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});

  const values = [];
  const keys = [];

  //   Get array values
  for (let value of Object.values(allInputValue)) {
    values.push(value);
  }
  //   Get array keys
  for (let key of Object.keys(allInputValue)) {
    keys.push(key);
  }

  for (let i = 0; i < keys.length; i++) {
    //   if value is not empty put the key and the value in the session storage
    if (values[i] !== '') {
      sessionStorage.setItem(keys[i], values[i]);
    }
  }
};

const clearInputs = () => {
  const input = Array.from(document.querySelectorAll('input')).map((item) => {
    document.getElementById(item.id).value = '';
  });
  console.log(input);
};

document.getElementById('btnSubmit').addEventListener('click', (event) => {
  event.preventDefault();
  sessionStorage.clear();
  registerInputsValue();
  clearInputs();
});
