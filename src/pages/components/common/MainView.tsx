import style from '@/styles/components/common/mainview.module.scss'

export function MainView() {
    return (
        <>
            <div className={style.mainviewWrap}>
                <figure className={style.fig}>
                    <img className={style.img} src="/img/tsuyuUnder.jpg" alt="アンダーキッズ" />
                </figure>
            </div>
        </>
    )
}