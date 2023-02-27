import { Header } from "./assets/components/Header";

export const App = ({ title }) => {
  return (
    <>
      <div className="content">
        <h1>{title}</h1>
        <Header />
      </div>
    </>
  );
};

export default App;
