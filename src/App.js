import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/Auth/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ExampleComponent from './pages/ExampleComponent';
import Location from './pages/Location';
import { PredictionProvider } from './context/PredictionContext';
import Predict from './pages/Predict';
import { SearchProvider } from './components/Map/SearchContext';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import { LatLngProvider } from '../src/components/Location/LatLngContext'; // Context import

const App = () => {
    return (
        <AuthProvider>
            <LatLngProvider>
                <PredictionProvider>
                    <SearchProvider>
                        <Router>
                            {/* <Header /> */}
                            <Routes>
                                <Route path="/" element={<Navigate to="/home" />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<Signup />} />
                                <Route path="/example" element={<ExampleComponent />} />
                                <Route path="/location" element={<Location />} />
                                <Route path="/location/predict" element={<Predict />} />
                                {/* 다른 라우트 추가 */}
                            </Routes>
                            {/* <Map /> */}
                        </Router>
                    </SearchProvider>
                </PredictionProvider>
            </LatLngProvider>
        </AuthProvider>
    );
};

export default App;

