import SidebarContainer from "../PageElements/Home/Sidebar/sidebar-container";
import Header from "../PageElements/Home/Universal/header";

import FriendRecs from "../PageElements/Home/HomeElements/friendRecs";
import UserProfileButton from "../Components/Universal/UserProfileButton";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-y-hidden">
            {/*Main Page Container*/}
            <div>
                {/*Header Section*/}
                <Header/>
            </div>

            <div className="flex flex-grow">
                {/*Main Body Sections*/}

                <div className="bg-gray-900 w-3/4 flex flex-grow">
                    {/*Left Column Section*/}
                    <ul className="w-full p-5 items-center text-center">
                        <FriendRecs/>
                        <UserProfileButton 
                            user_id={0}
                            className_image="w-20 h-20 rounded-full"
                            className_text="text-sm text-gray-300 font-medium"
                        />
                    </ul>
                </div>

                <div className="w-1/4 bg-gray-700 p-4">
                    {/*Right Column Section*/}
                    <SidebarContainer/>
                </div>
            </div>
        </div>
    );
}

export default Home;
