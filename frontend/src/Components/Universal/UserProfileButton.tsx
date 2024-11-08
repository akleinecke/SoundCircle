import { useNavigate } from "react-router-dom"

interface UserProfileButtonProps {
    className_image?: string;
    className_text?: string;
    user_id: number;
}

const UserProfileButton = ({ user_id, className_image, className_text }: UserProfileButtonProps) => {
    const navigate = useNavigate(); // Init navigation function
    const placeholderImage = "https://via.placeholder.com/150x150.png?text=Person"

    // Get information based on user_id

    // Navigate to page
    // Pass user_id to page
    const handleClick = () => {
        navigate("/User", {state: { user_id } });
    }

    return (
        <div>
            <button
                onClick={handleClick}>
                    <img
                        src={placeholderImage}
                        className={`${className_image}`}
                    />
            </button>
            <p className={`${className_text}`}>
                <button onClick={handleClick}>
                    USER
                </button>
            </p>
        </div>
    );
}

export default UserProfileButton;