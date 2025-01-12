const SPOTIFY_BASE_URL = "https://api.spotify.com/v1";

// Função para lidar com a resposta da API do Spotify
async function handleResponse(response) {
    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`API request failed with status ${response.status}: ${errorMessage}`);
    }
    return response.json();
}

// Função para obter o token de acesso do Spotify
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

// Função para buscar um artista pelo nome
async function searchArtist(apiBaseUrl, token, artistName) {
    const response = await fetch(`${apiBaseUrl}/search?q=${encodeURIComponent(artistName)}&type=artist`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return handleResponse(response);
}

// Função para buscar as faixas mais populares de um artista
async function fetchTopTracks(apiBaseUrl, token, artistId) {
    const response = await fetch(`${apiBaseUrl}/artists/${artistId}/top-tracks?market=US`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return handleResponse(response);
}

// Exportando apenas as funções de requisição, para serem usadas na store
export {
    getSpotifyAccessToken,
    searchArtist,
    fetchTopTracks
};
