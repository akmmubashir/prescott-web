type Props = {
    size: string;
    color: string;
    stroke?: string;
}

export const ArrowIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.0701 9.57L12.0001 3.5L5.93005 9.57" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20.5V3.67001" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
export const ArrowUpIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
export const CrownIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6992 18.98H7.29922C6.87922 18.98 6.40922 18.65 6.26922 18.25L2.12922 6.66999C1.53922 5.00999 2.22922 4.49999 3.64922 5.51999L7.54922 8.30999C8.19922 8.75999 8.93922 8.52999 9.21922 7.79999L10.9792 3.10999C11.5392 1.60999 12.4692 1.60999 13.0292 3.10999L14.7892 7.79999C15.0692 8.52999 15.8092 8.75999 16.4492 8.30999L20.1092 5.69999C21.6692 4.57999 22.4192 5.14999 21.7792 6.95999L17.7392 18.27C17.5892 18.65 17.1192 18.98 16.6992 18.98Z" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 22H17.5" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 14H14.5" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const BuildingIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 7H15" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11H15" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15H15" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const TowerIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 5H17V9H7V5Z" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10H19V14H5V10Z" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 15H17V19H7V15Z" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="5" r="1.5" className={color} fill="currentColor" />
        <circle cx="9" cy="12" r="1.5" className={color} fill="currentColor" />
        <circle cx="15" cy="12" r="1.5" className={color} fill="currentColor" />
    </svg>
);

export const ChartIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 17V10" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17V5" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 17V8" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const WrenchIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3A1 1 0 0 0 13.4 4H7a1 1 0 0 0 0 2h6.4a1 1 0 0 0 1.3-1.7z" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 13v5a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-5m18-4a8 8 0 0 0-8-8" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="6" r="3" className={color} strokeWidth={stroke ? stroke : "1.5"} />
    </svg>
);

export const PencilIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CheckCircleIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L12 14.01l-3-3" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const HeartIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const LeafIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 20A7 7 0 0 0 9.8 6.1C15.5 5 21 1 21 1s-6 5.5-7.1 11.2A7 7 0 0 0 11 20z" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.8 6.1H9.9" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const UsersIcon = ({ size, color, stroke }: Props) => (
    <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" className={color} strokeWidth={stroke ? stroke : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
export const QuoteIcon = ({ size, color }: Props) => (
    <svg className={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10.4142L2.70711 14.7071L1.29289 13.2929L5 9.58579V9L1 9V2H7V10.4142Z" className={color} />
        <path d="M9 9L13 9V9.58579L9.29289 13.2929L10.7071 14.7071L15 10.4142L15 2H9L9 9Z" className={color} />
    </svg>
);