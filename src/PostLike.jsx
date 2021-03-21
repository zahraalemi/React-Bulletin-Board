import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsDown } from "@fortawesome/free-solid-svg-icons";



const PostLike = () => {
    const [likeBtn, setLikeBtn] = useState(false);

  const toggleLike = () => {
    setLikeBtn(!likeBtn);
  };
    return(
        <div className="like-box">
            {likeBtn ? (
              <h6>You Like it</h6> 
              ): null}
             <button className="like-btn" onClick={toggleLike}>
                 {likeBtn ? <FontAwesomeIcon className="dis-like" icon={faThumbsDown} /> : <FontAwesomeIcon className="like" icon={faHeart} />}
            </button>
             
        </div>
        
    );
}
export default PostLike;