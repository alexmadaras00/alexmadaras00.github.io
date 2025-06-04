export default function Paragraph({paragraph}) {

    const { link, cleanedText } = extractLinkWithPlaceholder(paragraph.description);

    return (
        <div className="flex flex-col m-10">
            <img src={paragraph.image} className="w-1/4 h-1/5 flex mx-auto" alt="image"/>
            <h1 className="text-2xl font-bold font-mova mx-auto m-4">{paragraph.title.toString().toUpperCase()}</h1>
            <p>{cleanedText}</p>{
            link && (<a href={link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block underline
            text-white-100">{paragraph.placeholder}</a>)
        }

        </div>);

}

function extractLinkWithPlaceholder(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urlInText = text.match(urlRegex);

    if (urlInText) {
        const link = urlInText[0];
        const cleanedText = text.replace(link, "");
        return {link, cleanedText};
    }

    return {link: null, cleanedText: text};
}
