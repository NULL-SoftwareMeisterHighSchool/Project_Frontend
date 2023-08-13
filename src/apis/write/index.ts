import axios from "axios";
import { WriteProps } from "./write.type";

const BASE_URL = `${import.meta.env.VITE_BASEURL}/articles`;

const WriteBoard = ({
    setdata,
    setTitle,
    setBlogContent
}:WriteProps
) => {
    axios.get(`${BASE_URL}/id`)
    .then(function(response) {
        setdata(response.data.articleType);
        setTitle(response.data.title);
        setBlogContent(response.data.body);
        console.log("성공");
    })
    .catch(function(error) {
        console.log("실패");
    });
}
 
export default WriteBoard;