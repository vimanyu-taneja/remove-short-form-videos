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
        redirect: { url: "https://www.instagram.com/" },
      },
      condition: {
        urlFilter: "https://www.instagram.com/reels",
        resourceTypes: ["main_frame"],
      },
    },
    {
      id: 2,
      action: {
        type: "redirect",
        redirect: { url: "https://www.instagram.com/" },
      },
      condition: {
        urlFilter: "https://www.instagram.com/*/reels",
        resourceTypes: ["main_frame"],
      },
    },
    {
      id: 3,
      action: {
        type: "redirect",
        redirect: { url: "https://www.instagram.com/" },
      },
      condition: {
        urlFilter: "https://www.instagram.com/reel/",
        resourceTypes: ["main_frame"],
      },
    },
    {
      id: 4,
      action: {
        type: "redirect",
        redirect: { url: "https://www.instagram.com/" },
      },
      condition: {
        urlFilter: "https://www.instagram.com/explore",
        resourceTypes: ["main_frame"],
      },
    },
    {
      id: 5,
      action: {
        type: "redirect",
        redirect: { url: "https://www.youtube.com/" },
      },
      condition: {
        urlFilter: "https://www.youtube.com/shorts",
        resourceTypes: ["main_frame"],
      },
    },
  ],
  removeRuleIds: [1, 2, 3, 4, 5],
});
