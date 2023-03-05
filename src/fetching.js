import React from 'react'

class fetching{
    ENDPOINT="https://newsapi.org/v2/top-headlines/sources?apiKey=d493be58614040a0bf2ce1aa6f883002";
    async getAllNews()
    {
        const response=await axios.get(this.ENDPOINT)
        const myresponse=response.data;
    }
   
}

