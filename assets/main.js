const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCsQOkbo_av-VcC-hbrM5R1Q&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33130de452msh2a10a56fb15d8b7p13b0bcjsneee9175beee6',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
async function fetchData(urlAPI){
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

// funcion que se ejecuta a si misma 
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${ videos.items.map( video => `
        <div class="group relative">
            <div
            class="w-full bg-gray-50 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${ video.snippet.thumbnails.high.url}" alt="${ video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-50">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>        
        `).slice(0, 8).join('')}        
       `;
       content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();