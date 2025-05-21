export interface PropsNavbar {
  drawerWidth: number;
  window?: () => Window;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isClosing: boolean;
  setIsClosing: React.Dispatch<React.SetStateAction<boolean>>;
  handleDrawerToggle: () => void;
}
