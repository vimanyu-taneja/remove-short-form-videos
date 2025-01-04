const removeReelsElements = () => {
  const outerDiv = document.querySelector("div.x1hc1fzr.x1unhpq9.x6o7n8i");

  if (outerDiv) {
    const innerDiv = outerDiv.querySelector("div > div");

    if (innerDiv) {
      const feedUnits = innerDiv.querySelectorAll(
        'div[data-pagelet^="FeedUnit_"]'
      );

      feedUnits.forEach((feedUnit) => {
        const targetSpan = feedUnit.querySelector(
          "span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.xlh3980.xvmahel.x1n0sxbx.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x4zkp8e.x3x7a5m.x1lkfr7t.x1lbecb7.x1s688f.xzsf02u, span.x1lliihq.x6ikm8r.x10wlt62.x1n2onr6.xlyipyv.xuxw1ft"
        );

        const targetLink = feedUnit.querySelector(
          'a.x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xdl72j9.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x1q0g3np.x87ps6o.x1lku1pv.x1rg5ohu.x1a2a7pz.x1n2onr6.xh8yej3[aria-label="Open reel in Reels Viewer"]'
        );

        if ((targetSpan && targetSpan.textContent === "Reels") || targetLink) {
          feedUnit.remove();
        }
      });
    }
  }
};

removeReelsElements();

const observer = new MutationObserver(() => {
  removeReelsElements();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
