import { headphones } from "@/stabs/products";

export const getHeadphonesByType = (type: "wired" | "wireless") => {
    return headphones.filter((item) => item.type === type);
};
