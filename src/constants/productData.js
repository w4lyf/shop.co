const category = [
    "t-shirt",
    "shorts",
    "shirts",
    "hoodies",
    "jeans",
]

const dreesStyle = [
    "casual",
    "formal",
    "party",
    "gym",
]

const colorVariant = {

    white: {
        id: 1,
        name: "white",
        hex: "#F7F7F4"
    },
    black: {
        id: 2,
        name: "black",
        hex: "#000000"
    },
    green: {
        id: 3,
        name: "green",
        hex: "#13716B"
    },
    grey: {
        id: 4,
        name: "grey",
        hex: "#CAC8CB"
    },
    blue: {
        id: 5,
        name: "blue",
        hex: "#769CC4"
    },
    pink: {
        id: 6,
        name: "pink",
        hex: "#FCC7EB"
    },
    red: {
        id: 7,
        name: "red",
        hex: "#C52E2E"
    },
    brown: {
        id: 8,
        name: "brown",
        hex: "#824F2D"
    },
    yellow: {
        id: 9,
        name: "yellow",
        hex: "#FFFF00"
    },

}

const products = [
    {
        id: 1,
        name: "reebok identity tape t-shirt",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1200,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.black,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44992718_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44989497_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44992849_2048.jpg",
                ],
            },
            {
                color: colorVariant.white,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332159_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45331311_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332116_2048.jpg",
                ]
            },
            {
                color: colorVariant.grey,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990710_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44991331_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990774_2048.jpg",
                ]
            }
        ]
    },
    {
        id: 2,
        name: "skinny fit jeans",
        category: "jeans",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 2600,
        discount: 20,
        rating: 3.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.blue,
                image: [
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://dynamic.zacdn.com/7YupojC5gHCOooujo40v8kPft5E=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/replay-5182-4866362-1.jpg",
                    "https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/563a7792_a646.jpg",
                    "https://media.everlane.com/image/upload/q_auto,f_auto/i/3a6eafff_96a2.jpg",
                ]
            },
        ]
    },
    {
        id: 3,
        name: "checkered shirt",
        category: "shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1800,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.red,
                image: [
                    "https://spykar.com/cdn/shop/products/WuhKxeWZd-MSHCS1BC133RED-_2.jpg?v=1672992291",
                    "https://www.hollandcooper.com/cdn/shop/products/2021-20-10_SS22_ECOM_DAY_1Look62-WesternCheckShirt_Red-Navy__43324_5_2048x2048.jpg?v=1692628443",
                    "https://assets.ajio.com/medias/sys_master/root/h23/h8b/13558435086366/-473Wx593H-460185802-scarlet-MODEL.jpg",
                ]
            },
            {
                color: colorVariant.white,
                image: [
                    "https://spykar.com/cdn/shop/products/NwI8HnX1gz-MSHCS1BC144WHITE-_4.jpg?v=1672993254",
                    "https://rukminim1.flixcart.com/image/300/350/kplisnk0/shirt/w/w/i/s-bj-sht5149-hanumntra-original-imag3st9zwbm3vgh.jpeg?q=90",
                    "https://images.meesho.com/images/products/333347446/pgy2r_512.webp",
                ]
            },
            {
                color: colorVariant.brown,
                image: [
                    "https://i5.walmartimages.com/seo/One-Day-Away-Men-s-Long-Sleeve-Brushed-Flannel-Shirt_d1a46179-3cbd-4b74-ad13-978b6c2d5ede_1.6bd81a4343b9bb9f961521a3c6bd4a19.jpeg",
                    "https://i5.walmartimages.com/asr/96532b31-85d7-4289-98e8-c213232d0a07_1.2c8c05076844a6e08300d6b7dd83530e.jpeg",
                    "https://i5.walmartimages.com/asr/8b84674b-50c3-4302-919e-967603b0b295_1.9f9c622258f89c1a9d164a1d070e494e.jpeg",
                ]
            }
        ]
    },
    {
        id: 4,
        name: "sleeve striped t-shirt",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1600,
        discount: 30,
        rating: 2.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.white,
                image: [
                    "https://m.media-amazon.com/images/I/71Pu7Wk+8wL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/719BoOGC-+L._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71iP0bbJHLL._SX679_.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://assets.ajio.com/medias/sys_master/root/h4d/h63/16953149624350/-473Wx593H-462160145-black-MODEL.jpg",
                    "https://m.media-amazon.com/images/I/61W8aVw27jL._UX679_.jpg",
                    "https://cdn.shopify.com/s/files/1/0020/8855/9063/products/16_034f88e4-8bb1-4f7f-b14f-541c5a8e64f7.jpg?v=1631559624",
                ]
            },
        ]
    },
    {
        id: 5,
        name: "gradient graphic t-shirt",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1405,
        discount: null,
        rating: 5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.pink,
                image: [
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-0_cbc0687c-f3bc-4517-8950-8a4ca012727a_420x.jpg?v=1692127589",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-1_4a064d99-cded-4e60-9e26-f90f846a50b1.jpg?v=1692127593",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-2_b449301d-f5da-408d-a96b-8f40761ef402.jpg?v=1692127595",
                ]
            },
        ]
    },
    {
        id: 6,
        name: "reebok identity tape t-shirt ii",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1200,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.black,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44992708_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44989497_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44992849_2048.jpg",
                ],
            },
            {
                color: colorVariant.white,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332159_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45331311_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332116_2048.jpg",
                ]
            },
            {
                color: colorVariant.grey,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990710_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44991331_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990774_2048.jpg",
                ]
            }
        ]
    },
    {
        id: 7,
        name: "skinny fit jeans ii",
        category: "jeans",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 2600,
        discount: 20,
        rating: 3.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.blue,
                image: [
                    "https://images.sg.content-cdn.io/cdn/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-510-skinny-fit-jeans-055101173_01_Front.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://dynamic.zacdn.com/7YupojC5gHCOooujo40v8kPft5E=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/replay-5182-4866362-1.jpg",
                    "https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/563a7792_a646.jpg",
                    "https://media.everlane.com/image/upload/q_auto,f_auto/i/3a6eafff_96a2.jpg",
                ]
            },
        ]
    },
    {
        id: 8,
        name: "checkered shirt ii",
        category: "shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1800,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.red,
                image: [
                    "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T25_1125M_T0_X_EC_0?$PDP_IMAGEGRID_ZOOM_MD$",
                    "https://www.hollandcooper.com/cdn/shop/products/2021-20-10_SS22_ECOM_DAY_1Look62-WesternCheckShirt_Red-Navy__43324_5_2048x2048.jpg?v=1692628443",
                    "https://assets.ajio.com/medias/sys_master/root/h23/h8b/13558435086366/-473Wx593H-460185802-scarlet-MODEL.jpg",
                ]
            },
            {
                color: colorVariant.white,
                image: [
                    "https://spykar.com/cdn/shop/products/NwI8HnX1gz-MSHCS1BC144WHITE-_4.jpg?v=1672993254",
                    "https://rukminim1.flixcart.com/image/300/350/kplisnk0/shirt/w/w/i/s-bj-sht5149-hanumntra-original-imag3st9zwbm3vgh.jpeg?q=90",
                    "https://images.meesho.com/images/products/333347446/pgy2r_512.webp",
                ]
            },
            {
                color: colorVariant.brown,
                image: [
                    "https://i5.walmartimages.com/seo/One-Day-Away-Men-s-Long-Sleeve-Brushed-Flannel-Shirt_d1a46179-3cbd-4b74-ad13-978b6c2d5ede_1.6bd81a4343b9bb9f961521a3c6bd4a19.jpeg",
                    "https://i5.walmartimages.com/asr/96532b31-85d7-4289-98e8-c213232d0a07_1.2c8c05076844a6e08300d6b7dd83530e.jpeg",
                    "https://i5.walmartimages.com/asr/8b84674b-50c3-4302-919e-967603b0b295_1.9f9c622258f89c1a9d164a1d070e494e.jpeg",
                ]
            }
        ]
    },
    {
        id: 9,
        name: "sleeve striped t-shirt ii",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1600,
        discount: 30,
        rating: 2.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.green,
                image: [
                    "src/assets/images/products/pic5.png",
                    "src/assets/images/products/pic5.png",
                    "src/assets/images/products/pic5.png"
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/43627707330a117120f617e0f2178a88deb96839_4366J008_1033_1.jpeg",
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/c6176d68f0bee71a8c166dd499e027b98cc5497b_4366J008_1033_11.jpeg",
                    "https://cdna.lystit.com/400/500/tr/photos/asos/3fd16d6d/collusion-Blue-Fine-Knit-Stripe-Sweater.jpeg",
                ]
            },
        ]
    },
    {
        id: 10,
        name: "gradient graphic t-shirt ii",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1450,
        discount: null,
        rating: 5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.pink,
                image: [
                    "https://i8.amplience.net/i/jpl/jd_674045_a?qlt=92&w=600&h=765&v=1&fmt=auto",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-1_4a064d99-cded-4e60-9e26-f90f846a50b1.jpg?v=1692127593",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-2_b449301d-f5da-408d-a96b-8f40761ef402.jpg?v=1692127595",
                ]
            },
        ]
    },
    {
        id: 11,
        name: "reebok identity tape t-shirt",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1200,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.black,
                image: [
                    "https://reebok.ca/cdn/shop/products/1pov4BEReqP-m66PCsD0ghb0BRboZBZvf.jpg?v=1663642648&width=1445",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44989497_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44992849_2048.jpg",
                ],
            },
            {
                color: colorVariant.white,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332159_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45331311_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332116_2048.jpg",
                ]
            },
            {
                color: colorVariant.grey,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990710_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44991331_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990774_2048.jpg",
                ]
            }
        ]
    },
    {
        id: 12,
        name: "skinny fit jeans",
        category: "jeans",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 2600,
        discount: 20,
        rating: 3.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.blue,
                image: [
                    "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/f147217576e91d4209fd0819db022de3c5580745_xxl-1.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://dynamic.zacdn.com/7YupojC5gHCOooujo40v8kPft5E=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/replay-5182-4866362-1.jpg",
                    "https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/563a7792_a646.jpg",
                    "https://media.everlane.com/image/upload/q_auto,f_auto/i/3a6eafff_96a2.jpg",
                ]
            },
        ]
    },
    {
        id: 13,
        name: "checkered shirt",
        category: "shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1800,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.red,
                image: [
                    "https://dynamic.zacdn.com/Ic5vgxFTxwEiRuENo6lHU1Hf8pg=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/jack-jones-6697-2382893-1.jpg",
                    "https://www.hollandcooper.com/cdn/shop/products/2021-20-10_SS22_ECOM_DAY_1Look62-WesternCheckShirt_Red-Navy__43324_5_2048x2048.jpg?v=1692628443",
                    "https://assets.ajio.com/medias/sys_master/root/h23/h8b/13558435086366/-473Wx593H-460185802-scarlet-MODEL.jpg",
                ]
            },
            {
                color: colorVariant.white,
                image: [
                    "https://spykar.com/cdn/shop/products/NwI8HnX1gz-MSHCS1BC144WHITE-_4.jpg?v=1672993254",
                    "https://rukminim1.flixcart.com/image/300/350/kplisnk0/shirt/w/w/i/s-bj-sht5149-hanumntra-original-imag3st9zwbm3vgh.jpeg?q=90",
                    "https://images.meesho.com/images/products/333347446/pgy2r_512.webp",
                ]
            },
            {
                color: colorVariant.brown,
                image: [
                    "https://i5.walmartimages.com/seo/One-Day-Away-Men-s-Long-Sleeve-Brushed-Flannel-Shirt_d1a46179-3cbd-4b74-ad13-978b6c2d5ede_1.6bd81a4343b9bb9f961521a3c6bd4a19.jpeg",
                    "https://i5.walmartimages.com/asr/96532b31-85d7-4289-98e8-c213232d0a07_1.2c8c05076844a6e08300d6b7dd83530e.jpeg",
                    "https://i5.walmartimages.com/asr/8b84674b-50c3-4302-919e-967603b0b295_1.9f9c622258f89c1a9d164a1d070e494e.jpeg",
                ]
            }
        ]
    },
    {
        id: 14,
        name: "sleeve striped t-shirt",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1600,
        discount: 30,
        rating: 2.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.white,
                image: [
                    "https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/12/14/5b6d8012-b7b4-4b07-845a-58f1d56250dc.jpg",
                    "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7242/318/093/7242318093_2_6_8.jpg?t=1692261309384&imwidth=1125",
                    "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/457903/sub/augoods_457903_sub2.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/43627707330a117120f617e0f2178a88deb96839_4366J008_1033_1.jpeg",
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/c6176d68f0bee71a8c166dd499e027b98cc5497b_4366J008_1033_11.jpeg",
                    "https://cdna.lystit.com/400/500/tr/photos/asos/3fd16d6d/collusion-Blue-Fine-Knit-Stripe-Sweater.jpeg",
                ]
            },
        ]
    },
    {
        id: 15,
        name: "gradient graphic t-shirt",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1450,
        discount: null,
        rating: 5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.pink,
                image: [
                    "https://image1.superdry.com/static/images/optimised/zoom/upload9223368955665648601.jpg",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-1_4a064d99-cded-4e60-9e26-f90f846a50b1.jpg?v=1692127593",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-2_b449301d-f5da-408d-a96b-8f40761ef402.jpg?v=1692127595",
                ]
            },
        ]
    },
    {
        id: 16,
        name: "reebok identity tape t-shirt ii",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1200,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.black,
                image: [
                    "https://img01.ztat.net/article/spp-media-p1/73616b4de7534f33b0815cc4359a661d/d32e372b454f45fd842ea1327012ad47.jpg?imwidth=762",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44989497_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44992849_2048.jpg",
                ],
            },
            {
                color: colorVariant.white,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332159_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45331311_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332116_2048.jpg",
                ]
            },
            {
                color: colorVariant.grey,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990710_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44991331_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990774_2048.jpg",
                ]
            }
        ]
    },
    {
        id: 17,
        name: "skinny fit jeans ii",
        category: "jeans",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 2600,
        discount: 20,
        rating: 3.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.blue,
                image: [
                    "https://www.legendlondon.co/cdn/shop/products/legend-london-jeans-skinny-fit-jeans-light-blue-wash-32686265106629.jpg?v=1695465247&width=416",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://dynamic.zacdn.com/7YupojC5gHCOooujo40v8kPft5E=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/replay-5182-4866362-1.jpg",
                    "https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/563a7792_a646.jpg",
                    "https://media.everlane.com/image/upload/q_auto,f_auto/i/3a6eafff_96a2.jpg",
                ]
            },
        ]
    },
    {
        id: 18,
        name: "checkered shirt ii",
        category: "shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1800,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.red,
                image: [
                    "https://images.asos-media.com/products/asos-design-oversized-shacket-with-pockets-in-mono-check/203450544-1-monocheck/?$n_480w$&wid=476&fit=constrain",
                    "https://www.hollandcooper.com/cdn/shop/products/2021-20-10_SS22_ECOM_DAY_1Look62-WesternCheckShirt_Red-Navy__43324_5_2048x2048.jpg?v=1692628443",
                    "https://assets.ajio.com/medias/sys_master/root/h23/h8b/13558435086366/-473Wx593H-460185802-scarlet-MODEL.jpg",
                ]
            },
            {
                color: colorVariant.white,
                image: [
                    "https://spykar.com/cdn/shop/products/NwI8HnX1gz-MSHCS1BC144WHITE-_4.jpg?v=1672993254",
                    "https://rukminim1.flixcart.com/image/300/350/kplisnk0/shirt/w/w/i/s-bj-sht5149-hanumntra-original-imag3st9zwbm3vgh.jpeg?q=90",
                    "https://images.meesho.com/images/products/333347446/pgy2r_512.webp",
                ]
            },
            {
                color: colorVariant.brown,
                image: [
                    "https://i5.walmartimages.com/seo/One-Day-Away-Men-s-Long-Sleeve-Brushed-Flannel-Shirt_d1a46179-3cbd-4b74-ad13-978b6c2d5ede_1.6bd81a4343b9bb9f961521a3c6bd4a19.jpeg",
                    "https://i5.walmartimages.com/asr/96532b31-85d7-4289-98e8-c213232d0a07_1.2c8c05076844a6e08300d6b7dd83530e.jpeg",
                    "https://i5.walmartimages.com/asr/8b84674b-50c3-4302-919e-967603b0b295_1.9f9c622258f89c1a9d164a1d070e494e.jpeg",
                ]
            }
        ]
    },
    {
        id: 19,
        name: "sleeve striped t-shirt ii",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1600,
        discount: 30,
        rating: 2.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.white,
                image: [
                    "https://static.bershka.net/4/photos2/2023/I/0/2/p/7945/645/712/d1a387b516c93934c178e14eefb59514-7945645712_1_1_0.jpg",
                    "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7242/318/093/7242318093_2_6_8.jpg?t=1692261309384&imwidth=1125",
                    "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/457903/sub/augoods_457903_sub2.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/43627707330a117120f617e0f2178a88deb96839_4366J008_1033_1.jpeg",
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/c6176d68f0bee71a8c166dd499e027b98cc5497b_4366J008_1033_11.jpeg",
                    "https://cdna.lystit.com/400/500/tr/photos/asos/3fd16d6d/collusion-Blue-Fine-Knit-Stripe-Sweater.jpeg",
                ]
            },
        ]
    },
    {
        id: 20,
        name: "gradient graphic t-shirt ii",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 1450,
        discount: null,
        rating: 5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.pink,
                image: [
                    "https://cdn-images.farfetch-contents.com/20/25/90/22/20259022_50262185_600.jpg",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-1_4a064d99-cded-4e60-9e26-f90f846a50b1.jpg?v=1692127593",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-2_b449301d-f5da-408d-a96b-8f40761ef402.jpg?v=1692127595",
                ]
            },
        ]
    },

    {
        id: 21,
        name: "Ap'pulse Women's Long Sleeve Thumbopen Tshirt",
        category: "t-shirt",
        description: "100% Rich Premium Cotton. Long Sleeve Thumb Open Tshirt",
        price: 1400,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.black,
                image: [
                    "https://m.media-amazon.com/images/I/61+bQzwnq6L._SY741_.jpg",
                    "https://m.media-amazon.com/images/I/61XasPssphL._SY741_.jpg",
                    "https://m.media-amazon.com/images/I/61j+8Umo99L._SY741_.jpg",
                ]
            },
        ]
    },
    {
        id: 22,
        name: "Mens Waffle Tank Tops Sleeveless",
        category: "t-shirt",
        description: "100% Rich Premium Cotton. Long Sleeve Thumb Open Tshirt",
        price: 1650,
        discount: 60,
        rating: 5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.green,
                image: [
                    "https://m.media-amazon.com/images/I/51nOOR9kCvL._SY741_.jpg",
                    "https://m.media-amazon.com/images/I/51D2UG2v8JL._SY741_.jpg",
                    "https://m.media-amazon.com/images/I/61gBL7LlBUL._SX679_.jpg",
                ]
            },
        ]
    },
    {
        id: 23,
        name: "Men's Round Neck Regular Dry Fit",
        category: "t-shirt",
        description: "100% Rich Premium Cotton. Half Sleeve Thumb Open Tshirt",
        price: 1450,
        discount: 10,
        rating: 3,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.blue,
                image: [
                    "https://m.media-amazon.com/images/I/51sg2X+HcpL._SY741_.jpg",
                    "https://m.media-amazon.com/images/I/61asemlINsL._SX679_.jpg",
                    "https://m.media-amazon.com/images/I/71ObCkqF14L._SX679_.jpg",
                ]
            },
            {
                    color: colorVariant.black,
                    image: [
                        "https://m.media-amazon.com/images/I/61ci6NE56XL._SY741_.jpg",
                        "https://m.media-amazon.com/images/I/61QTFNSCvlL._SY741_.jpg",
                        "https://m.media-amazon.com/images/I/51SLAzlgowL._SY741_.jpg",
                    ]
                }
        ]
    },
    {
        id: 24,
        name: "ZAFONI Tropical Shirt 1pc Yellow Men",
        category: "t-shirt", 
        description: "Stylish tropical shirt perfect for summer outings.",
        price: 4000,
        discount: null,
        rating: 4.8,
        size: ["s", "m", "l", "xl"], 
        variant: [
            {
                color: colorVariant.yellow, 
                image: [
                    "src/assets/images/products/img106.png" 
                ],
            }
        ]
    },
    {
        id: 25,
        name: "Lymio Men's Striped Regular Fit Shirt",
        category: "t-shirt", // Adjust the category as needed
        description: "Stylish and comfortable striped shirt for a casual look.",
        price: 900,
        discount: null, // Change to null if there's no discount
        rating: 4.6,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.white, // Adjust color as needed
                image: [
                    "src/assets/images/products/img108.png",
                    "src/assets/images/products/img108.png" // Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 26,
        name: "COOFANDY Mens Button Down Beach Shirt",
        category: "shirt", // Adjust the category as needed
        description: "Comfortable button-down beach shirt perfect for summer outings.",
        price: 8000,
        discount: null, // Change to null if there's no discount
        rating: 4.7,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.pink, // Adjust color as needed
                image: [
                    "src/assets/images/products/img109.png",
                    "src/assets/images/products/img109.png",
                    "src/assets/images/products/img109.png" // Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 27,
        name: "JMIERR Mens Quilted Shirt Jackets",
        category: "jacket", // Adjust the category as needed
        description: "Stylish quilted shirt jacket perfect for layering in colder weather.",
        price: 9000,
        discount: null, // Change to null if there's no discount
        rating: 4.9,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.black, // Adjust color as needed
                image: [
                    "src/assets/images/products/img110.png" // Adjust the path as needed
                ],
            }
        ]
    },
    
    {
        id: 28,
        name: "Allen Solly Men's Slim Fit Shirt",
        category: "shirt", // Adjust the category as needed
        description: "Stylish and comfortable slim fit shirt for men, perfect for casual and formal occasions.",
        price: 2000,
        discount: null, // Change to null if there's no discount
        rating: 4.2,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.blue, // Adjust color as needed
                image: [
                    "src/assets/images/products/img111.png",
                    "src/assets/images/products/img111.png",
                    "src/assets/images/products/img111.png"// Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 29,
        name: "Scott International Shirt for Men",
        category: "shirt", // Adjust the category as needed
        description: "Elegant and stylish shirt designed for men, suitable for both casual and formal events.",
        price: 9000,
        discount: null, // Change to null if there's no discount
        rating: 4.2,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.grey, // Adjust color as needed
                image: [
                    "src/assets/images/products/img112.png",
                    "src/assets/images/products/img112.png",
                    "src/assets/images/products/img112.png" // Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 30,
        name: "Peter England Men's Regular Fit Shirt",
        category: "shirt", // Adjust the category as needed
        description: "Stylish and comfortable regular fit shirt perfect for everyday wear.",
        price: 3000,
        discount: null, // Change to null if there's no discount
        rating: 4.4,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.white, // Adjust color as needed
                image: [
                    "src/assets/images/products/img113.png",
                    "src/assets/images/products/img113.png",
                    "src/assets/images/products/img113.png" // Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 31,
        name: "Pinkmint Mens Long Sleeve Button Down Shirt",
        category: "shirt", // Adjust the category as needed
        description: "Stylish long sleeve button-down shirt perfect for formal and casual occasions.",
        price: 4900,
        discount: null, // Change to null if there's no discount
        rating: 4.1,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.black, // Adjust color as needed
                image: [
                    "src/assets/images/products/img114.png",
                    "src/assets/images/products/img114.png",
                    "src/assets/images/products/img114.png" // Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 32,
        name: "Louis Philippe Men Regular Fit",
        category: "shirt", // Adjust the category as needed
        description: "Classic regular fit shirt from Louis Philippe, perfect for business and casual wear.",
        price: 7600,
        discount: null, // Change to null if there's no discount
        rating: 4.2,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.white, // Adjust color as needed
                image: [
                    "src/assets/images/products/img115.png",
                    "src/assets/images/products/img115.png",
                    "src/assets/images/products/img115.png" // Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 33,
        name: "Majestic Man Slim Fit Satin Cotton Formal Shirt",
        category: "formal shirt", // Adjust the category as needed
        description: "Elegant slim fit satin cotton formal shirt suitable for office wear and formal events.",
        price: 12000,
        discount: null, // Change to null if there's no discount
        rating: 4.1,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.white, // Adjust color as needed
                image: [
                    "src/assets/images/products/img116.png",
                    "src/assets/images/products/img116.png",
                    "src/assets/images/products/img116.png" // Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 34,
        name: "GRECIILOOKS Shirt for Men | Mens Casual Shirt",
        category: "casual shirt", // Adjust the category as needed
        description: "Stylish casual shirt for men, perfect for everyday wear.",
        price: 2400,
        discount: null, // Change to null if there's no discount
        rating: 4.1,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.black, // Adjust color as needed
                image: [
                    "src/assets/images/products/img117.png",
                    "src/assets/images/products/img117.png",
                    "src/assets/images/products/img117.png" // Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 35,
        name: "CALVIN PARTY WEAR",
        category: "party wear", // Adjust category as needed
        description: "Stylish party wear suitable for various occasions.",
        price: 4000,
        discount: null, // Change to null if there's no discount
        rating: 4.8,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.black, // Adjust color as needed
                image: [
                    "src/assets/images/products/img118.png",
                    "src/assets/images/products/img118.png",
                    "src/assets/images/products/img118.png" // Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 36,
        name: "ZEROYAA Mens Hipster Gold Rose Printed Slim Fit",
        category: "hipsters", // Adjust category as needed
        description: "Trendy hipster shirt with gold rose print.",
        price: 3600,
        discount: null, // Change to null if there's no discount
        rating: 4.2,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.pink, // Adjust color as needed
                image: [
                    "src/assets/images/products/img119.png",
                    "src/assets/images/products/img119.png",
                    "src/assets/images/products/img119.png" // Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 37,
        name: "COOFANDY Women's Casual Pullover Sweatshirt Double",
        category: "sweatshirts", // Adjust category as needed
        description: "Comfortable and stylish pullover sweatshirt for casual wear.",
        price: 9000,
        discount: null, // Change to null if there's no discount
        rating: 4.6,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.white, // Adjust color as needed
                image: [
                    "src/assets/images/products/pic13.png",
                    "src/assets/images/products/pic13.png",
                    "src/assets/images/products/pic13.png" // Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 38,
        name: "Amzdest 90s Clothing for Women, Unisex Hip Hop Outfit for Party",
        category: "hip hop outfits", // Adjust category as needed
        description: "90s inspired unisex hip hop outfit for parties.",
        price: 8000,
        discount: null, // Change to null if there's no discount
        rating: 4.7,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.black, // Adjust color as needed
                image: [
                    "src/assets/images/products/img121.png",
                    "src/assets/images/products/img121.png",
                    "src/assets/images/products/img121.png" // Adjust the path as needed
                ],
            }
        ]
    },
    {
        id: 39,
        name: "shop4ever Pirate Skull & Crossbones T-Shirt",
        category: "t-shirts", // Adjust category as needed
        description: "Cool pirate-themed t-shirt with skull and crossbones design.",
        price: 6000,
        discount: null, // Change to null if there's no discount
        rating: 4.9,
        size: ["s", "m", "l", "xl"], // Adjust sizes as needed
        variant: [
            {
                color: colorVariant.black, // Adjust color as needed
                image: [
                    "src/assets/images/products/img122.png",
                    "src/assets/images/products/img122.png",
                    "src/assets/images/products/img122.png" // Adjust the path as needed
                ],
            }
        ]
    }
]

const happyCust = [
    {
        id: 1,
        name: "Priya S.",
        rate: 5,
        comment: `"I am amazed by the quality and style of the clothes I received from Shop.co. From casual wear to elegant ethnic outfits, every piece I've bought has truly exceeded my expectations."`
    },
    {
        id: 2,
        name: "Rahul K.",
        rate: 4.5,
        comment: `"Finding clothes that suit my personal style was always a challenge until I discovered Shop.co. The variety they offer is simply fantastic, catering to all occasions and tastes."`
    },
    {
        id: 3,
        name: "Amit L.",
        rate: 3.5,
        comment: `"As someone who's always on the lookout for unique fashion pieces, I am thrilled to have found Shop.co. Their collection is not only diverse but also aligns perfectly with the latest trends."`
    },
    {
        id: 4,
        name: "Neha J.",
        rate: 5,
        comment: `"I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to beautiful sarees, every piece I've bought has truly exceeded my expectations."`
    },
    {
        id: 5,
        name: "Vikram M.",
        rate: 4.5,
        comment: `"Finding clothes that reflect my personal style used to be difficult until I discovered Shop.co. The range of options they have is truly impressive, catering to a variety of tastes and occasions."`
    },
    {
        id: 6,
        name: "Ravi L.",
        rate: 5,
        comment: `"As someone who's always hunting for unique fashion items, I'm delighted to have come across Shop.co. Their selection is not just diverse but also spot-on with the latest trends."`
    },
    {
        id: 7,
        name: "Riya M.",
        rate: 5,
        comment: `"I am amazed by the quality and style of the clothes I received from Shop.co. From casual wear to stunning party dresses, every piece I've bought has truly exceeded my expectations."`
    },
    {
        id: 8,
        name: "Anil K.",
        rate: 4,
        comment: `"Finding clothes that match my personal style was a challenge until I found Shop.co. Their wide range of options is simply remarkable, catering to various tastes and occasions."`
    },
    {
        id: 9,
        name: "Suresh L.",
        rate: 5,
        comment: `"As someone who's always on the lookout for unique fashion pieces, I'm overjoyed to have found Shop.co. The variety of clothes is not only diverse but also perfectly aligned with the latest trends."`
    },
];

export {
    category,
    dreesStyle,
    products,
    happyCust,
    colorVariant
}