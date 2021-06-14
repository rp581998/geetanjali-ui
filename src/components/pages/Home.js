import React,{useEffect} from 'react';
// import axios from 'axios';

const Home = () => {

//    const [users, setUser] = useState([]);
   
   useEffect(() => {
       console.log("HI Rajan");
   },[]);




    return (
        <div className="container">
            <div className='py-4'>
                <h1>Home page</h1>
                <p className="lead">
                Emmet is great for that. With it installed in the 
                code editor you are using, you can type “lorem” and then tab and it will 
                expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! 
                You can control how much you get, place it within HTML 
                structure as it expands, and get different bits of it in repeated elements.
                </p>
                <p className="lead">
                Emmet is great for that. With it installed in the 
                code editor you are using, you can type “lorem” and then tab and it will 
                expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! 
                You can control how much you get, place it within HTML 
                structure as it expands, and get different bits of it in repeated elements.
                </p>
                <p className="lead">
                Emmet is great for that. With it installed in the 
                code editor you are using, you can type “lorem” and then tab and it will 
                expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! 
                You can control how much you get, place it within HTML 
                structure as it expands, and get different bits of it in repeated elements.
                </p>
                <p className="lead">
                Emmet is great for that. With it installed in the 
                code editor you are using, you can type “lorem” and then tab and it will 
                expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! 
                You can control how much you get, place it within HTML 
                structure as it expands, and get different bits of it in repeated elements.
                </p>
            </div>
        </div>
    );
};

export default Home;