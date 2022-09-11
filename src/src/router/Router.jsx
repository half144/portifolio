import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Contact from '../pages/Contact/Contact'
import Projects from '../pages/Projects/Projects'
import About from '../pages/About/About'
import Project from "../pages/Project/Project"
import NotFound from "../pages/NotFound/NotFound"
import Stacks from "../pages/Stacks/Stacks"
import Stack from "../pages/Stack/Stack"

const Router = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/stacks' element={<Stacks />} />
                <Route path='/stack/:name' element={<Stack />} />
                <Route path='/project/:id' element={<Project />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </>

    )

}
export default Router