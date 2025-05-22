import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "./feature/home/Home"
import { TwoSum } from "./feature/two-sum/TwoSum"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/two-sum" element={<TwoSum />}></Route>
        </Routes>
    )
}

export default AppRoutes