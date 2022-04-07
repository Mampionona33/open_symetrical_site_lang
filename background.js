chrome.action.onClicked.addListener((tab) => {
  const fetchCurrentUrl = getCurrentTabUrl();

  fetchCurrentUrl.then((currentUrl) => {
    // console.log(currentUrl);
    chrome.storage.sync.get(
      ['FirstTexteToBeReplaced', 'tab2_firs', 'tab3_firs', 'tab4_firs'],
      function (fetchedData) {
        let tab2Url;
        if (fetchedData.tab2_firs !== undefined) {
          tab2Url = currentUrl.replace(
            fetchedData.FirstTexteToBeReplaced,
            fetchedData.tab2_firs
          );
        }
        console.log(currentUrl);
        console.log(tab2Url);
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
