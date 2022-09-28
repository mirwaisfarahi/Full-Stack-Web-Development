import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Profile from "./pages/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const AppContext = createContext();

const ReactRouter = () => {

    const [username, setUsername] = useState("Mirwais");
    const [userAge, setUserAge] = useState(29);

    const client = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // default is true, if false then the API data will not be updated on window change
          },
        },
      });

    return (
        <div className="App">
            <QueryClientProvider client={client}>
                <AppContext.Provider value={{ userAge, setUserAge }}>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home username={username} />} />
                            {/* Here we passed props from parent to child then to grandchild to setUsername. But we can use state managemnet concept as well
                        In state management we can pass props using UseContext Hook. Lets do it with age prop */}
                            <Route path="/profile" element={<Profile username={username} setUsername={setUsername} />} />
                            <Route path="/about" element={<About />} />
                            <Route path="*" element={<h3>Page Not Found</h3>} />
                        </Routes>
                    </Router>
                </AppContext.Provider>
            </QueryClientProvider>
        </div>
    )
};

export default ReactRouter;