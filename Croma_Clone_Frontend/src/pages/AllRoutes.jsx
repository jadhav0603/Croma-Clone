import {Routes, Route} from "react-router-dom"
import Home from "./Home.jsx";
import BankOffersPage from "./BankOffersPage.jsx";
import FetchedResults from "./FetchedResults.jsx"
import SelectedProduct from "./SelectedProduct.jsx"
import LoginModal from "../components/LoginModal.jsx";
import Carts from "./Carts.jsx"
import Payment from "./Payment.jsx";
import SearchedData from "./SearchedData.jsx";

function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BankOffersPage" element={<BankOffersPage />} />
            <Route path="/FetchedResults" element={<FetchedResults />} />
            <Route path="/SelectedProduct" element={<SelectedProduct/>} />
            <Route path="/Carts" element={<Carts />} />
            <Route path="/loginModal" element={<LoginModal false/>} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/seachedData" element={<SearchedData />} />
        </Routes>
    )
}

export default AllRoutes