import React, { useState, useEffect } from "react";

const InstagramFeed = ({ token }) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchInstagramPost = async () => {
            try {
                // Fetch media IDs and types
                const url = `https://instagram.com{token}`;
                const data = await fetch(url);
                const feed = await data.json();
                setPhotos(feed.data || []);
            } catch (err) {
                console.error('Fetch error:', err);
            }
        };
        fetchInstagramPost();
    }, [token]);

    return (
        <div className="instagram-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {photos.map(photo => (
            <img key={photo.id} src={photo.media_url} alt={photo.caption} style={{ width: '100%' }} />
        ))}
        </div>
  );
};

export default InstagramFeed;