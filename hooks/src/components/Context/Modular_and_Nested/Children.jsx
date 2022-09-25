import { useTheme, updateTheme } from "./ThemeProvider";
export const Children = () => {
  const theme = useTheme();
  const toggle = updateTheme();
  return (
    <>
      <p>Current theme is {theme}</p>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};
