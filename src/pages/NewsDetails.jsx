import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const NewsDetails = () => {

const {id} = useParams();

const [news,setNews] = useState(null);



useEffect(()=>{

const fetchNews = async()=>{

try{

const res = await axios.get(
`http://localhost:5000/api/news/${id}`
);

setNews(res.data);


}catch(err){

console.log(err);

}

};


fetchNews();


},[id]);



if(!news){

return <h1 className="text-center text-2xl mt-10">
Loading...
</h1>

}



return (

<div className="max-w-4xl mx-auto px-5 py-10">


<img

src={
news.image ||
"https://picsum.photos/900/500"
}

className="w-full h-[450px] object-cover rounded"

/>



<h1 className="text-4xl font-bold mt-6 text-blue-900">

{news.title}

</h1>



<p className="text-gray-500 mt-3">

{new Date(news.date).toLocaleDateString()}

</p>



<p className="mt-6 text-lg leading-8">

{news.content}

</p>


</div>

);


};


export default NewsDetails;