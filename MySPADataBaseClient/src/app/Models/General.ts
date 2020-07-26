export interface Theme {
  name: string;
  properties: any;
}

export interface IPage {
  titleKey: string;
  icon: any;
  url: string;
  canView: boolean;
}

export const AppPages: IPage[] = [
  { titleKey: 'Home', icon: 'home', url: 'home', canView: true},
  { titleKey: 'Reports', icon: 'report', url: 'reports', canView: true},
  { titleKey: 'Settings', icon: 'settings', url: 'settings', canView: true}
];
