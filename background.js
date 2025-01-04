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
