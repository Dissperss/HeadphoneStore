import appleByzS852 from "@/assets/img/apple_byz_s852ipng.png";
import appleEarPods from "@/assets/img/apple_ear_pods.png";
import appleEarPodsV2 from "@/assets/img/apple_ear_pods_v2.png";
import airPods from "@/assets/img/apple_air_pods.png";
import gerlaxGh04 from "@/assets/img/gerlax_gh_04png.png";
import borofoneBo4 from "@/assets/img/borofone_bo4.png";

export type ProductType = "wired" | "wireless";

export type Product = {
    id: number;
    img: string;
    title: string;
    description: string;
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
        description:
            "Проводные наушники с чистым сбалансированным звуком, удобной посадкой и встроенным пультом управления. Отличный выбор для повседневного использования.",
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
        description:
            "Классические проводные EarPods с фирменной эргономикой Apple. Чёткий звук, глубокие басы и комфорт даже при длительном прослушивании.",
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
        description:
            "Обновлённая версия EarPods с улучшенной акустикой и более устойчивым кабелем. Отлично подходят для звонков и музыки.",
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
        description:
            "Лёгкие и удобные проводные наушники для ежедневного использования. Оптимальный вариант для экосистемы Apple.",
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
        description:
            "Минималистичный дизайн, качественный звук и надёжная сборка. Подойдут для работы, учёбы и прогулок.",
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
        description:
            "Проводные наушники с улучшенной детализацией звука и комфортной формой. Хороший баланс цены и качества.",
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
        description:
            "Беспроводные наушники с мгновенным подключением, стабильным соединением и чистым звучанием. Идеальны для активного образа жизни.",
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
        description:
            "Беспроводные наушники с современным дизайном, хорошей автономностью и насыщенным звуком для своей ценовой категории.",
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
        description:
            "Компактные Bluetooth-наушники с удобной посадкой, стабильным соединением и приятным звучанием для повседневных задач.",
        price: {
            actual: 2327,
        },
        rate: 4.7,
        type: "wireless",
    },
];
