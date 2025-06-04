export default function ButtonPortfolio(props) {

    return (
        <button
            className="flex flex-row items-center md:w-80 md:h-20 self-bottom scroll-mt-60 md:mt-10 mx-auto hover:bg-eerieBlack hover:border-2 hover:border-blueChill justify-center bg-blueChill rounded-2xl "
            onClick={props.onClick}
        >
            <img src={props.src} className="justify-center items-center w-1/6 h-1/2 m-5" alt="image"/>
            <span className="flex items-center font-mova">{props.text}</span>
        </button>);
}