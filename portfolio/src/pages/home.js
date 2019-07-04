import React from 'react';
import BackgroundImg from '../images/background1.jpg';
import styles from '../styles/home_styles.css';

export default props => {
   
    return (
        <div className="HomePage">

            <div className="BackgroundImg">
                <img src={BackgroundImg} style={styles.BackgroundImg} alt="BackgroundImg" />

                <h2>
                    <span>JIAYI ZHANG</span>
                    <hr
                        style={{
                            color: 'white',
                            backgroundColor: 'white',
                            height: 2,
                            width: 700
                        }}
                    />
                </h2>

                <h3>
                    <span>Software Engineer | Professional in Volleyball</span>
                </h3>
               
            </div>

           
        </div>
    )
}
