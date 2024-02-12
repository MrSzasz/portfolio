function App() {
  // Redirect to new portfolio
  setTimeout(() => {
    window.location.href = "https://lugo-tomas-portfolio.vercel.app/";
  }, 3000);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen animate-pulse">
      <h1>Hi! You're being redirected to the new portfolio...</h1>
      <h2>Please wait...</h2>
    </div>
  );
}

export default App;
