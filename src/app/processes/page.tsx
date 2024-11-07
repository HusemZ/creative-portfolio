'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Button from "@/components/ui/Button/Button";

const Page = () => {
    const router = useRouter();
    return (
        <div className="fc container">
            <Button href='/about' rounded style={{ position: 'absolute', top: '20px', left: '0', right: '0', margin: '1.5rem auto' }}>
                <Image src='/up-arrow.png' alt='About' width={16} height={16}/>
            </Button>
            <div className='grid-cols-2'>
                <div>
                    <h2 className='mb-8'>Processes</h2>
                    <p className='mb-5'>
                        I can easily create a prototype and conduct usability testing!
                        If it&#39;s necessary to work at full capacity, I can adapt and activate the accelerated mode without any issues.
                    </p>
                    <p>
                        Flexibility and teamwork are my strengths. <br/>So, what task do you have right now?😉
                    </p>
                </div>
                <div style={{position: 'relative', margin: '0 auto'}}>
                    <div className="process-container">
                        <div className="process-step">
                            Finding the problem <br/>
                            <span className='opacity-50'>Defining the parameters of success</span>
                        </div>
                        <div className="process-step">
                            Checking the problem <br/>
                            <span className='opacity-50'>And is it a problem at all?</span>
                        </div>
                        <div className="process-step">
                            Solution Hypothesis <br/>
                            <span className='opacity-50'>In words or a simple diagram</span>
                        </div>
                        <div className="process-step">
                            Solution Evaluation <br/>
                            <span className='opacity-50'>Breaking down the complicated into simple</span>
                        </div>
                        <div className="process-step">
                            Prototype and verification <br/>
                            <span className='opacity-50'>Team Review</span>
                        </div>
                        <div className="process-step">
                            Final Design <br/>
                            <span className='opacity-50'>Corridor and usability tests</span>
                        </div>
                        <div className="process-step">
                            Development <br/>
                            <span className='opacity-50'>Quality control and answers to questions</span>
                        </div>
                        <div className="process-step">
                            Release <br/>
                            <span className='opacity-50'>Watching how users behave</span>
                        </div>
                        <div className="process-step">
                            Metrics analysis <br/>
                            <span className='opacity-50'>Checking to see if the hypothesis worked</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Page;
