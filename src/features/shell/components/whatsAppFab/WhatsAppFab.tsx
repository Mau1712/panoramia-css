import { useTranslation } from "react-i18next";
import { ChatBubbleIcon } from "@assets/icons";
import { whatsAppUrl } from "../../data";
import { WhatsAppFabElement } from "./WhatsAppFab.elements";

export const WhatsAppFab = () => {
  const { t } = useTranslation("common");

  return (
    <WhatsAppFabElement
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp.aria")}
      title={t("whatsapp.aria")}
    >
      <ChatBubbleIcon aria-hidden />
    </WhatsAppFabElement>
  );
};
