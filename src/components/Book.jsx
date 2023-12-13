export default function Book({ img, title, author }) {
    return (
        <article className="book">
            <img src={img} alt="alt" />
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
        </article>
    );
}
