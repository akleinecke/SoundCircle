import "./User.css";
import Header from "../Components/Universal/header";
import UserImage from "../Components/UserPage/UserIcon";
import AlbumsBox from "../Components/Sidebar/album-sidebar";
import ArtistsBox from "../Components/Sidebar/artist-sidebar";
import GenresBox from "../Components/Sidebar/genres-sidebar";
import { useState } from "react";

const UserPage = () => {
    const username = "WheresTheBeat16"; // or get it from state/props
    const [activeTab, setActiveTab] = useState("Taste"); // State to track active tab

    // Function to render content based on selected tab
    const renderTabContent = () => {
        switch(activeTab){
            case "Taste":
                return (
                    <div>
                        <div className="ArtistsBoxContainer">
                            <ArtistsBox/>
                        </div>
                        <div className="Genres-Container">
                            <GenresBox/>
                        </div>
                        <div className="Albums-Container">
                            <AlbumsBox/>
                        </div>
                    </div>
                    );
            default:
                return <div className="tab-content"></div>; 
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Main Page Container */}
            <Header />
            
            {/* Navigation Bar */}
            <nav className="nav-bar">
                {["Taste", "Post", "Likes", "Following"].map((tab) => (
                    <button
                        key={tab}
                        className={`nav-button ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </nav>

            <div className="flex flex-grow">
                <div className="bg-gray-900 w-3/4 mt-100">
                    <UserImage username={username} />
                    <p className="UserName">{username}</p>
                    
                    {/* Render tab content */}
                    {renderTabContent()}
                </div>
                <div className="w-1/4 bg-gray-700 flex flex-grow"></div>
            </div>
        </div>
    );
};

export default UserPage;
