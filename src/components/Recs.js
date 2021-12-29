import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';

function QuoteCard({ keys, name, role, quote }) {
    console.log(keys, name, role, quote
    );
    return (
        <div className='quote-card'>
            <div className='quote'>{quote}</div>
            <Avatar className='avatar' />
            <h3 className='quote-name'>{name}</h3>
            <p className='role'>{role}</p>
        </div>
    )
}
export default function Recs() {
    return (
        <div id="recs">
            <QuoteCard keys="0" name="Alexander Gibson" role="Full Stack Developer" quote="I had the pleasure of working with Henry on several projects during our time together in the UC Berkeley Full-stack Developer program. Henry is an extremely well-rounded developer and can solve his way through any obstacle he encounters. His ability to communicate and walk anyone through a segment of code is second to none. Henry would be a great asset to any team!" />
            <QuoteCard keys="1" name="Anakin Trotter" role="Full Stack Developer at UCLA" quote="Henry always delivers clean and optimized code in a timely manner and he is a real pleasure to work with. Henry picks up new technologies quickly and is amazing at understanding complicated documentation. I recommend him without reservation." />
        </div>
    );
}