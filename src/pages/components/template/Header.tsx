import { useState, useEffect } from 'react'
import { Listlink } from '../common/Listlink'
import { Data } from '@/types/data'
import style from '@/styles/components/template/header.module.scss'

type Props = {
    title: string
}

export default function Header(props: Props) {

    const [state, setState] = useState<Props>({
        title: props.title
    })

    useEffect(() => {
        setState({
            ...state,
            title: props.title
        })
    }, [props])

    return (
        <>
            <header className={style.headerWrap}>
                <h1 className={style.title}>{state.title}</h1>
                <Listlink linkdata={Data.linkdata} />
            </header>
        </>
    )
}