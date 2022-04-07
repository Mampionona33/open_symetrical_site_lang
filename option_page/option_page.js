// save data to local session
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
      //   sessionStorage.setItem(keys[i], values[i]);
      const inpKey = keys[i];
      const inpValue = values[i];
      chrome.storage.sync.set({ inpKey: inpValue }, () => {
        console.log('value is set to ', inpValue);
      });
    }
  }
};

// clear all inputs
const clearInputs = () => {
  const input = Array.from(document.querySelectorAll('input')).map((item) => {
    document.getElementById(item.id).value = '';
  });
};
// listen to the submit button clicked
document.getElementById('btnSubmit').addEventListener('click', (event) => {
  event.preventDefault();
  sessionStorage.clear();
  registerInputsValue();
  clearInputs();
});

// listen to the first expression change before set inputs enabled
const firstRepl = document.getElementById('FirstTexteToBeReplaced');
const secRepl = document.getElementById('SecondTexteToBeReplaced');
const firstTermReplacement = document.getElementsByClassName(
  'replaceForm_inputs_first_group'
);
const secondTermReplacement = document.getElementsByClassName(
  'replaceForm_inputs_second_group'
);
firstRepl.addEventListener('change', (event) => {
  secRepl.disabled = false;
  for (let i = 0; i < firstTermReplacement.length; i++) {
    firstTermReplacement[i].children[1].disabled = false;
  }
});
secRepl.addEventListener('change', (event) => {
  for (let i = 0; i < secondTermReplacement.length; i++) {
    secondTermReplacement[i].children[1].disabled = false;
  }
});
// -------------------------------------------------------------
