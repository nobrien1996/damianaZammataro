const authUrl = `https://tiktok.com{CLIENT_KEY}&scope=user.info.basic,video.list&response_type=code&redirect_uri=${REDIRECT_URI}`;
window.location.href = authUrl;