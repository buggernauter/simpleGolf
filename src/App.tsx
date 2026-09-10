import { ThemeProvider } from "styled-components";

// import { DesktopNotice } from "./components/desktop-notice/desktop-notice";
import { useThemeMode } from "./hooks/useThemeMode";
import { StyledGlobalStyle } from "./global-style";
import { PracticeGreenPage } from "./pages/practice-green-page";
// import { RoundTrackerPage } from "./pages/round-tracker-page";
import { StyledAppLayout } from "./styles/layout";

export default function App() {
  const { theme } = useThemeMode();
  // const isPracticeGreenPage = window.location.pathname === "/ovningsgreen";

  return (
    <ThemeProvider theme={theme}>
      <StyledGlobalStyle />
      <StyledAppLayout>
        {/* {isPracticeGreenPage ? ( */}
        <PracticeGreenPage />
        {/* )  */}
        {/* : ( */}
        {/* <DesktopNotice> */}
        {/* <RoundTrackerPage /> */}
        {/* </DesktopNotice> */}
        {/* )} */}
      </StyledAppLayout>
    </ThemeProvider>
  );
}
