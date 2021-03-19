import PostLike from './PostLike';

const BulletinBoard = (props) => {
    
    return(
        <>
            <button className={"note" + (props.id % 2 == 0 ? " sticky1" : " sticky2")}>
                <div className='pin'></div>
                <div className='text'>
                    <h3>{props.question}</h3>
                    <h6>{props.answer}</h6>
                    <PostLike />
                </div>
                
            </button>
        </>
    );
}
export default BulletinBoard;