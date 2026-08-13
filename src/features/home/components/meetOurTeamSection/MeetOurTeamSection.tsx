import { useTranslation } from "react-i18next";
import panoramiaLogo from "@assets/icons/Panoramia-Capital.webp";
import { teamCoPrincipals, teamMembers } from "../../data";
import {
  TeamBottomElement,
  TeamBrandElement,
  TeamBrandImageElement,
  TeamEyebrowElement,
  TeamFeaturedElement,
  TeamFeaturedInnerElement,
  TeamInnerElement,
  TeamMemberIndexElement,
  TeamMemberItemElement,
  TeamMembersBlockElement,
  TeamMembersListElement,
  TeamPrincipalIndexElement,
  TeamPrincipalItemElement,
  TeamPrincipalNameElement,
  TeamPrincipalsElement,
  TeamSectionElement,
  TeamSubtitleElement,
  TeamTitleElement,
  TeamTitleRowElement,
  TeamTopElement,
} from "./MeetOurTeamSection.elements";

const formatIndex = (index: number) => String(index + 1).padStart(2, "0");

export const MeetOurTeamSection = () => {
  const { t } = useTranslation("common");

  return (
    <TeamSectionElement aria-label={t("pages.home.team.title")}>
      <TeamInnerElement>
        <TeamTopElement>
          <TeamTitleRowElement>
            <TeamTitleElement>{t("pages.home.team.title")}</TeamTitleElement>
            <TeamBrandElement aria-label={t("brand.fullName")}>
              <TeamBrandImageElement
                src={panoramiaLogo}
                alt={t("brand.fullName")}
              />
            </TeamBrandElement>
          </TeamTitleRowElement>
          <TeamSubtitleElement>
            {t("pages.home.team.subtitle")}
          </TeamSubtitleElement>
        </TeamTopElement>
      </TeamInnerElement>

      <TeamFeaturedElement>
        <TeamFeaturedInnerElement>
          <TeamEyebrowElement>
            {t("pages.home.team.coPrincipals")}
          </TeamEyebrowElement>
          <TeamPrincipalsElement>
            {teamCoPrincipals.map((member, index) => (
              <TeamPrincipalItemElement key={member.id} $index={index}>
                <TeamPrincipalIndexElement>
                  {formatIndex(index)}
                </TeamPrincipalIndexElement>
                <TeamPrincipalNameElement>
                  {member.name}
                </TeamPrincipalNameElement>
              </TeamPrincipalItemElement>
            ))}
          </TeamPrincipalsElement>
        </TeamFeaturedInnerElement>
      </TeamFeaturedElement>

      <TeamBottomElement>
        <TeamMembersBlockElement>
          <TeamEyebrowElement>{t("pages.home.team.members")}</TeamEyebrowElement>
          <TeamMembersListElement>
            {teamMembers.map((member, index) => (
              <TeamMemberItemElement key={member.id} $index={index}>
                <TeamMemberIndexElement>
                  {formatIndex(index)}
                </TeamMemberIndexElement>
                {member.name}
              </TeamMemberItemElement>
            ))}
          </TeamMembersListElement>
        </TeamMembersBlockElement>
      </TeamBottomElement>
    </TeamSectionElement>
  );
};
