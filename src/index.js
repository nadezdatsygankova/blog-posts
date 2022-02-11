import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './img/first.jpg'
import profile2 from './img/second.jpg'
import profile3 from './img/third.jpg'
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return (
        <div className='ui comments'>
            <UserCard>
                Hi. I live in Toronto
            </UserCard>
            <UserCard>
                <SingleComment name='Alex'
                    date='Today at 5 P.M.'
                    text='it is amazing'
                    picture={profile1} />
            </UserCard>
            <UserCard>
                <SingleComment name='Jack'
                    date='Today at 6 P.M.'
                    text='Great job'
                    picture={profile2} />
            </UserCard>
            <UserCard>
                <SingleComment name='Sarah'
                    date='Today at 7 P.M.'
                    text='Thanks...'
                    picture={profile3} />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,

    document.querySelector('#root')
)