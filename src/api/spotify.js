const SPOTIFY_BASE_URL = "https://api.spotify.com/v1";

async function handleResponse(response) {
    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`API request failed with status ${response.status}: ${errorMessage}`);
    }
    return response.json();
}

async function getSpotifyAccessToken(clientId, clientSecret) {
    const tokenUrl = "https://accounts.spotify.com/api/token";
    const authHeader = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;

    try {
        const response = await fetch(tokenUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: authHeader,
            },
            body: "grant_type=client_credentials",
        });
        return handleResponse(response);
    } catch (error) {
        console.error("Error fetching Spotify access token:", error);
        throw error;
    }
}

async function getArtistId(apiBaseUrl, token, artistName) {
    try {
        const response = await fetch(`${apiBaseUrl}/search?q=${encodeURIComponent(artistName)}&type=artist`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await handleResponse(response);
        if (data.artists.items.length === 0) {
            throw new Error(`No artist found with name: ${artistName}`);
        }
        return data.artists.items[0].id;
    } catch (error) {
        console.error("Error fetching artist ID:", error);
        throw error;
    }
}

async function getTopTracks(apiBaseUrl, token, artistId) {
    try {
        const response = await fetch(`${apiBaseUrl}/artists/${artistId}/top-tracks?market=US`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await handleResponse(response);
        return data.tracks.slice(0, 3).map((track) => ({
            name: track.name,
            album: track.album.name,
            preview_url: track.preview_url,
            popularity: track.popularity,
            image_url: track.album.images[0].url, // Adiciona a imagem do álbum
        }));
    } catch (error) {
        console.error("Error fetching top tracks:", error);
        throw error;
    }
}


export async function getTop3Tracks(artistName) {
    const clientId = "84741557514b4c5d9f24d8e4fef08a61";
    const clientSecret = "a8c37f627ee04bdf8d92a25ccd73d34a";

    try {
        const tokenData = await getSpotifyAccessToken(clientId, clientSecret);
        const token = tokenData.access_token;
        const artistId = await getArtistId(SPOTIFY_BASE_URL, token, artistName);
        const topTracks = await getTopTracks(SPOTIFY_BASE_URL, token, artistId);
        return topTracks;
    } catch (error) {
        console.error(`Error fetching top 3 tracks for artist ${artistName}:`, error);
        throw error;
    }
}
