import "@/App.css";

function App() {
  return (
    <iframe
      data-testid="home-page-frame"
      src="/home.html"
      title="Home"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
        display: "block",
      }}
    />
  );
}

export default App;
