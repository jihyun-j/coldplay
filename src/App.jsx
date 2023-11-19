import "reset.css";
import GlobalStyle from "components/GlobalStyle";
import Router from "shared/Router";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Router />
    </div>
  );
}

export default App;
