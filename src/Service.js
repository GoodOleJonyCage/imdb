
export const LoadSearchAll = (setvm) => {

    fetch('https://imdb-api.com/en/API/SearchAll/k_ioyk5a4c/king')
    .then(response => response.json())
    .then(data => 
        //console.log(data)
        setvm(
                {
                    searchType	 :	data.searchType ,
                    expression	 :	data.expression,
                    errorMessage :	data.errorMessage , 
                    results      :  data.results
                }
            )
    );
}