import Book from './Book';
export default function Booklist() {
    const img = './images/book-1.jpg';
    const title = 'React 18 Design Patterns and Best Practices';
    const author = 'Carlos Santana Roldán';

    const books = [
        {
            img: './images/book-1.jpg',
            title: 'React 18 Design Patterns and Best Practices',
            author: 'Carlos Santana Roldán',
            id: 1,
        },
        {
            img: './images/book-1.jpg',
            title: 'React 18 Design Patterns and Best Practices',
            author: 'Carlos Santana Roldán',
            id: 2,
        },
        {
            img: './images/book-1.jpg',
            title: 'React 18 Design Patterns and Best Practices',
            author: 'Carlos Santana Roldán',
            id: 3,
        },
        {
            img: './images/book-1.jpg',
            title: 'React 18 Design Patterns and Best Practices',
            author: 'Carlos Santana Roldán',
            id: 4,
        },
    ];

    return (
        <section className="booklist">
            {books?.map((book) => {
                const { img, title, author, id } = book;
                return <Book key={id} {...book} />;
            })}
        </section>
    );
}
