import React, { useState, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import Card from './Card';

export default function RandomUselessFacts() {
    let total = 9;
    const [Phrase, setPhrase] = useState([])
    const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random'
    let data, response;
    let grad = 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'

    document.title = 'Random Useless Facts - Quote Quest'

    const fetchRandomUselessFacts = async () => {
        response = await fetch(url, {
            method: "GET"
        });

        data = await response.json()
        if (data.text.length < 100) {
            setPhrase(current => [...current, data.text]);
        }

    }

    const fetchMoreData = () => {
        total = total + 9;
        for (let index = 0; index < total; index++) {
            fetchRandomUselessFacts()
        }
    }

    useEffect(() => {
        fetchMoreData();
        // eslint-disable-next-line
    }, [])

    /* const createHex = ()=>{
        var hexCode1 = "";
        var hexValues1 = "0123456789abcdef";
        for ( var i = 0; i < 6; i++ ) {
          hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
        }
        return hexCode1;
    }

    const getGradient = ()=>{
        var deg = Math.floor(Math.random() *360);
        var gradient = 'linear-gradient('.concat(deg).concat('deg, #').concat(createHex()).concat(', #').concat(createHex()).concat(')');
        return gradient;
    } */

    return (
        <>
            <p className='text-center my-3'>This is the Random Useless Facts component.</p>
            <InfiniteScroll
                dataLength={Phrase.length}
                next={fetchMoreData}
                hasMore={total !== 0}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className="row">
                        {Phrase.map((element) => {
                            return <div className="col-lg-4" key={element}><Card Phrase={[element]} Gradient={grad} /></div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
