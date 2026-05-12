import React, { useState, useEffect } from "react";


function TikTokProfile() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('/TT-backend/t-user-info.js')
            .then(res => res.json())
            .then(data => setUserData(data));
    }, []);

    if (!userData) return <p>Loading...</p>;

    return (
        <div>
            <img src={userData.avatar_url} alt="TikTok Profile" />
            <h3>{userData.display_name}</h3>
        </div>
    );
}

export default TikTokProfile;