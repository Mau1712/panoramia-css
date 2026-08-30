import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getLocaleFromPathname, localizePath } from "@app/i18n";
import { InstagramIcon } from "@assets/icons";
import panoramiaLogo from "@assets/logo-reverse.png";
import { footerEmail, footerInstagramUrl, footerPhones, navItems } from "../../data";
import {
  SiteFooterBottomElement,
  SiteFooterBrandElement,
  SiteFooterColumnElement,
  SiteFooterElement,
  SiteFooterGridElement,
  SiteFooterHeadingElement,
  SiteFooterInnerElement,
  SiteFooterLinkElement,
  SiteFooterLogoElement,
  SiteFooterNavLinkElement,
  SiteFooterPhoneListElement,
  SiteFooterRightsElement,
  SiteFooterSitemapElement,
  SiteFooterSocialElement,
  SiteFooterSocialLinkElement,
  SiteFooterTextElement,
} from "./SiteFooter.elements";

export const SiteFooter = () => {
  const { t } = useTranslation("common");
  const { pathname } = useLocation();
  const locale = getLocaleFromPathname(pathname);
  const year = new Date().getFullYear();

  return (
    <SiteFooterElement aria-label={t("footer.aria")}>
      <SiteFooterInnerElement>
        <SiteFooterBrandElement
          to={localizePath("/", locale)}
          aria-label={t("brand.fullName")}
        >
          <SiteFooterLogoElement
            src={panoramiaLogo}
            alt={t("brand.fullName")}
          />
        </SiteFooterBrandElement>

        <SiteFooterGridElement>
          <SiteFooterColumnElement>
            <SiteFooterHeadingElement>
              {t("footer.address")}
            </SiteFooterHeadingElement>
            <SiteFooterTextElement>
              {t("footer.addressValue")}
            </SiteFooterTextElement>
          </SiteFooterColumnElement>

          <SiteFooterColumnElement>
            <SiteFooterHeadingElement>
              {t("footer.email")}
            </SiteFooterHeadingElement>
            <SiteFooterLinkElement href={`mailto:${footerEmail}`}>
              {footerEmail}
            </SiteFooterLinkElement>
          </SiteFooterColumnElement>

          <SiteFooterColumnElement>
            <SiteFooterHeadingElement>
              {t("footer.phone")}
            </SiteFooterHeadingElement>
            <SiteFooterPhoneListElement>
              {footerPhones.map((phone) => (
                <SiteFooterLinkElement key={phone.href} href={phone.href}>
                  {phone.display}
                </SiteFooterLinkElement>
              ))}
            </SiteFooterPhoneListElement>
          </SiteFooterColumnElement>

          <SiteFooterColumnElement>
            <SiteFooterHeadingElement>
              {t("footer.sitemap")}
            </SiteFooterHeadingElement>
            <SiteFooterSitemapElement aria-label={t("footer.sitemap")}>
              {navItems.map((item) => (
                <SiteFooterNavLinkElement
                  key={item.path}
                  to={localizePath(item.path, locale)}
                >
                  {t(item.labelKey)}
                </SiteFooterNavLinkElement>
              ))}
            </SiteFooterSitemapElement>
          </SiteFooterColumnElement>
        </SiteFooterGridElement>

        <SiteFooterBottomElement>
          <SiteFooterRightsElement>
            {t("footer.rights", { year })}
          </SiteFooterRightsElement>
          <SiteFooterSocialElement>
            <SiteFooterSocialLinkElement
              href={footerInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("footer.instagramAria")}
            >
              <InstagramIcon aria-hidden />
              panoramia.capital
            </SiteFooterSocialLinkElement>
          </SiteFooterSocialElement>
        </SiteFooterBottomElement>
      </SiteFooterInnerElement>
    </SiteFooterElement>
  );
};
