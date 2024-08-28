import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Dashboard from "./pages/Dashboard";
import CreateFeedbackForm from "./pages/CreateFeedbackForm";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100">
        <ErrorBoundary>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/create-form/:formName"
                element={<CreateFeedbackForm />}
              />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
