import { useTranslation } from "react-i18next";
import { teamGroups } from "@features/aboutUs/data";
import { useInView } from "@features/aboutUs/hooks/useInView";
import {
  MeetOurTeamGroupElement,
  MeetOurTeamGroupTitleElement,
  MeetOurTeamGroupsElement,
  MeetOurTeamHeadingElement,
  MeetOurTeamInnerElement,
  MeetOurTeamListElement,
  MeetOurTeamMemberElement,
  MeetOurTeamSectionElement,
  MeetOurTeamStackElement,
  MeetOurTeamSubtitleElement,
  MeetOurTeamTitleElement,
} from "./MeetOurTeamSection.elements";

export const MeetOurTeamSection = () => {
  const { t, i18n } = useTranslation("common");
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.18,
  });

  return (
    <MeetOurTeamSectionElement
      key={i18n.language}
      aria-label={t("pages.aboutUs.meetOurTeam.title")}
    >
      <MeetOurTeamInnerElement>
        <MeetOurTeamStackElement ref={sectionRef} $visible={isInView}>
          <MeetOurTeamHeadingElement>
            <MeetOurTeamTitleElement>
              {t("pages.aboutUs.meetOurTeam.title")}
            </MeetOurTeamTitleElement>
            <MeetOurTeamSubtitleElement>
              {t("pages.aboutUs.meetOurTeam.subtitle")}
            </MeetOurTeamSubtitleElement>
          </MeetOurTeamHeadingElement>

          <MeetOurTeamGroupsElement>
            {teamGroups.map((group, index) => (
              <MeetOurTeamGroupElement
                key={group.id}
                $visible={isInView}
                $delayMs={120 + index * 100}
              >
                <MeetOurTeamGroupTitleElement>
                  {t(group.titleKey)}
                </MeetOurTeamGroupTitleElement>
                <MeetOurTeamListElement>
                  {group.members.map((member) => (
                    <MeetOurTeamMemberElement key={member}>
                      {member}
                    </MeetOurTeamMemberElement>
                  ))}
                </MeetOurTeamListElement>
              </MeetOurTeamGroupElement>
            ))}
          </MeetOurTeamGroupsElement>
        </MeetOurTeamStackElement>
      </MeetOurTeamInnerElement>
    </MeetOurTeamSectionElement>
  );
};
