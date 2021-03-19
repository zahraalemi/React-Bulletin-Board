import BulletinBoard from './BulletinBoard';

const ReactPost = () => {
    let reactQuestion = [
        {
          question: "Vad är tre fördelar med att använda React?" ,
          answer: "React, of course!",
          id: 0
        },
        {
            question: "Vad är tre nackdelar med att använda React?" ,
            answer: "React2",
            id: 1
        },
        {
            question: "Vad är tre skillnader mellan React och Angular?" ,
            answer: "React3",
            id: 2
          },
          {
            question: "Vad är tre bibliotek man kan använda med React?" ,
            answer: "React4",
            id: 3
          }
    ];

    
    
    return(
        <>
            <div className="BulletinBoard">
                <div className="frame">
                    {reactQuestion.map((item, i) => {
                    return (
                        <BulletinBoard {...item} key={i} />
                    );
                    
                    })
                    }
                </div>
            </div>
        </>
    );
}
export default ReactPost;