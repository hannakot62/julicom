import style from './SpacePartItemsList.module.css'
import SpacePartItem from "../SpacePartItem/SpacePartItem";

export default function SpacePartItemsList({items}) {
    const itemsRender = items.map(i => <SpacePartItem title={i.title} description={i.description} price={i.price}
                                                      reviewsCount={i.reviewsCount} picSrc={i.picSrc} id={i.id}
                                                      key={i.id}/>)

    return (
        <div className={style.container}>
            {itemsRender}
        </div>
    )
}