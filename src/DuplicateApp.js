import {Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Dfault from "./Components/Dfault";
import SignUpForm2 from "./Components/SignupForm2";
import LoginForm2 from "./Components/LoginForm2";
import Agartala from "./Components/Agartala";
import Book from "./Components/Book";
import Blog from "./Components/Blog";
import BlogList from "./Components/List";
function DuplicateApp() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='reactKangarooms' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path="ContactUs" element={<ContactUs/>}/>
            <Route path="Dfault" element={<Dfault/>}/>
            <Route path="parking1" element={<Home/>}/>
            </Routes>  
            <Routes>
            <Route path="Agartala" element={<Agartala/>}/>
            <Route path="SignUpForm2" element={<SignUpForm2/>}/>
            <Route path="LoginForm2" element={<LoginForm2/>}/>
            <Route path="Book" element={<Book/>}/>
            <Route path="Blog" element={<Blog/>}/>
            <Route path="BlogList" element={<BlogList/>}/>
        </Routes>
        </>
    )
}
export default DuplicateApp;