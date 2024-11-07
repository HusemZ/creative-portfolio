import React from 'react';
import Image from 'next/image';
import Button from "@/components/ui/Button/Button";

const Page = () => {

    return (
        <div className='d-flex flex-column justify-evenly align-center vh-100'>
            <div className='text-center'>
                <Image className='avatar' src='/avatar.png' alt='placeholder' width={150} height={150}/>
                <h1>Hüsem Kulaksız</h1>
                <p className='fs-2 opacity-70'>Full Stack Developer</p>
                <Button href='mailto:husem.vx@gmail.com' className='mt-6'>Contact Me</Button>
            </div>

            <div className="social-media">
                <div className="social">
                    <span>
                        <Image src='/github.png' alt='github' width={25} height={25}/>
                    </span>
                    <div>
                        <h5>Github</h5>
                        <a href='https://github.com/HusemZ' target='_blank'>github.com/HusemZ</a>
                    </div>
                </div>
                <div className="social">
                    <span>
                        <Image src='/mail.png' alt='mail' width={25} height={25}/>
                    </span>
                    <div>
                        <h5>Mail</h5>
                        <a href='mailto:husem.vx@gmail.com'>husem.vx@gmail.com</a>
                    </div>
                </div>
                <div className="social">
                    <span>
                        <Image src='/linkedin.png' alt='linkedin' width={25} height={25}/>
                    </span>
                    <div>
                        <h5>Linkedin</h5>
                        <a href='https://www.linkedin.com/in/h%C3%BCsem-kulaks%C4%B1z-8b273217b/' target='_blank'>linkedin.com/in/hüsem-kulaksız</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
