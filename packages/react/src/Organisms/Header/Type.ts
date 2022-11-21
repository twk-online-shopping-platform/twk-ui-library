import { NotificationIconType } from "../../molecules/Notification/Type";
import { MenuType } from "../../molecules/Menu/Type";
interface HeaderNotificationType {
  like?: NotificationIconType;
  cart?: NotificationIconType;
}

interface HeaderType {
  headerMenu: MenuType;
  navNotification?: HeaderNotificationType;
}

export type { HeaderType, HeaderNotificationType };
