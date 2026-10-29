---
title: WoDue
updated: "2026-10-29"
metaDescription: >-
  Privacy policy for WoDue: what the game stores on its server, what other players see, purchases, notifications, ads in the beta, and how to delete your account.
lead: >-
  WoDue is a Turkish word game made by Kadir Kasim. This policy covers the WoDue game and its server. The game itself is in Turkish only; this English page explains the same rules.
sections:
  - title: Your account
    paragraphs:
      - >-
        WoDue is an online game. When you first open it, the server creates a player account for you, even if you play as a guest and never add an email address.
      - >-
        You can optionally link an email address. We send a one-time code to that address to confirm it, and later to restore your account on another device. WoDue does not ask for a password, and there is no Apple or Google sign-in.
  - title: What the server stores
    paragraphs:
      - "To run the game, the server keeps the following with your account:"
    items:
      - Your player ID and sign-in session data.
      - The display name you choose and the avatar you pick.
      - Your email address, if you link one, and the one-time code requests used to confirm it.
      - Your game progress, match results, scores and match times.
      - League placement, league points and badges.
      - Friends, friend requests, friend codes and match invites.
      - Bonuses and hints you own, and how you use them.
      - Records used to verify purchases.
      - A device notification token, if you allow notifications.
    after:
      - >-
        The app may also keep a copy of some of this data on your device so it works smoothly. Like any online service, the server and edge layer process technical connection data, such as your IP address, to deliver the game and protect it from abuse; on error or security events, technical logs may record IP address, request metadata, status code, and timing with sensitive values such as cookies masked.
  - title: Why it is used
    paragraphs:
      - >-
        This data is used to run your account and matches, keep leagues and friend lists, restore your account when you sign in with your email, grant what you bought or earned, send the notifications you allowed, improve the game, keep the service secure, and answer your support requests. Your data is not sold and is not used for ad targeting.
  - title: What other players see
    paragraphs:
      - >-
        Other players can see your display name, your avatar, and match and league information such as results and standings. Your email address is never shown to other players.
  - title: Purchases
    paragraphs:
      - >-
        Purchases are handled by Apple through the App Store. WoDue never receives your payment card details, and does not use a direct webshop (D2C/Webshop) or a Unity Authentication player account. To grant what you bought, the server checks the transaction information Apple provides and records the result with your account.
      - >-
        During the beta, items from Apple’s test (sandbox) purchases are kept separate from real purchased items. Your account and progress are the same in both cases.
  - title: Notifications
    paragraphs:
      - >-
        If you allow notifications, the app sends your device’s push token to the server so it can notify you through Apple’s push notification service, for example about invites or results. You can turn notifications off at any time in your device’s Settings.
  - title: Advertising and analytics
    paragraphs:
      - >-
        For first-party product analysis, the developer reviews the records already stored on the server in a first-party admin panel. The number and duration of matches played, game progress, preferred purchase packages, and bonus and reward usage are analyzed to improve the game and provide support. This analysis can include reports generated from account-linked records and is not limited to aggregate or fully anonymous data. This data is not sold and is not used for ad targeting.
      - >-
        In addition, the app uses Unity In-App Purchasing (Unity IAP 5.4) to run the App Store purchase flow. During store and purchase operations, the Unity IAP SDK processes and sends purchase/order events and product details, session, installation, and vendor identifiers (including iOS IDFV), device model and operating system/app versions, and device language/locale and store currency/region configuration to Unity for purchase service operation, order reconciliation, analytics, and diagnostics. Payment card details and GPS or physical device location are not collected; language and storefront region/currency are configuration metadata rather than evidence of physical location.
      - >-
        This beta version of WoDue does not show ads, and optional ad measurement, ad-viewing analytics, and the advertising identifier (IDFA) are off during the beta. If ads are added later, this policy and any required consent prompts will be updated before ads are turned on.
      - >-
        This website has its own anonymous page analytics, described in the site footer. That is separate from the game and does not include your game data.
  - title: Service providers
    paragraphs:
      - "WoDue relies on a small number of providers to run the service:"
    items:
      - A hosting provider for the game server and its database.
      - Amazon Web Services (Amazon SES) to send one-time email codes.
      - Apple, for App Store purchases and push notifications.
      - Unity Technologies (Unity In-App Purchasing SDK — https://unity.com/legal/game-player-and-app-user-privacy-policy and https://docs.unity.com/en-us/iap/privacy-and-consent/overview), for in-app purchase infrastructure, order reconciliation, and purchase telemetry/diagnostics.
      - Backblaze (B2), to store private database backups and the separate minimal deletion records used during recovery.
    after:
      - >-
        The hosting, email (Amazon SES), and backup (Backblaze B2) providers process data only on behalf of WoDue to deliver their infrastructure services. Apple operates App Store purchases and push notifications under its own terms. Depending on the feature and data type, Unity may act either as a service provider (processor) on behalf of the developer or as an independent controller under its own privacy policy for purposes such as security, fraud prevention, billing, and SDK analytics or service improvement.
  - title: Security
    paragraphs:
      - >-
        The app talks to the server over an encrypted (HTTPS) connection. Access to the server and its backups is limited to the developer. Backups are stored privately. No system is perfectly secure, but we work to protect your data.
  - title: Keeping and deleting data
    paragraphs:
      - >-
        Account data is kept while your account exists. You can request deletion in Ayarlar › Hesabım › Hesabı sil (Settings › My Account › Delete account). While a deletion request is being completed, access to that account is restricted. If the process cannot finish safely, it remains pending until it can be retried.
      - >-
        Once deletion is complete, your email link and account recovery records, sign-in sessions, friends, invites, notification tokens, display name, avatar and friend code are removed. Your personal match history is removed and open matches are closed. Other players can still see shared match results and league records under “Eski oyuncu” (former player), without your former name or avatar.
      - >-
        Purchase, bonus, league and shared match records may remain linked to a closed player ID to preserve transaction integrity and other players’ records. These identifiers are not the same as fully anonymous data. We keep a separate minimal deletion record, including the player ID and deletion time, to prevent an account from being restored from an older backup. This record has no automatic expiry and is kept for recovery safeguards.
      - >-
        Scheduled database backups are normally removed after 30 days. Cleanup is deferred if a recent verified backup is unavailable, so that period can be longer. Manual, pre-release and verification backups are managed separately and are not covered by this automatic 30-day cleanup. Backups are not edited individually after account deletion; recovery safeguards reapply completed deletions before a restored database is used.
      - >-
        Server and edge error logs rotate by file size (3 × 10 MB rolling files) rather than a guaranteed time-based expiry, so how long a technical log entry remains before being overwritten depends on traffic and error volume. Account deletion does not individually purge already-written technical log lines or existing backup files. Unity’s official IAP privacy documentation states that Unity retains its service logs for up to 90 days; that period describes Unity’s own provider policy and is not a guarantee that all game data expires after 90 days.
      - >-
        To ask about retained first-party records, request removal, or submit an access or deletion request regarding Unity IAP SDK data, email {email}. Where Unity acts as a processor on behalf of the developer, the developer submits the relevant instruction to Unity support using the available identifiers and transaction context; automatic or immediate erasure on Unity’s systems is not guaranteed. For data that Unity processes as an independent controller, you can also submit requests directly to Unity support under Unity’s privacy policy (https://unity.com/legal/game-player-and-app-user-privacy-policy).
  - title: Signing out and guest accounts
    paragraphs:
      - >-
        Signing out does not delete your account on the server. You can return to it by signing in with the same email address. A guest account has to be linked to an email address before you can sign out.
      - >-
        If you delete the app or change devices without linking an email, you may lose access to your guest account. When you switch from a guest account to an existing linked account, the guest’s progress is not merged into it.
  - title: Children
    paragraphs:
      - >-
        WoDue is not designed specifically for children.
  - title: Changes
    paragraphs:
      - >-
        When this policy changes, the date at the top of this page is updated.
  - title: Contact
    paragraphs:
      - >-
        WoDue is developed by Kadir Kasim. For privacy questions, email {email}.
---
