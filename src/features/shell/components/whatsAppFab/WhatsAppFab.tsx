import { useTranslation } from "react-i18next";
import { ChatBubbleIcon } from "@assets/icons";
import { WhatsAppFabElement } from "./WhatsAppFab.elements";

export const WhatsAppFab = () => {
  const { t } = useTranslation("common");

  return (
    <WhatsAppFabElement
      type="button"
      aria-label={t("whatsapp.aria")}
      title={t("whatsapp.aria")}
    >
      <ChatBubbleIcon aria-hidden />
    </WhatsAppFabElement>
  );
};
