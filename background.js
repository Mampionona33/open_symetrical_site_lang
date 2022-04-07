chrome.action.onClicked.addListener((tab) => {
  const fetchCurrentUrl = getCurrentTabUrl();

  fetchCurrentUrl.then((currentUrl) => {
    // console.log(currentUrl);
    chrome.storage.sync.get(
      ['FirstTexteToBeReplaced', 'tab2_firs', 'tab3_firs', 'tab4_firs'],
      function (fetchedData) {
        console.log(
          'fetched: ' +
            fetchedData.FirstTexteToBeReplaced +
            ' ' +
            fetchedData.tab2_firs +
            ' ' +
            currentUrl
        );
      }
    );
  });
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id },
  //     files: ['content.js'],
  //   });
});

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);

  return tab;
}

const getCurrentTabUrl = async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.url;
};
