import PostLike from './PostLike';

const BulletinBoard = (props) => {
   
    
    return(
        <>
            <button className={"note" + (props.id === 0 || props.id === 3 ? " sticky1" : " sticky2")}>
                <div className='pin'></div>
                <div className='text'>
                    <h3>{props.question}</h3>
                    <ul>
                      {props.answer.map((item,i)=>{
                        return <li key={i}>
                          <p><strong>{item.title}</strong><br/>
                          {item.description}</p>
                        </li>
                      })}
                    </ul>
                    <PostLike />
                </div>
                
            </button>
        </>
    );
}
export default BulletinBoard;