import { heroImage, paymentsImg } from "../assets/images"
import { category } from "./productData"
const nav = [
    {
        name: "shop",
        subMenus: category
    },
    { name: "on sale" },
    { name: "new arrival" },
    { name: "brands" }
]

const heroData = {
    tittle: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    text: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
    img: heroImage,
    stats: [
        {
            number: "200+",
            label: "international brands"
        },
        {
            number: "2,000+",
            label: "hight-quality products"
        },
        {
            number: "30,000+",
            label: "happy customers"
        }
    ]
}

const socialLinks = [
    {
        name: "twitter",
        icon: "ic-twitter",
    },
    {
        name: "facebook",
        icon: "ic-facebook",
    },
    {
        name: "instagram",
        icon: "ic-instagram",
    },
    {
        name: "github",
        icon: "ic-github",
    },
]

const footerNav = [
    {
        name: "Made by",
        subMenus: [
            { name: "Abhinav Swaminathan" },
            { name: "Kaushal Galav" },
            { name: "Aditya Dubey" }
        ]
    }
]

const payments = [
    {
        name: "visa",
        img: paymentsImg.visa,
    },
    {
        name: "mastercard",
        img: paymentsImg.mastercard,
    },
    {
        name: "paypal",
        img: paymentsImg.paypal,
    },
    {
        name: "apple pay",
        img: paymentsImg.applePay,
    },
    {
        name: "google pay",
        img: paymentsImg.googlePay,
    },
]

export {
    nav,
    heroData,
    socialLinks,
    footerNav,
    payments,
}