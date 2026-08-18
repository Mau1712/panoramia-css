import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import type { AppLanguage } from "@app/i18n";
import { CloseIcon, MenuIcon } from "@assets/icons";
import panoramiaLogo from "@assets/icons/Panoramia-Capital.webp";
import { OffCanvas } from "@shared/ui/overlays/offCanvas/OffCanvas";
import { navItems } from "../../data";
import {
  CloseButtonElement,
  DesktopNavElement,
  HeaderActionsElement,
  LanguageButtonElement,
  LanguageSwitchElement,
  LanguageThumbElement,
  LogoImageElement,
  LogoLinkElement,
  MenuButtonElement,
  MobileMenuHeaderElement,
  MobileNavLinkElement,
  MobileNavListElement,
  NavIndicatorElement,
  NavLinkElement,
  NavListElement,
  SiteHeaderElement,
} from "./SiteHeader.elements";

const getActiveNavIndex = (pathname: string) =>
  navItems.findIndex((item) =>
    item.path === "/" ? pathname === "/" : pathname.startsWith(item.path),
  );

export const SiteHeader = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  const currentLanguage = (i18n.resolvedLanguage ?? i18n.language).slice(
    0,
    2,
  ) as AppLanguage;
  const languageIndex = currentLanguage === "es" ? 1 : 0;

  const handleLanguageChange = (language: AppLanguage) => {
    void i18n.changeLanguage(language);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = getActiveNavIndex(pathname);
      const nav = navRef.current;
      const activeLink = linkRefs.current[activeIndex];

      if (!nav || !activeLink || activeIndex < 0) {
        setIndicator((current) => ({ ...current, ready: false }));
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setIndicator({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        ready: true,
      });
    };

    updateIndicator();

    const resizeObserver = new ResizeObserver(updateIndicator);
    if (navRef.current) {
      resizeObserver.observe(navRef.current);
    }

    window.addEventListener("resize", updateIndicator);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [pathname, i18n.language, t]);

  return (
    <SiteHeaderElement data-site-header>
      <LogoLinkElement to="/" aria-label={t("brand.fullName")}>
        <LogoImageElement src={panoramiaLogo} alt={t("brand.fullName")} />
      </LogoLinkElement>

      <HeaderActionsElement>
        <DesktopNavElement>
          <NavListElement ref={navRef} aria-label={t("nav.mainAria")}>
            {navItems.map((item, index) => (
              <NavLinkElement
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                ref={(element) => {
                  linkRefs.current[index] = element;
                }}
              >
                {t(item.labelKey)}
              </NavLinkElement>
            ))}
            <NavIndicatorElement
              $left={indicator.left}
              $width={indicator.width}
              $ready={indicator.ready}
            />
          </NavListElement>
        </DesktopNavElement>

        <LanguageSwitchElement aria-label={t("language.switchAria")}>
          <LanguageThumbElement $index={languageIndex} />
          <LanguageButtonElement
            type="button"
            $active={languageIndex === 0}
            onClick={() => handleLanguageChange("en")}
          >
            {t("language.en")}
          </LanguageButtonElement>
          <LanguageButtonElement
            type="button"
            $active={languageIndex === 1}
            onClick={() => handleLanguageChange("es")}
          >
            {t("language.es")}
          </LanguageButtonElement>
        </LanguageSwitchElement>

        <MenuButtonElement
          type="button"
          aria-label={t("nav.openMenuAria")}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon aria-hidden />
        </MenuButtonElement>
      </HeaderActionsElement>

      <OffCanvas
        open={menuOpen}
        onClose={handleCloseMenu}
        side="left"
        aria-label={t("nav.mobileMenuAria")}
        closeAriaLabel={t("nav.closeMenuAria")}
      >
        <MobileMenuHeaderElement>
          <LogoLinkElement to="/" aria-label={t("brand.fullName")} onClick={handleCloseMenu}>
            <LogoImageElement src={panoramiaLogo} alt={t("brand.fullName")} />
          </LogoLinkElement>
          <CloseButtonElement
            type="button"
            aria-label={t("nav.closeMenuAria")}
            onClick={handleCloseMenu}
          >
            <CloseIcon aria-hidden />
          </CloseButtonElement>
        </MobileMenuHeaderElement>

        <MobileNavListElement aria-label={t("nav.mainAria")}>
          {navItems.map((item) => (
            <MobileNavLinkElement
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={handleCloseMenu}
            >
              {t(item.labelKey)}
            </MobileNavLinkElement>
          ))}
        </MobileNavListElement>
      </OffCanvas>
    </SiteHeaderElement>
  );
};
