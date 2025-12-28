import { motion, easeInOut } from 'framer-motion'
import { ArrowIcon } from './icons'
type Props = {
    text: string,
    model?: 'primary' | 'secondary'
    icon?: boolean
}

const CommonButton = (props: Props) => {
    const buttonVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: easeInOut } },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 },
    }

    const textVariants = {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 } },
    }

    const iconVariants = {
        initial: { opacity: 0, x: 10, rotate: -45 },
        animate: { rotate: 45, opacity: 1, x: 0, transition: { delay: 0.15, duration: 0.3 } },
        hover: { x: 3, transition: { duration: 0.2 } },
    }

    return (
        <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            className={`cursor-pointer text-[18px] max-2xl:text-[16px] max-md:text-[14px] ${props.icon ? "p-[6px_6px_6px_20px] max-md:p-[6px_6px_6px_14px]" :"p-[10px_20px] max-md:p-[8px_14px]"} rounded-full group ${props.model === 'secondary' ? 'bg-[#244952] border-[#244952] hover:border-white hover:bg-white text-white hover:text-black' : 'bg-white border-white hover:border-[#244952] hover:bg-[#244952] text-black hover:text-white'} transition-colors duration-300 font-medium shadow-2xl flex gap-2 items-center`}
        >
            <motion.span variants={textVariants} initial="initial" animate="animate">
                {props.text}
            </motion.span>
            {props.icon ? <motion.div
                variants={iconVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className={`p-2.5 max-md:p-2 rounded-full aspect-square flex justify-center items-center ${props.model === 'secondary' ? 'bg-white group-hover:bg-[#244952]' : 'bg-[#244952] group-hover:bg-white'}`}
            >
                <ArrowIcon size="w-6 max-md:w-5 h-6 max-md:h-5 inline-block rotate-45" color={`${props.model === 'secondary' ? "stroke-black group-hover:stroke-white" : "stroke-white group-hover:stroke-black"}`} stroke="2" />
            </motion.div> : null}
        </motion.button>
    )
}

export default CommonButton