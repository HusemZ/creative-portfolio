import React from 'react';
import Image from "next/image";

const Page = () => {

    return (
        <div className="fc container">
            <div className='grid-cols-2'>
                <div>
                    <h2>Hi</h2>
                    <p className='mb-5'>I am proud to share my achievements:</p>
                    <p className='mb-5'>
                        I redesigned the iGoods app which became the number one grocery delivery app in Russia. My redesign increased the conversion rate for adding items
                        to the cart by <span className='text-primary'>70%</span>.
                    </p>
                    <p className='mb-5'>
                        I also worked on the ASO, which resulted in an increase in conversion from <span className='text-primary'>40.3% to 58.8%</span> with 300K MAU.
                    </p>
                    <p>
                        Additionally, I created the <span className='text-primary'>Memo</span> app for learning languages through memes.
                        I also worked at Cuberto agency, which was named the best agency in the world by <span className='text-primary'>Awwwards</span>.
                    </p>
                </div>
                <div style={{width: '250px', position: 'relative', margin: '0 auto'}}>
                    <Image src='/finger.png' alt='Hey' fill />
                </div>
            </div>
        </div>
    );
};

export default Page;
