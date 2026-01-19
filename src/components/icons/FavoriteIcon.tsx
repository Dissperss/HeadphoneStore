import styles from "./FavoriteIcon.module.css";

type FavoriteIconProps = {
    count: number;
};

export const FavoriteIcon = ({ count }: FavoriteIconProps) => {
    return (
        <span className={styles.favorites}>
            <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.332 2.0293C13.7207 -0.0801783 17.4154 -0.00968466 19.7158 2.25684C22.012 4.52135 22.0896 8.12158 19.957 10.4727L10.998 19.2969L2.03516 10.4668C-0.0910429 8.1155 -0.00861702 4.5134 2.2832 2.25781C4.58627 -0.0065268 8.2738 -0.0833145 10.6699 2.0293L11.001 2.32129L11.332 2.0293ZM18.8604 3.07324C17.0229 1.26358 14.0631 1.19057 12.1396 2.88965L11.001 3.89355L9.86328 2.89062C7.93435 1.18965 4.98036 1.26391 3.13867 3.0752C1.31029 4.87362 1.21675 7.75669 2.90332 9.66113L2.91504 9.67383L2.92676 9.68555L10.6484 17.293L11 17.6387L11.3506 17.293L19.0723 9.68652L19.085 9.6748L19.0957 9.66211C20.7839 7.75628 20.6903 4.87678 18.8604 3.07324Z"
                    fill="currentColor"
                    stroke="gray"
                />
            </svg>
            {count > 0 && <span className={styles.badge}>{count}</span>}
        </span>
    );
};
