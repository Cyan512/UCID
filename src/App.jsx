import { Navigate, Route, Routes } from "react-router-dom";
import Layout from '@components/templates/Layout'
import Home from '@components/pages/Home'
import About from '@components/pages/About'
import Events from '@components/pages/Events'
import Contact from '@components/pages/Contact'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='home' element={<Navigate to='/' replace />} />
                <Route path='about' element={<About />} />
                <Route path='events' element={<Events />} />
                <Route path='contact' element={<Contact />} />
            </Route>
        </Routes>
    )
}
export default App;
