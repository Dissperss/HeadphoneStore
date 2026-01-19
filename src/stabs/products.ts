import appleByzS852 from "../assets/img/apple_byz_s852ipng.png";
import appleEarPods from "../assets/img/apple_ear_pods.png";
import appleEarPodsV2 from "../assets/img/apple_ear_pods_v2.png";
import airPods from "../assets/img/apple_air_pods.png";
import gerlaxGh04 from "../assets/img/gerlax_gh_04png.png";
import borofoneBo4 from "../assets/img/borofone_bo4.png";

export type ProductType = "wired" | "wireless";

export type Product = {
    id: number;
    img: string;
    title: string;
    price: {
        actual: number;
        previous?: number;
    };
    rate: number;
    type: ProductType;
};

export const headphones: Product[] = [
    {
        id: 0,
        img: appleByzS852,
        title: "Apple BYZ S852I",
        price: {
            actual: 2927,
            previous: 3527,
        },
        rate: 4.7,
        type: "wired",
    },
    {
        id: 1,
        img: appleEarPods,
        title: "Apple EarPods",
        price: {
            actual: 2327,
        },
        rate: 4.5,
        type: "wired",
    },
    {
        id: 2,
        img: appleEarPodsV2,
        title: "Apple EarPods",
        price: {
            actual: 2327,
        },
        rate: 4.5,
        type: "wired",
    },
    {
        id: 3,
        img: appleEarPods,
        title: "Apple EarPods",
        price: {
            actual: 2327,
        },
        rate: 4.5,
        type: "wired",
    },
    {
        id: 4,
        img: appleEarPods,
        title: "Apple EarPods",
        price: {
            actual: 2327,
        },
        rate: 4.5,
        type: "wired",
    },
    {
        id: 5,
        img: appleEarPodsV2,
        title: "Apple EarPods",
        price: {
            actual: 2327,
        },
        rate: 4.5,
        type: "wired",
    },
    {
        id: 6,
        img: airPods,
        title: "Apple AirPods",
        price: {
            actual: 2327,
        },
        rate: 4.7,
        type: "wireless",
    },
    {
        id: 7,
        img: gerlaxGh04,
        title: "GERLAX GH-04",
        price: {
            actual: 2327,
        },
        rate: 4.7,
        type: "wireless",
    },
    {
        id: 8,
        img: borofoneBo4,
        title: "BOROFONE BO4",
        price: {
            actual: 2327,
        },
        rate: 4.7,
        type: "wireless",
    },
];
