import './sass/main.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Routes>
                <Route element={<Navigation/>}>

                    <Route index
                           element={<>
                               <Main/>
                               <Footer/>
                           </>}
                    />
                    <Route path={'/item'} element={<>
                        <Main/>
                    </>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
