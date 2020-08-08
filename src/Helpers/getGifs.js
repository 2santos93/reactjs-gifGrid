export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=gQ6gT7G7XPbKifJa0f09SpOWkTt52c67&q=${encodeURI( category )}&limit=10`

    const request = await fetch(url);
    const {data} = await request.json();
    
    return data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    })
}