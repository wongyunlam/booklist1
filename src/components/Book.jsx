export default function Book({ img, title, author, id, idx }) {
    function convert(num) {
        var lookup = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1,
        };
        var romanStr = '';
        for (var i in lookup) {
            while (num >= lookup[i]) {
                romanStr += i;
                num -= lookup[i];
            }
        }
        return romanStr;
    }

    return (
        <article className="book">
            <img src={img} alt="alt" />
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
            <span className="number">{convert(++idx)}</span>
        </article>
    );
}
