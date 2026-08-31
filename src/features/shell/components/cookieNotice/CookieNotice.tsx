import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { localizePath, useLocale } from "@app/i18n";
import {
  CookieNoticeActionsElement,
  CookieNoticeButtonElement,
  CookieNoticeCopyElement,
  CookieNoticeElement,
  CookieNoticeLinkElement,
  CookieNoticePanelElement,
} from "./CookieNotice.elements";

const COOKIE_CONSENT_KEY = "panoramia.cookieConsent";

export const CookieNotice = () => {
  const { t } = useTranslation("common");
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      setVisible(stored !== "accepted");
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    } catch {
      // Ignore storage failures; still dismiss for this session.
    }
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <CookieNoticeElement role="dialog" aria-label={t("cookies.aria")}>
      <CookieNoticePanelElement>
        <CookieNoticeCopyElement>
          {t("cookies.message")}{" "}
          <CookieNoticeLinkElement to={localizePath("/privacy", locale)}>
            {t("cookies.privacyLink")}
          </CookieNoticeLinkElement>
          .
        </CookieNoticeCopyElement>
        <CookieNoticeActionsElement>
          <CookieNoticeButtonElement type="button" onClick={handleAccept}>
            {t("cookies.accept")}
          </CookieNoticeButtonElement>
        </CookieNoticeActionsElement>
      </CookieNoticePanelElement>
    </CookieNoticeElement>
  );
};
