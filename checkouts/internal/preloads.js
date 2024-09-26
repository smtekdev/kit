
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills-legacy.BpXtJWtR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app-legacy.DWB9FR11.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedContact-legacy.D6B_SK1I.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection-legacy.BrKFyhvc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal-legacy.Dyvb3OKh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture-legacy.XvLlA3LO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo-legacy.Cd0aHrIX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PurchaseOptionsAgreement-legacy.Ch9h4rd9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Option-legacy.DeYlqj6G.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo-legacy.LAEpraZa.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks-legacy.BdlgBqtZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods-legacy.B1S3qUbT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePageModal-legacy.Cjr15N0G.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup-legacy.mSNFCFF3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin-legacy.DiJxM-Ch.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section-legacy.MMWCqu1s.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/google-pay-legacy.CKGN0uGC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection-legacy.C-1SogRl.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context-legacy.CArHp_yX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/constants-legacy.BE4YXvxM.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ButtonWithRegisterWebPixel-legacy.BrijnjYU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/NoAddressLocationFullDetour-legacy.CPbYIPCa.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage-legacy.BggCkk3M.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions-legacy.1tue99bQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown-legacy.BfkpPi8W.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList-legacy.C0VC-MoH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch-legacy.uhhZ0rU8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index-legacy.xgdzgUW7.js"];
      var styles = [];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/oswald/oswald_n4.a5ee385bde39969d807f7f1297bf51d73fbf3c1e.woff2?h1=bGV4YXNwb3J0LmNvbQ&hmac=e134a3c5b45e98aa57b912620d6fd98841f8f892a98bb7019e580606dea592c3","https://fonts.shopifycdn.com/oswald/oswald_n7.f71e68b857a7b8128a7629452b9c6bf9468356a7.woff2?h1=bGV4YXNwb3J0LmNvbQ&hmac=518267ee0f91d855d9ca37f59f7b5e48465fe4c3383a59344983fd2b4fcf2d1e"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0605/0217/9892/files/LEXA_Sport_logo_png_300x_a61a4c23-a8a2-4b9c-b4b0-45fcf753a9b5_x320.png?v=1677488109"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  