import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const SiteHeaderElement = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.color.background.primary};
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(5)}`};
  gap: ${({ theme }) => theme.spacing(4)};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.soft};
  box-shadow: ${({ theme }) => theme.shadows.small};
  z-index: ${({ theme }) => theme.zIndex.header};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing(2)} max(${theme.spacing(3)}, env(safe-area-inset-right, 0px)) ${theme.spacing(2)} max(${theme.spacing(3)}, env(safe-area-inset-left, 0px))`};
    gap: ${({ theme }) => theme.spacing(2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(2)} max(${theme.spacing(2.5)}, env(safe-area-inset-right, 0px)) ${theme.spacing(2)} max(${theme.spacing(2.5)}, env(safe-area-inset-left, 0px))`};
  }
`;

export const LogoLinkElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  line-height: 1;
`;

export const LogoImageElement = styled.img`
  display: block;
  width: auto;
  height: ${({ theme }) => theme.spacing(4.5)};
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    height: ${({ theme }) => theme.spacing(4)};
  }
`;

export const HeaderActionsElement = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    gap: ${({ theme }) => theme.spacing(1.5)};
  }
`;

export const DesktopNavElement = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    display: none;
  }
`;

export const NavListElement = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(4)};
`;

interface NavIndicatorElementProps {
  $left: number;
  $width: number;
  $ready: boolean;
}

export const NavIndicatorElement = styled.span<NavIndicatorElementProps>`
  position: absolute;
  top: 100%;
  left: 0;
  height: 2px;
  width: ${({ $width }) => `${$width}px`};
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  background: ${({ theme }) => theme.color.text.primary};
  border-radius: ${({ theme }) => theme.radii.pill};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transform: translateX(${({ $left }) => `${$left}px`});
  opacity: ${({ $ready }) => ($ready ? 1 : 0)};
  transition:
    transform ${({ theme }) => theme.transitions.normal},
    width ${({ theme }) => theme.transitions.normal},
    opacity ${({ theme }) => theme.transitions.fast};
  pointer-events: none;
`;

export const NavLinkElement = styled(NavLink)`
  position: relative;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.7;
  }

  &.active {
    opacity: 1;
  }
`;

export const MenuButtonElement = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    display: inline-flex;
  }
`;
export const MobileMenuHeaderElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.soft};
`;

export const MobileNavListElement = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(3)};
`;

export const MobileNavLinkElement = styled(NavLink)`
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
  padding: ${({ theme }) => `${theme.spacing(1.5)} 0`};
  border-bottom: 2px solid transparent;
  transition:
    opacity ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.7;
  }

  &.active {
    border-bottom-color: ${({ theme }) => theme.color.text.primary};
  }
`;

export const CloseButtonElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(5)};
  height: ${({ theme }) => theme.spacing(5)};
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.7;
  }
`;

export const LanguageSwitchElement = styled.div`
  position: relative;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(0.5)};
  background: ${({ theme }) => theme.color.background.secondary};
  border: 1px solid ${({ theme }) => theme.color.border.soft};
  border-radius: ${({ theme }) => theme.radii.pill};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

interface LanguageThumbElementProps {
  $index: 0 | 1;
}

export const LanguageThumbElement = styled.span<LanguageThumbElementProps>`
  position: absolute;
  top: ${({ theme }) => theme.spacing(0.5)};
  bottom: ${({ theme }) => theme.spacing(0.5)};
  left: ${({ theme }) => theme.spacing(0.5)};
  width: calc(50% - ${({ theme }) => theme.spacing(0.5)});
  background: ${({ theme }) => theme.color.text.primary};
  border-radius: ${({ theme }) => theme.radii.pill};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transform: translateX(${({ $index }) => ($index === 0 ? "0%" : "100%")});
  transition:
    transform ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.fast};
  pointer-events: none;
`;

interface LanguageButtonElementProps {
  $active: boolean;
}

export const LanguageButtonElement = styled.button<LanguageButtonElementProps>`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(1.5)}`};
  color: ${({ theme, $active }) =>
    $active ? theme.color.background.primary : theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme, $active }) =>
    $active
      ? theme.typography.fontWeight.bold
      : theme.typography.fontWeight.medium};
  line-height: 1;
  transition: color ${({ theme }) => theme.transitions.normal};

  &:hover {
    color: ${({ theme, $active }) =>
      $active ? theme.color.background.primary : theme.color.text.primary};
  }
`;
