let lastVisitedURL = null;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    !tab.url.startsWith("https://www.tiktok.com/")
  ) {
    lastVisitedURL = tab.url;
  }
});

chrome.webNavigation.onBeforeNavigate.addListener(
  (details) => {
    if (details.url.startsWith("https://www.tiktok.com/")) {
      if (lastVisitedURL) {
        chrome.tabs.update(details.tabId, { url: lastVisitedURL });
      }
    }
  },
  { url: [{ hostContains: "tiktok.com" }] }
);

chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [
    {
      id: 1,
      action: {
        type: "redirect",
        redirect: { url: "https://www.youtube.com/" },
      },
      condition: {
        urlFilter: "https://www.youtube.com/shorts/",
        resourceTypes: ["main_frame"],
      },
    },
  ],
  removeRuleIds: [1],
});
