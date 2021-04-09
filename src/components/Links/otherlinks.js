import React from 'react'
import style from '../../styles/pages.module.scss';


const Links = () => {
    return (
        <>
            <nav className={style.booklinkBlocks}>
                <span>Ebooks :</span>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Intervention-Six-Generations-Family-Life-ebook/dp/B07SVHXX2Y/ref=sr_1_1?dchild=1&keywords=9781643455341&qid=1600996574&sr=8-1">Amazon</a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/the-intervention-dr-rachell-anderson/1131981697?ean=9781643455341">Barnes & Noble</a></li>
                {/*<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/the-intervention-six-generations-of-family-life/">Stratton Press</a></li>*/}
            </nav>

            <nav className={style.booklinkBlocks}>
                <span>Purchase Paperback :</span>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Intervention-Six-Generations-Family-Life/dp/1643454161/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600996777&sr=8-1">Amazon</a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/the-intervention-dr-rachell-anderson/1131981697?ean=9781643454160">Barnes & Noble</a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Intervention/Rachell-Anderson/9781643454160?id=8009965417365&_ga=2.152793722.251334689.1600996550-1770015116.1600996550#">Books A Million</a></li>
            </nav>
        </>
    )
}

export default Links;
