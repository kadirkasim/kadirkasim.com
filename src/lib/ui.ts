import type { Locale } from "@/lib/locale";

export type UiCopy = {
  navStack: string;
  navAbout: string;
  navContact: string;
  write: string;
  skip: string;
  selected: string;
  focus: string;
  scrollExplore: string;
  view: string;
  getInTouch: string;
  designedWith: string;
  home: string;
  problem: string;
  approach: string;
  technologies: string;
  gallery: string;
  galleryHint: string;
  prevShots: string;
  nextShots: string;
  next: string;
  support: string;
  privacy: string;
  appStore: string;
  supportLead: string;
  supportDeviceGame: string;
  supportDeviceApp: string;
  supportAdsPrefix: string;
  supportAdsSuffix: string;
  privacyPolicy: string;
  whatThisIs: string;
  data: string;
  dataGame: string;
  dataApp: string;
  dataNoAccount: string;
  dataFallback: string;
  advertising: string;
  whatWeState: string;
  noAdvertising: string;
  analyticsMay: string;
  noAnalyticsBeyondAds: string;
  noAnalytics: string;
  iapMay: string;
  noIap: string;
  attCopy: string;
  authorizedSellers: string;
  pageNotFound: string;
  backHome: string;
  language: string;
};

const en: UiCopy = {
  navStack: "Stack",
  navAbout: "About",
  navContact: "Contact",
  write: "Write",
  skip: "Skip to content",
  selected: "Selected",
  focus: "Focus",
  scrollExplore: "Scroll to explore ↓",
  view: "View",
  getInTouch: "Get in touch",
  designedWith: "Designed & built with passion.",
  home: "Home",
  problem: "Problem",
  approach: "Approach",
  technologies: "Technologies",
  gallery: "Gallery",
  galleryHint: "Swipe or use the arrows to browse screens.",
  prevShots: "Previous screenshots",
  nextShots: "Next screenshots",
  next: "Next",
  support: "Support",
  privacy: "Privacy",
  appStore: "Store",
  supportLead: "Include your device, iOS version, and what you expected to happen.",
  supportDeviceGame: "keeps game data on your device. Reinstalling removes local data.",
  supportDeviceApp: "keeps app data on your device. Reinstalling removes local data.",
  supportAdsPrefix: "shows ads from",
  supportAdsSuffix: "If an ad is broken or inappropriate, mention the product in your email.",
  privacyPolicy: "Privacy policy",
  whatThisIs: "What this is",
  data: "Data",
  dataGame: "Game progress stays on your device.",
  dataApp: "Tasks and settings stay on your device.",
  dataNoAccount: "does not require an account.",
  dataFallback: "See the product listing for how data is handled.",
  advertising: "Advertising",
  whatWeState: "What we state here",
  noAdvertising: "No advertising stated.",
  analyticsMay: "Analytics may be used.",
  noAnalyticsBeyondAds: "No separate analytics product is stated beyond the ad partners.",
  noAnalytics: "No identifying analytics stated.",
  iapMay: "In-app purchases may be used.",
  noIap: "No in-app purchases stated.",
  attCopy:
    "On iOS, Apple’s Allow Tracking prompt appears before ads start. If you select Ask App Not to Track, ads still show, but they are not personalized using your advertising identifier (IDFA).",
  authorizedSellers: "Authorized sellers are listed at",
  pageNotFound: "Page not found",
  backHome: "Back home",
  language: "Language",
};

const tr: UiCopy = {
  navStack: "Stack",
  navAbout: "Hakkımda",
  navContact: "İletişim",
  write: "Yazın",
  skip: "İçeriğe geç",
  selected: "Seçilmiş",
  focus: "Odak",
  scrollExplore: "Keşfetmek için kaydırın ↓",
  view: "İncele",
  getInTouch: "İletişime geçin",
  designedWith: "Aşkla tasarlandı ve üretildi.",
  home: "Ana sayfa",
  problem: "Problem",
  approach: "Yaklaşım",
  technologies: "Teknolojiler",
  gallery: "Galeri",
  galleryHint: "Ekranlara göz atmak için kaydırın veya okları kullanın.",
  prevShots: "Önceki ekran görüntüleri",
  nextShots: "Sonraki ekran görüntüleri",
  next: "Sonraki",
  support: "Destek",
  privacy: "Gizlilik",
  appStore: "Mağaza",
  supportLead: "Cihazınızı, iOS sürümünü ve ne olmasını beklediğinizi yazın.",
  supportDeviceGame: "oyun verisini cihazınızda tutar. Yeniden yüklemek yerel veriyi siler.",
  supportDeviceApp: "uygulama verisini cihazınızda tutar. Yeniden yüklemek yerel veriyi siler.",
  supportAdsPrefix: "şuradan reklam gösterir:",
  supportAdsSuffix: "Bir reklam bozuk veya uygunsuzsa e-postanızda ürün adını belirtin.",
  privacyPolicy: "Gizlilik politikası",
  whatThisIs: "Bu nedir",
  data: "Veri",
  dataGame: "Oyun ilerlemesi cihazınızda kalır.",
  dataApp: "Görevler ve ayarlar cihazınızda kalır.",
  dataNoAccount: "hesap gerektirmez.",
  dataFallback: "Verinin nasıl işlendiği için ürün sayfasına bakın.",
  advertising: "Reklam",
  whatWeState: "Burada belirttiklerimiz",
  noAdvertising: "Reklam belirtilmemiştir.",
  analyticsMay: "Analitik kullanılabilir.",
  noAnalyticsBeyondAds: "Reklam ortaklarının ötesinde ayrı bir analitik ürünü belirtilmemiştir.",
  noAnalytics: "Veri toplayan analitik yok.",
  iapMay: "Uygulama içi satın alma kullanılabilir.",
  noIap: "Uygulama içi satın alma belirtilmemiştir.",
  attCopy:
    "iOS’ta reklamlar başlamadan önce Apple’ın İzlemeye İzin Ver istemi görünür. Uygulamanın İzlemesine İzin Verme’yi seçerseniz reklamlar yine gösterilir; ancak reklam tanımlayıcınız (IDFA) ile kişiselleştirilmez.",
  authorizedSellers: "Yetkili satıcılar şurada listelenir:",
  pageNotFound: "Sayfa bulunamadı",
  backHome: "Ana sayfaya dön",
  language: "Dil",
};

export function getUi(locale: Locale): UiCopy {
  return locale === "tr" ? tr : en;
}

export function kindLabel(locale: Locale, kind: "app" | "game"): string {
  if (locale === "tr") return kind === "game" ? "Oyun" : "Uygulama";
  return kind === "game" ? "Game" : "App";
}

export function adsPrivacyBody(
  locale: Locale,
  opts: {
    adNetwork: string;
    adPartners: string;
    adPublisherId: string;
    attPrompt: boolean;
  },
): string {
  const network = opts.adNetwork || (locale === "tr" ? "üçüncü taraf bir reklam ağı" : "a third-party ad network");

  if (locale === "tr") {
    if (opts.adPartners) {
      return `Bu oyun reklamları ${network} üzerinden gösterir. Güncel reklam ağları: ${opts.adPartners}. Bu ortaklar cihaz ve reklam tanımlayıcılarını${opts.attPrompt ? " — izlemeye izin verirseniz IDFA dahil —" : ""} reklam sunmak${opts.attPrompt ? ", kişiselleştirmek" : ""} ve ölçmek için toplayabilir. Oyun ilerlemenizi sunucularımızda almıyoruz.`;
    }
    return `Bu oyun reklamları ${network}${opts.adPublisherId ? ` (${opts.adPublisherId})` : ""} üzerinden gösterir. Bu ortak cihaz ve reklam tanımlayıcılarını reklam sunmak ve ölçmek için toplayabilir. Oyun ilerlemenizi sunucularımızda almıyoruz.`;
  }

  if (opts.adPartners) {
    return `This game shows ads through ${network}. Current ad networks are ${opts.adPartners}. Those partners may collect device and advertising identifiers${opts.attPrompt ? ", including IDFA if you allow tracking," : ""} to serve${opts.attPrompt ? ", personalize," : ""} and measure ads. We do not receive your game progress on our servers.`;
  }
  return `This game shows ads through ${network}${opts.adPublisherId ? ` (${opts.adPublisherId})` : ""}. That partner may collect device and advertising identifiers to serve and measure ads. We do not receive your game progress on our servers.`;
}

export function advertisingUsedLine(
  locale: Locale,
  opts: { ads: boolean; adUsedLabel: string; adNetwork: string },
): string {
  const ui = getUi(locale);
  if (!opts.ads) return ui.noAdvertising;
  const label = opts.adUsedLabel || opts.adNetwork;
  if (locale === "tr") {
    return label ? `Reklam kullanılır (${label}).` : "Reklam kullanılır.";
  }
  return label ? `Advertising is used (${label}).` : "Advertising is used.";
}

export function analyticsLine(locale: Locale, opts: { analytics: boolean; ads: boolean; adPartners: boolean }): string {
  const ui = getUi(locale);
  if (opts.analytics) return ui.analyticsMay;
  if (opts.ads) {
    if (locale === "tr") {
      return opts.adPartners
        ? "Reklam ortaklarının ötesinde ayrı bir analitik ürünü belirtilmemiştir."
        : "Reklam ortağının ötesinde ayrı bir analitik ürünü belirtilmemiştir.";
    }
    return opts.adPartners
      ? "No separate analytics product is stated beyond the ad partners."
      : "No separate analytics product is stated beyond the ad partner.";
  }
  return ui.noAnalytics;
}
