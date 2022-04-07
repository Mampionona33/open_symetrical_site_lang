// alert('hello from contents');

chrome.storage.sync.get('FirstTexteToBeReplaced', function (fetchedData) {
  console.log('fetched: ' + fetchedData.FirstTexteToBeReplaced);
});
chrome.storage.sync.get('test', function (fetchedData) {
  console.log('fetched: ' + fetchedData.test);
});
