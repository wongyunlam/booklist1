import Book from './Book';
import books from './books';
export default function Books() {
    return (
        <section className="list">
            {books?.map((book, idx) => {
                return <Book key={book.id} {...book} idx={idx} />;
            })}
        </section>
    );
}
