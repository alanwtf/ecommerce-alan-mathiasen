import foto from "../images/zapas-nike.webp";

const items = [
    {
        id: 0,
        title: "Nike Janoski",
        price: 20000,
        img: foto,
    },
    {
        id: 1,
        title: "zapatillas nike",
        price: 20000,
        img: foto,
    },
    {
        id: 2,
        title: "zapatillas nike",
        price: 10000,
        img: foto,
    },
    {
        id: 3,
        title: "zapatillas nike",
        price: 23000,
        img: foto,
    },
    {
        id: 4,
        title: "zapatillas nike",
        price: 16000,
        img: foto,
    },
    {
        id: 5,
        title: "zapatillas nike",
        price: 18000,
        img: foto,
    },
];

export const getFetch = new Promise((res) => {
    setTimeout(() => {
        res(items);
    }, 2000);
});
