import Widget from "./components/MainWidget/Widget";
import "./App.css";
import CreditAgreementsProvider from "./providers/CreditAgreementsProvider";

function App() {
  return (
    <CreditAgreementsProvider>
      <div className="App">
        <Widget />
      </div>
    </CreditAgreementsProvider>
  );
}

export default App;
