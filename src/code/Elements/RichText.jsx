// Met en évidence les mots entourés de ** dans un texte, sans le découper.
// Exemple : "Apprentissage du **langage C** à Epitech."
function RichText({ text }) {
    const parts = text.split("**");

    return (
        <>
            {parts.map((part, i) =>
                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
        </>
    );
}

export default RichText;
