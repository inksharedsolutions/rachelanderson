import React from 'react'
import style from '../../styles/pages.module.scss';


const Links = () => {
    return (
        <>
            <nav className={style.booklinkBlocks}>
                <span>Ebooks :</span>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/American-Made-Dr-Rachell-Anderson-ebook/dp/B082MSQW7Z/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1600996929&sr=8-1">Amazon</a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/american-made-dr-rachell-anderson/1124683044?ean=9781643457956">Barnes & Noble</a></li>
                {/*<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/american-made-the-heart-of-a-healer/">Stratton Press</a></li>*/}
            </nav>

            <nav className={style.booklinkBlocks}>
                <span>Purchase Paperback :</span>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/American-Made-Healer-Dr-Anderson/dp/1643456148/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600996929&sr=8-1">Amazon</a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/american-made-dr-rachell-anderson/1124683044?ean=9781643456140">Barnes & Noble</a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/American-Made/Rachell-Anderson/9781643456140?id=8009965417365">Books A Million</a></li>
            </nav>
        </>
    )
}

export default Links;
