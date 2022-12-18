import "./App.css";

import Header from "./components/Header";
import Form from "./components/Form";
import TabBar from "./components/TabBar";
import EntryList from "./components/EntryList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="mainBody">
        <Header />
        <main>
          <Form />
          <TabBar />
          <EntryList />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
