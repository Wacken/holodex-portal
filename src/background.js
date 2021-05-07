chrome.browserAction.onClicked.addListener((tab) => {
  const toolsUrls = ['holodex.net'];
  if (toolsUrls.some(url => tab.url.includes(url))) {
    return;
  }
  const toolsUrl = 'https://holodex.net/';
  const newTab = 'chrome://newtab/';

  const query = tab.url.split('?')[1];
  const params = new URLSearchParams(query);
  const ytVideoId = params.has('v') && params.get('v');

  ytVideoId || tab.url === newTab
    ? chrome.tabs.update(tab.id, {
      url: ytVideoId ? `${toolsUrl}multiview/AATY${ytVideoId}` : toolsUrl
    })
    : chrome.tabs.create({
      url: toolsUrl,
    });
});
