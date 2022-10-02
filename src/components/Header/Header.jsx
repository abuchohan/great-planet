import classNames from 'classnames';

const Header = (dark) => {
    console.log(
        document.getElementById('body').classList.contains('fp-viewing-one')
    );
    const headerClasses = classNames({
        header: true,
        'header--dark': dark,
        'fade-in': true
    });

    return <h1 className={headerClasses}>Great Planet</h1>;
};
export default Header;
