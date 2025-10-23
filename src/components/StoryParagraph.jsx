export default function StoryParagraph({paragraph}) {
    return (
        <>
            <h1 className="font-bold font-mova text-4xl mx-4 sm:mx-10 md:mx-20 mt-6">
                {paragraph.title}
            </h1>
            <p className="text-white-100 text-base sm:text-lg md:text-xl mx-4 sm:mx-10 md:mx-20 mt-6">
                {paragraph.content}
            </p>
        </>
    );
}
