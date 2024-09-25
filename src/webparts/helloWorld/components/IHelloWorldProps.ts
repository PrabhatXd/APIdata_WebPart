import { DisplayMode } from "@microsoft/sp-core-library";

export interface IHelloWorldProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  title: string;
  displayMode: DisplayMode;
  updateProperty: (value: string) => void;
}
