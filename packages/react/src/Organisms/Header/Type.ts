import { NotificationType } from "../../molecules/Notification/Type";
import { MenuType } from "../../molecules/Menu/Type";
interface HeaderNotificationType {
  like?: NotificationType;
  cart?: NotificationType;
}

interface HeaderType {
  headerMenu: MenuType;
  navNotification?: HeaderNotificationType;
}

export type { HeaderType, HeaderNotificationType };
