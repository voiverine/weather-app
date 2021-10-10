import { toast } from "react-toastify";

type ShowToast = (
  message: string | Error | null,
  messageType?: "error" | "info" | "success" | "warning"
) => void;

export const showToast: ShowToast = (message, messageType = "error") => {
  if (typeof message === "string") {
    toast(message, { type: messageType });
  }
  if (typeof message === "object" && "message" in (message as Error)) {
    toast(message?.message, { type: messageType });
  }
  if (!message) {
    toast("Unidentified error");
  }
};
