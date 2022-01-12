import Head from 'next/head'
import React from 'react'

export default function HeadContent(props) {
    let { title, desc } = props
    return (        
        <Head>
            <title>{title} | Rapiguard</title>
            <meta name="description" content={desc} />
            <link rel="icon" href="/favicon.ico" />

            {/* EXTERNAL LIBRARIES */}
            <link rel="stylesheet" href="https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css" />    
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" crossOrigin="anonymous" />    
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css"></link>
        </Head>            
    )
}
